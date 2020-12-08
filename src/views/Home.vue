<template>

    <div>
        <Header></Header>
        <div class="m-content">

            <el-tabs class="homeTabs" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全 部" name="first">
                    <el-carousel height="150px">
                        <el-carousel-item  v-for="(model,key) in models.slice(0,4)" :key="key">
                            <img :src="model.url" class="image small">
                        </el-carousel-item>
                    </el-carousel>


                    <el-row style="margin-bottom: 20px">
                        <el-col :span="30" v-for="(model,key) in models" :key="key">
                            <div class="link-top"></div>
                            <el-card class="el-card" :body-style="{ padding: '0px'}" shadow="hover" >
                                <img :src="model.url" class="imageText">
                                <div class="text">
                                    <div class="gamename">
                                        <p>{{model.title}}</p>
                                    </div>
                                    <div class="gamedata">
                                        <p>{{model.data}}</p>
                                        <i style="margin-top: 16px;" class="el-icon-s-comment">{{model.comments}}</i>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>

                </el-tab-pane>
                <el-tab-pane label="PC游戏" name="second">
                    <el-row style="margin-bottom: 20px">
                        <el-col :span="30" v-for="(model,key) in models" :key="key">
                            <div class="link-top"></div>
                            <el-card class="el-card" :body-style="{ padding: '0px'}" shadow="hover" >
                                <img :src="model.url" class="imageText">
                                <div class="text">
                                    <div class="gamename">
                                        <p>{{model.title}}</p>
                                    </div>
                                    <div class="gamedata">
                                        <p>{{model.data}}</p>
                                        <i style="margin-top: 16px;" class="el-icon-s-comment">{{model.comments}}</i>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="主机游戏" name="third">
                    <el-row style="margin-bottom: 20px">
                        <el-col :span="30" v-for="(model,key) in models" :key="key">
                            <div class="link-top"></div>
                            <el-card class="el-card" :body-style="{ padding: '0px'}" shadow="hover" >
                                <img :src="model.url" class="imageText">
                                <div class="text">
                                    <div class="gamename">
                                        <p>{{model.title}}</p>
                                    </div>
                                    <div class="gamedata">
                                        <p>{{model.data}}</p>
                                        <i style="margin-top: 16px;" class="el-icon-s-comment">{{model.comments}}</i>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="手机游戏" name="fourth">
                    <el-row style="margin-bottom: 20px">
                        <el-col :span="30" v-for="(model,key) in models" :key="key">
                            <div class="link-top"></div>
                            <el-card class="el-card" :body-style="{ padding: '0px'}" shadow="hover" >
                                <img :src="model.url" class="imageText">
                                <div class="text">
                                    <div class="gamename">
                                        <p>{{model.title}}</p>
                                    </div>
                                    <div class="gamedata">
                                        <p>{{model.data}}</p>
                                        <i style="margin-top: 16px;" class="el-icon-s-comment">{{model.comments}}</i>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
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
                        id: '1',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253308961&di=112bb4ba87e25e0ab00940efd3aaaff3&imgtype=0&src=http%3A%2F%2Fi1.3conline.com%2Fimages%2Fpiclib%2F201306%2F17%2Fbatch%2F1%2F179586%2F1371462425243b4sfs625yv_medium.jpg',
                        title: "英雄联盟游戏测试",
                        data:'32分钟前',
                        comments:'179'
                    },
                    {
                        id: '2',
                        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073678498,370147010&fm=26&gp=0.jpg',
                        title: "发现一款不错的射击游戏",
                        data:'58分钟前',
                        comments:'112'
                    },
                    {
                        id: '3',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253349674&di=9823dd2caee4d7a09740b3fcb8e482ed&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-08-13%2F5b7112bae4b37.jpg',
                        title: "有人一起来砍龙吗？",
                        data:'1小时前',
                        comments:'95'
                    },
                    {
                        id: '4',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253389736&di=20dd4d6873c5497c49eacb5243a99b58&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7af40ad162d9f2d3c7ef846da8ec8a136227ccb2.jpg',
                        title: "这个游戏画风太棒了！",
                        data:'2小时前',
                        comments:'100'
                    },
                    {
                        id: '5',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253308961&di=112bb4ba87e25e0ab00940efd3aaaff3&imgtype=0&src=http%3A%2F%2Fi1.3conline.com%2Fimages%2Fpiclib%2F201306%2F17%2Fbatch%2F1%2F179586%2F1371462425243b4sfs625yv_medium.jpg',
                        title: "英雄联盟游戏测试",
                        data:'32分钟前',
                        comments:'179'
                    },
                    {
                        id: '6',
                        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073678498,370147010&fm=26&gp=0.jpg',
                        title: "发现一款不错的射击游戏",
                        data:'58分钟前',
                        comments:'112'
                    },
                    {
                        id: '7',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253349674&di=9823dd2caee4d7a09740b3fcb8e482ed&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-08-13%2F5b7112bae4b37.jpg',
                        title: "有人一起来砍龙吗？",
                        data:'1小时前',
                        comments:'95'
                    },
                    {
                        id: '8',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253389736&di=20dd4d6873c5497c49eacb5243a99b58&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7af40ad162d9f2d3c7ef846da8ec8a136227ccb2.jpg',
                        title: "这个游戏画风太棒了！",
                        data:'2小时前',
                        comments:'100'
                    },
                    {
                        id: '9',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253308961&di=112bb4ba87e25e0ab00940efd3aaaff3&imgtype=0&src=http%3A%2F%2Fi1.3conline.com%2Fimages%2Fpiclib%2F201306%2F17%2Fbatch%2F1%2F179586%2F1371462425243b4sfs625yv_medium.jpg',
                        title: "英雄联盟游戏测试",
                        data:'32分钟前',
                        comments:'179'
                    },
                    {
                        id: '10',
                        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073678498,370147010&fm=26&gp=0.jpg',
                        title: "发现一款不错的射击游戏",
                        data:'58分钟前',
                        comments:'112'
                    },
                    {
                        id: '11',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253349674&di=9823dd2caee4d7a09740b3fcb8e482ed&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-08-13%2F5b7112bae4b37.jpg',
                        title: "有人一起来砍龙吗？",
                        data:'1小时前',
                        comments:'95'
                    },
                    {
                        id: '12',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253389736&di=20dd4d6873c5497c49eacb5243a99b58&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7af40ad162d9f2d3c7ef846da8ec8a136227ccb2.jpg',
                        title: "这个游戏画风太棒了！",
                        data:'2小时前',
                        comments:'100'
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

    .imageText {
        width: 35%;
        display: block;
        border-radius: 8px;
        float:right;
    }
    .text{
        display: flex;
        flex-direction: column;
    }
    .gamename{
        height: 40px;
        margin-left: 25px;
        text-align: left;
    }
    .gamedata{
        margin-left: 20px;
        margin-top: 13px;
        width: 325px;
        height: 20px;
        display: flex;
        justify-content:space-between;
        color: #C0C4CC;
    }
    .el-card{
        margin-top: 5px;
    }
    /*中间的过度的横线*/
    .link-top {
        margin-top: 6px;
        border-top: solid #e3e3e3 5px;
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