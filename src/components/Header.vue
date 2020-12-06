<template>
    <div class="m-content">
        <el-header class="h_header element.style">
            <el-row class="demo-avatar demo-basic">
                <el-col :span="1">
                    <div class="demo-basic--circle">
                        <div class="block"><el-avatar :size="35" :src="circleUrl"></el-avatar></div>
                    </div>
                </el-col>

                <div class="icon-warp">
                    <i class="el-icon-search"></i>
                    <i style="margin-left: 10px" class="el-icon-message"></i>
                </div>
            </el-row>

            <el-divider></el-divider>
        </el-header>
    </div>

</template>


<script>
    // 引入element-ui依赖
    import ElementUI from 'element-ui';
    export default {
        name: "Header",
        data () {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            }
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
    .h_header{
        height: 35px !important;
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        z-index: 1;
    }
    .el-divider{
        margin: 5px 0;
    }
    .el-avatar{
        margin-top: 5px;
    }
    .icon-warp{
        position: relative;
        margin-top: 15px;
        text-align: right;
        font-size: 50px;
    }

</style>