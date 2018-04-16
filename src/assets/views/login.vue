<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
    <div class="wrapper-login">
        <text class="text">登录账户</text>
        <div class="input-box">
            <input type="tel" autofocus="true" placeholder="手机号" class="input-style" v-model="phone" @click="focus()" ref="tel">
            <input type="password" placeholder="密码" class="input-style bt" v-model="password">
        </div>
        
        <text class="login-btn" @click="signIn()">登录</text>
        <!-- <text class="forget-psw">忘记密码？</text> -->
        <!-- <div class="box">
            <text class="text">还没有账号？</text>
            <text class="btn" @click="jumpTo('/register')">注册</text>
        </div>
        <text class="forget-psw" @click="jumpTo('/forgetPSW')">忘记密码？</text> -->
    </div>
    </div>
</template>
<style scoped>
    .wrapper{
        width: 750px;
        height: 1245px;
        position: absolute;
        top:0;
        left:0;
        background-color:#f8f8f8;
    }
    .wrapper-login{
        margin-top: 50px;
        margin-left: 30px;
        width: 690px;
        align-items: center;
    }
    .text{
        font-size: 36px;
        color: #666666;
    }
    .input-box{
        width: 690px;
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 40px;
        background-color: #ffffff;
        border-color:#f0f0f0;
        border-width: 1px;
    }
    .input-style{
        width: 630px;
        /*height: 60px;*/
        font-size: 34px;
        color: #666666;
        /*line-height: 60px;*/
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .bt{
        border-top-width: 1px;
        border-bottom-width: 0px;
        border-right-width: 0px;
        border-left-width: 0px;
        border-color: #f0f0f0;
    }
    .login-btn{
        width: 690px;
        text-align: center;
        font-size: 34px;
        color: #ffffff;
        background-color: #009ffc;
        height: 80px;
        line-height: 80px;
        margin-top:80px;
        border-radius: 2px;
    }
    .box{
        width: 500px;
        flex-direction: row;
        align-items: center;
        justify-content:center;
        margin-top: 30px;
    }
    .text{
        color: #666666;
        font-size: 32px;
    }
    .btn{
        color: #009FF0;
        font-size: 32px;
    }
    .forget-psw{
        margin-top: 40px;
        color: #009FF0;
        font-size: 32px;
        width: 400px;
        text-align: center;
    }
    .mt30{
        margin-top: 40px;
    }
</style>

<script>
    import util from '../util';
    var modal = weex.requireModule('modal');
    var stream = weex.requireModule('stream');
    var storage = weex.requireModule('storage');
    export default {
        data () {
            return {
                phone: '',
                password: ''
            }
        },
        created(){
            //weex.requireModule('PDFModule').readPDF("book id", "token");
        },
        methods: {
            signIn(){
                var _self = this;
                var ph = this.phone,
                    pw = this.password;
                if(!ph.length){
                    modal.toast({
                        message: "请输入手机号码",
                        duration: 1
                    });
                    return false;
                }
                if(!pw.length){
                    modal.toast({
                        message: "请输入密码",
                        duration: 1
                    })
                }
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    url: 'http://zl.senseitgroup.com/app/login?phone='+ph+'&password='+pw
                    //url: '/json/login?phone=17327486666&password=123456'
                }, function(res){
                    if(res.data.code == 200){
                        let result = res.data.result;
                        storage.setItem('token',result.api_token);
                        _self.$router.push('/home');
                    }else{
                        modal.toast({
                            message: res.data.message,
                            duration: 3
                        })
                    }
                    
                })
            },
            jumpTo(_url){
                this.$router.push(_url);
            },
            focus(){
                this.$refs.tel.focus();
            }
        }
    }
</script>