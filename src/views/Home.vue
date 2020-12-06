<template>
    <div>
        <Header></Header>
        <div class="m-content">
            <el-tabs class="homeTabs" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全 部" name="first">
                    <el-carousel height="150px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="small">{{ item }}</h3>
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
                        urls: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                        text: "11111111111"
                    },
                    {
                        urls: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                        text: "2222222222"
                    },
                    {
                        urls: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                        text: "3333333333"
                    },
                    {
                        urls: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
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