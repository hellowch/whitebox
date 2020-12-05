<template>
    <div class="m-content">
        <el-footer class="f_footer">Footer</el-footer>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                Height: 0
            }
        },
        mounted(){
            //动态设置内容高度 让footer始终居底   header+footer的高度是100
            this.Height = document.documentElement.clientHeight - 100;
            //监听浏览器窗口变化　
            window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
        }
    }
</script>

<style scoped>
    .m-content {
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
    }
    .maction {
        margin: 10px 0;
    }
    .f_footer{
        height: 50px;
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }
</style>