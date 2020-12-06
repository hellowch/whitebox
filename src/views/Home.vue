<template>

    <div>
        <Header></Header>
        <div class="m-content">

            <el-tabs class="homeTabs" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全 部" name="first">
                    <el-carousel height="150px">
                        <el-carousel-item  v-for="(model,key) in models" :key="key">
                            <img :src="model.urls" class="image small">
                        </el-carousel-item>
                    </el-carousel>
                    <el-divider></el-divider>

                    <el-row>
                        <el-col :span="30" v-for="(model,key) in models" :key="key">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <img :src="model.urls" class="image">
                                <div style="padding: 14px;">
                                    <span>{{ model.text }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ currentDate }}</time>
<!--                                        <el-button type="text" class="button">操作按钮</el-button>-->
                                    </div>
                                </div>
                            </el-card>
                            <el-divider></el-divider>
                        </el-col>
                    </el-row>

                </el-tab-pane>
                <el-tab-pane label="PC游戏" name="second">
                    <h2>这里是PC游戏</h2>
                    <h2>这里是PC游戏</h2>
                    <h2>这里是PC游戏</h2>
                    <h2>这里是PC游戏</h2>
                    <h2>这里是PC游戏</h2>
                    <h2>这里是PC游戏</h2>
                    <h2>这里是PC游戏</h2>
                    <h2>这里是PC游戏</h2>
                </el-tab-pane>
                <el-tab-pane label="主机游戏" name="third">
                    <h2>这里是主机游戏</h2>
                    <h2>这里是主机游戏</h2>
                    <h2>这里是主机游戏</h2>
                    <h2>这里是主机游戏</h2>
                    <h2>这里是主机游戏</h2>
                    <h2>这里是主机游戏</h2>
                    <h2>这里是主机游戏</h2>
                    <h2>这里是主机游戏</h2>
                    <h2>这里是主机游戏</h2>
                </el-tab-pane>
                <el-tab-pane label="手机游戏" name="fourth">
                    <h2>这里是手机游戏</h2>
                    <h2>这里是手机游戏</h2>
                    <h2>这里是手机游戏</h2>
                    <h2>这里是手机游戏</h2>
                    <h2>这里是手机游戏</h2>
                    <h2>这里是手机游戏</h2>
                    <h2>这里是手机游戏</h2>
                </el-tab-pane>
            </el-tabs>


        </div>

        <Footer></Footer>

    </div>
</template>

<script>
    import Header from "../components/Header"
    import Footer from "../components/Footer";
    export default {
        components: {
            Header,
            Footer,
        },
        name: "home",
        data() {
            return {
                activeName: 'first',
                currentDate: new Date(),
                models: [
                    {
                        urls: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253308961&di=112bb4ba87e25e0ab00940efd3aaaff3&imgtype=0&src=http%3A%2F%2Fi1.3conline.com%2Fimages%2Fpiclib%2F201306%2F17%2Fbatch%2F1%2F179586%2F1371462425243b4sfs625yv_medium.jpg',
                        text: "11111111111"
                    },
                    {
                        urls: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073678498,370147010&fm=26&gp=0.jpg',
                        text: "2222222222"
                    },
                    {
                        urls: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253349674&di=9823dd2caee4d7a09740b3fcb8e482ed&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-08-13%2F5b7112bae4b37.jpg',
                        text: "3333333333"
                    },
                    {
                        urls: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253389736&di=20dd4d6873c5497c49eacb5243a99b58&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7af40ad162d9f2d3c7ef846da8ec8a136227ccb2.jpg',
                        text: "4444444444"
                    },
                ]
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
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
    .homeTabs{
        /*position: fixed;*/
        margin: 10px 5%;
        left: 0px;
        right: 0px;
        z-index: 2;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>