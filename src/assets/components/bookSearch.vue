<template>
    <div class="bookSearchBox">
        <text class="bookSearch cell-tag">馆藏查询</text>
        <div class="searchBox">
            <wxc-searchbar ref="wxc-searchbar"
                     @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
                     @wxcSearchbarInputReturned="wxcSearchbarInputReturned"
                     @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                     @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked"
                     @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
                     @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"></wxc-searchbar>
        </div>
    </div>
</template>
<style scoped>
    .cell-tag{
        text-align: center;
        font-size: 36px;
        background-color:#009FF0;
        color:#ffffff;
        height: 70px;
        justify-content: center;
        font-weight: 600;
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;
    }
    .searchBox{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import { WxcSearchbar } from 'weex-ui'
    import util from '../util';
    export default {
        components: { WxcSearchbar },
        data: () => ({
            value: ''
        }),
        methods: {
            wxcSearchbarInputOnFocus () {
            },
            wxcSearchbarInputOnBlur () {
            },
            wxcSearchbarInputReturned (){
            },
            wxcSearchbarCloseClicked () {
            },
            wxcSearchbarInputOnInput (e) {
                this.value = e.value;
            },
            wxcSearchbarCancelClicked () {
            },
            wxcSearchbarInputDisabledClicked () {
            },
            wxcSearchbarDepChooseClicked () {
            }
        }
    }
</script>