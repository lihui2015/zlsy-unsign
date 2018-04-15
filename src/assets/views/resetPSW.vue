<template>
<div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
    <div class="wrapper-step1 wrapper-login" v-if="step1">
        <text class="text">忘记密码</text>
        <input type="tel" autofocus="true" placeholder="手机号" class="input-style" v-model="phone" @click="focus" ref="tel">
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
        
        <text class="login-btn" @click="next()">下一步</text>
    </div>
    <div class="wrapper-step2 wrapper-login" v-else>
        <text class="text">忘记密码</text>

        <input type="password" placeholder="新密码" class="input-style" v-model="password">
        <input type="password" placeholder="确认密码" class="input-style" v-model="confirm_password">
        <text class="login-btn" @click="signIn()">重置密码</text>
    </div>
</div>
</template>
<style scoped>
    .wrapper{
        width: 750px;
        height: 1245px;
        position: fixed;
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
    .wrapper-step2{
        width: 750px;
        height: 1245px;
        position: absolute;
        top:0;
        left:0;
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
    .forget-psw{
        margin-top: 40px;
        color: #666666;
        font-size: 32px;
        width: 400px;
        text-align: center;
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
                TIME:1000,
                step1:true
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
                var np = this.password,
                    op = this.confirm_password;
                if(!np.length){
                    modal.toast({
                        message: "请输入新密码",
                        duration: 1
                    })
                    return false;
                }
                if(!op.length){
                    modal.toast({
                        message: "请输入确认密码",
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
                    body:JSON.stringify({"password":np,"password_confirmation":op}),
                    url: 'http://zl.senseitgroup.com/app/resetPassword'
                }, function(res){
                    if(res.data.code == 200){
                        let result = res.data.result;
                        modal.toast({
                            message: res.data.message,
                            duration: 1
                        })
                        _self.$router.push('/login');
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
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({"phone":ph}),
                    url: 'http://zl.senseitgroup.com/app/sendCode'
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
            next(){
                var _self = this;

                _self.step1 = false;

                var ph = this.phone,
                    cd = this.code;
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
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({"phone":ph,"code":cd}),
                    url: 'http://zl.senseitgroup.com/app/resetPhoneValidate'
                }, function(res){
                    if(res.data.code == 200){
                        let result = res.data.result;
                        _self.step1 = false;
                    }else{
                        modal.toast({
                            message: res.data.message,
                            duration: 3
                        })
                    }
                    
                })
            }
        }
    }
</script>