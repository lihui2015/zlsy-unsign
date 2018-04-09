<template>
<image @click="uploadTest" :src="uploadFileTipImage" :style="uploadNativeStyle"></image>
   </template>

    <script>
// import GlobalApiConfig from "../api/config/GlobalAipConfig";
// import weexUtils from "../utils/WeexUtils";

import Nat from 'natjs'


const modal = weex.requireModule('modal');

const actionSheet = weex.requireModule('actionSheet');
const photo = weex.requireModule('photo');

const nat_camera = weex.requireModule('nat_camera');
const nat_network_transfer = weex.requireModule('nat_network_transfer');

//图片服务器地址
// const PIC_SERVICE_URL = GlobalApiConfig.PIC_SERVICE_URL;
// const PIC_SERVICE_DOMAIN = GlobalApiConfig.PIC_SERVICE_DOMAIN;
const PIC_SERVICE_URL = 'http://www.domain.com/app/file/upload';
const PIC_SERVICE_DOMAIN = 'http://www.imbawin.com/';

export default {
    props: {
        //上传的提示图片
        uploadFileTipImage: {
            type: String,
            default: "http://www.imbawin.com/images/default.png"
        },
        //上传区域宽度
        width: {
            type: Number,
            default: 200
        },
        //上传区域高度
        height: {
            type: Number,
            default: 200
        },
        //是否自动上传
        autoUpload: {
            type: Boolean,
            default: true
        },
        //上传的文件类型
        accept: {
            type: String,
            default: "*",
        },
        //可以选择的最大文件数量
        selectedMaxNum: {
            type: Number,
            default: 1
        },
        type: {
            //上传类型用来区分在一个页面有多个文件上传的时候来区分具体回调操作
            type: String,
            default: "upload"
        },
        orderNumber: {
            type: Number,
            default: 0
        },
        //裁图比例
        proportion:function(){
            return [1,1];
        },
        // proportion: {
        //     type: Array,
        //     default: [1, 1]
        // },
        crop: {
            default: true
        },
        radius:{ //圆角大小
            default:0
        }
    },
    data() {
        const width = this.width;
        const height = this.height;
        let uploadNativeStyle = {
            width: width + "px",
            height: height + "px",
        };
        return {
            uploadNativeStyle
        }
    },
    methods: {
        uploadTest(){
            console.log(Nat.image.pick);
            Nat.image.pick({
                limit: 3,
                showCamera: false
            }, (err, ret) => {
                console.log(ret.paths)
            })
        },
        uploadByNative(filePath) {
            const self = this;
            console.log("上传filePath：" + filePath);
            nat_network_transfer.upload({
                url: PIC_SERVICE_URL,
                path: filePath
            }, (result) => {
                console.log("-result-> " + JSON.stringify(result));

                const {data, ok, progress} = result;
                console.log(data);
                console.log(ok);
                if (progress) {
                    console.log("上传中!");
                    return;
                }
                if (!ok) {
                    console.log("上传失败!");
                    return;
                }
                if (data == null) {
                    console.log("上传无结果!");
                    return;
                }

                const resp = JSON.parse(data);
                const {url} = resp;
                const map = {};
                result = {
                    orderNumber: self.orderNumber,
                    url: PIC_SERVICE_DOMAIN+ url
                }
                console.log("map->  " + JSON.stringify(map));
                self.$emit("uploadCallback", {
                    result,
                    type: this.type,
                    callback: function (width = 200, height = 200) {
                        self.uploadNativeStyle = {
                            width: width + "px",
                            height: height + "px"
                        }
                    }
                });

            });
        },
        chooseImage() {
            //在原生环境下先选择图片
            //http://natjs.com/#/reference/media/image
            const items = [];
            items[0] = {'type': 0, 'message': '拍照'};
            items[1] = {'type': 0, 'message': '从相册取'};
            items[2] = {'type': 1, 'message': '取消'};

            const self = this;
            console.log(actionSheet);
            actionSheet.create({
                'items': items,
                'title': '提示',
                'message': '请选择'
            }, (ret) => {
                let result = ret.result;
                console.log("-图片选择或拍照结果-> " + JSON.stringify(ret));
                if (result !== 'success') {
                    console.log("图片选择或拍照失败");
                    return;
                }
                const {value, index} = ret.data;
                const proportion = {};
                if (self.proportion.length === 0) {
                    //表示不限制
                } else {
                    proportion.aspectX = self.proportion[0];
                    proportion.aspectY = self.proportion[1]
                }
                const {aspectX, aspectY} = proportion;
                let flag = index === 0;
                photo.capture(flag, this.crop, {aspectX: aspectX, aspectY: aspectY}, (data) => {
                    console.log("local path-> " + data);
                    if (data === undefined || data === null) {
                        modal.toast({
                            message: '图片选择出现异常!',
                            duration: 3
                        })
                        //weexUtils.toast("图片选择出现异常!");
                        return;
                    }
                    self.uploadByNative(data);
                }, (message) => {
                    modal.toast({
                        message: message,
                        duration: 3
                    })
                    //weexUtils.toast(message);
                });
            });
        },
        uploadImage(event) {
            this.chooseImage();
        }
    },
    beforeMount() {
        console.log("this.rudius-> "+this.radius);
        if (this.radius>0) {
            this.uploadNativeStyle.borderRadius = this.radius + "px";
        }
    }
}

  </script>

<style scoped>

</style>