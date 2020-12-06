<template>
    <div class="m-content">
        <el-footer class="f_footer">
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1"><el-link href="/Home">首  页</el-link></el-menu-item>
                <el-menu-item index="2"><el-link href="/Community">社  区</el-link></el-menu-item>
                <el-menu-item index="3"><el-link href="/Games">游戏库</el-link></el-menu-item>
                <el-menu-item index="4"><el-link href="/User">我</el-link></el-menu-item>
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
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
        background-color: #FFFFFF;
    }
    .el-menu-demo{
        width: 100%;
    }
</style>