<template>
    <div class="wrapper-login">
        <text class="text">登录账户</text>
        <input type="number" autofocus="true" placeholder="手机号" class="input-style" v-model="phone">
        <input type="password" placeholder="密码" class="input-style" v-model="password">
        <text class="login-btn" @click="login()">立即登录</text>
        <text class="forget-psw">忘记密码？</text>
    </div>
</template>
<style scoped>
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
        padding: 10px 20px;
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
    var modal = weex.requireModule('modal');
    let stream = weex.requireModule('stream');
    export default {
        data () {
            return {
                phone: '',
                password: ''
            }
        },
        methods: {
            login(){
                modal.toast({
                    message: 'login?phone='+this.phone+'&password='+this.password,
                    duration: 3
                })
                console.log(this.phone)
                console.log(this.password)
                var ph = this.phone,
                    pw = this.password;
                stream.fetch({
                    method: 'GET',
                    type: 'json',
                    headers:{
                        'access-token': 'c750c77ee41ea47b5932eba894f8f4b1'
                    },
                    url: 'http://www.imbawin.com/app/login?phone='+ph+'&password='+pw
                }, function(res){
                    let result = res.data.result;
                    console.log(result);
                })
              // this.GET('login?phone='+this.phone+'&password='+this.password, res => {
              //     let result = res.data.result;
              //     console.log(result);
              //     modal.toast({
              //           message: result,
              //           duration: 3
              //       })
              // })
            }
        }
    }
</script>