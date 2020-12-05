<template>
    <div class="m-content">
        <el-footer class="f_footer">
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">首  页</el-menu-item>
                <el-menu-item index="2">社  区</el-menu-item>
                <el-menu-item index="3">游戏库</el-menu-item>
                <el-menu-item index="4"> 我 </el-menu-item>
            </el-menu>

        </el-footer>
    </div>
</template>

<script>
    export default {
        name: "Footer",

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
    .el-menu-demo{
        width: 100%;
    }
</style>