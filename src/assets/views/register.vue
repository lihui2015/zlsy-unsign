<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
    <div class="wrapper-login">
        <text class="text">注册账户</text>
        <input type="tel" autofocus="true" placeholder="手机号" class="input-style" v-model="phone" ref="tel" @click="focus">
        <div class="validate">
            <input type="text" placeholder="验证码" class="input-style validate-input" v-model="code">
            <div class="validate-btn">
                <text class="v-btn" @click="validate()" v-if="before">获取验证码</text>
                <wxc-countdown
                    :interval="1000"
                    tpl="{s}秒"
                    :timeBoxStyle="{backgroundColor: '#ffffff', height: '60px'}"
                    :timeTextStyle="{fontSize: '28px', color: '#333333'}"
                    :dotTextStyle="{color: '#333333', fontSize: '28px',justifyContent: 'center'}"
                    :dotBoxStyle="{width: '48px',height: '60px'}"
                    :style="{marginTop: '0px', justifyContent: 'center'}"
                    :time="TIME"
                    @wxcOnComplete="onCompleted" v-else>
                </wxc-countdown>
            </div>
        </div>
        <input type="password" placeholder="密码" class="input-style" v-model="password">
        <text class="login-btn" @click="signIn()">注册</text>
        <div class="box">
            <text class="text">已有账号，请</text>
            <text class="btn" @click="jumpTo('/home')">登陆</text>
        </div>
    </div>
    </div>
    </div>
</template>
<style scoped>
    .wrapper{
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
    .validate{
        flex-direction: row;
        align-items: center;
    }
    .validate-input{
        width:250px;
    }
    .validate-btn{
        width: 150px;
        border-width: 1px;
        border-left-width: 0px;
        border-color: #cccccc;
        height: 60px;
        margin-top:40px;
    }
    .v-btn{
        font-size: 28px;
        color: #333333;
        line-height: 60px;
        text-align: center;
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
</style>

<script>
    import util from '../util';
    import { WxcCountdown } from 'weex-ui'
    var modal = weex.requireModule('modal');
    var stream = weex.requireModule('stream');
    var storage = weex.requireModule('storage');
    export default {
        data () {
            return {
                phone: '',
                code: '',
                password: '',
                before:true,
                TIME:1000
            }
        },
        components: { WxcCountdown },
        watch: {
            // before:function(val,oldVal){
            //     console.log('new: %s, old: %s', val, oldVal)
            // }
        },
        methods: {
            signIn(){
                var _self = this;
                var ph = this.phone,
                    cd = this.code,
                    pw = this.password;
                if(!ph.length){
                    modal.toast({
                        message: "请输入手机号码",
                        duration: 1
                    });
                    return false;
                }
                if(!cd.length){
                    modal.toast({
                        message: "请输入验证码",
                        duration: 1
                    })
                    return false;
                }
                if(!pw.length){
                    modal.toast({
                        message: "请输入密码",
                        duration: 1
                    })
                    return false;
                }
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({"phone":ph,"code":cd,"password":pw}),
                    url: 'http://zl.senseitgroup.com/app/register'
                }, function(res){
                    if(res.data.code == 200){
                        //注册成功
                        let result = res.data.result;
                        modal.toast({
                            message: res.data.message+"，请登陆",
                            duration: 1
                        })
                        _self.$router.push('/home');
                    }else if(res.data.code == 3001){
                        //已经注册过
                        modal.toast({
                            message: res.data.message,
                            duration: 3
                        })
                    }else{
                        modal.toast({
                            message: res.data.message,
                            duration: 3
                        })
                    }
                })
            },
            validate(){
                var ph = this.phone;
                var _self = this;
                if(!ph.length){
                    modal.toast({
                        message: "请输入手机号码",
                        duration: 1
                    });
                    return false;
                }
                
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    url: 'http://zl.senseitgroup.com/app/sendCode?phone='+ph
                }, function(res){
                    if(res.data.code == 200){
                        let result = res.data.result;
                        _self.before = false;
                        _self.TIME=new Date().getTime() + 60000
                        modal.toast({
                            message: res.data.message,
                            duration: 3
                        })
                    }else{
                        modal.toast({
                            message: res.data.message,
                            duration: 3
                        })
                    }
                    
                })
            },
            onCompleted(){
                this.before=true;
            },
            focus(){
                this.$refs.tel.focus();
            },
            jumpTo(_url){
                this.$router.push(_url);
            }
        }
    }
</script>