<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
    <div class="wrapper-login">
        <text class="text">登录账户</text>
        <input type="tel" autofocus="true" placeholder="手机号" class="input-style" v-model="phone" @click="focus()" ref="tel">
        <input type="password" placeholder="密码" class="input-style" v-model="password">
        <text class="login-btn" @click="signIn()">立即登录</text>
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
        background-color:#ffffff;
    }
    .wrapper-login{
        margin-top: 50px;
        margin-left: 125px;
        width: 500px;
        align-items: center;
    }
    .text{
        font-size: 36px;
        color: #333333;
    }
    .input-style{
        width: 400px;
        height: 60px;
        font-size: 34px;
        color: #666666;
        line-height: 60px;
        border-width: 1px;
        border-color: #cccccc;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 40px;
    }
    .login-btn{
        width: 400px;
        text-align: center;
        font-size: 34px;
        color: #ffffff;
        background-color: green;
        height: 60px;
        line-height: 60px;
        margin-top:40px;
        border-radius: 10px;
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