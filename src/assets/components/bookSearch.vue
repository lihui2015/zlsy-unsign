<template>
    <div class="bookSearchBox">
        <div class="cell-tag bookSearch">
            <text class="tag-text">馆藏查询</text>
        </div>
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
        background-color:#009FF0;
        height: 70px;
        justify-content: center;
        font-weight: 600;
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;
    }
    .bookSearch{
        margin-top: 20px;
    }
    .tag-text{
        font-size: 36px;
        color:#ffffff;
        font-weight: 600;
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