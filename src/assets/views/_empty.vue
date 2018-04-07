<template>
    <div >
    </div>
</template>
<style scoped>

</style>

<script>
    export default {
        name: 'empty',
        created () {
            this.goBack();
        },
        methods: {
            goBack(){
                this.$router && this.$router.go(-1);
            }
        }
    }
</script>