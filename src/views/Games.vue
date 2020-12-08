<template>
    <div>
        <Header></Header>
        <v-touch v-on:swipeleft="swiperleft"  v-on:swiperight="swiperright" class="v-touch">
            <div class="m-content">
                <el-row :gutter="5">
                    <el-col :span="12"  v-for="(model,key) in models" :key="key" style="margin-top: 10px">

                    <span @click="gameDetail(model)">

                        <el-card :body-style="{ padding: '0px' }" shadow="hover" >
                        <img :src="model.url" class="image">
                        <div style="padding: 10px;">
                            <span>{{ model.name }}</span>
                            <span style="margin-left: 10px">{{model.price}}</span>
                        </div>
                    </el-card>

                    </span>

                    </el-col>
                </el-row>

            </div>
        </v-touch>
        <Footer></Footer>
    </div>
</template>


<script>
    import Header from "../components/Header"
    import Footer from "../components/Footer";
    export default {
        components: {
            Header,
            Footer
        },
        name: "Games",
        data() {
            return {
                activeName: 'first',
                currentDate: new Date(),
                models: [
                    {
                        id: '1',
                        name: '英雄联盟',
                        gameIcon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607327229304&di=ac154c93242177a67030c42e84a4510b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F02%2F20181002121238_xtuik.jpg',
                        score:'8.0',   //10分最高
                        developers:'开发商: Riot Games',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253308961&di=112bb4ba87e25e0ab00940efd3aaaff3&imgtype=0&src=http%3A%2F%2Fi1.3conline.com%2Fimages%2Fpiclib%2F201306%2F17%2Fbatch%2F1%2F179586%2F1371462425243b4sfs625yv_medium.jpg',
                        introduction:'《英雄联盟》（简称LOL）是由美国拳头游戏（Riot Games）开发、中国大陆地区腾讯游戏代理运营的英雄对战MOBA竞技网游。',
                        developersText: "在这里，魔法不只是一种神秘莫测的能量概念。它是实体化的物质，可以被引导、成形、塑造和操作。符文之地的魔法拥有自己的自然法则。源生态魔法随机变化的结果改变了科学法则。",
                        price:'￥50'
                    },
                    {
                        id: '2',
                        name: '彩虹六号',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073678498,370147010&fm=26&gp=0.jpg',
                        introduction:'简介',
                        developersText: "2222222222",
                        price:'￥60'
                    },
                    {
                        id: '3',
                        name: '怪物猎人世界',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253349674&di=9823dd2caee4d7a09740b3fcb8e482ed&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-08-13%2F5b7112bae4b37.jpg',
                        introduction:'简介',
                        developersText: "333333333333",
                        price:'￥300'
                    },
                    {
                        id: '4',
                        name: '约会大作战',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253389736&di=20dd4d6873c5497c49eacb5243a99b58&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7af40ad162d9f2d3c7ef846da8ec8a136227ccb2.jpg',
                        introduction:'简介',
                        developersText: "444444444444",
                        price:'￥35'
                    },
                    {
                        id: '5',
                        name: '英雄联盟',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253308961&di=112bb4ba87e25e0ab00940efd3aaaff3&imgtype=0&src=http%3A%2F%2Fi1.3conline.com%2Fimages%2Fpiclib%2F201306%2F17%2Fbatch%2F1%2F179586%2F1371462425243b4sfs625yv_medium.jpg',
                        introduction:'简介',
                        developersText: "11111111111",
                        price:'￥50'
                    },
                    {
                        id: '6',
                        name: '彩虹六号',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073678498,370147010&fm=26&gp=0.jpg',
                        introduction:'简介',
                        developersText: "2222222222",
                        price:'￥60'
                    },
                    {
                        id: '7',
                        name: '怪物猎人世界',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253349674&di=9823dd2caee4d7a09740b3fcb8e482ed&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-08-13%2F5b7112bae4b37.jpg',
                        introduction:'简介',
                        developersText: "333333333333",
                        price:'￥300'
                    },
                    {
                        id: '8',
                        name: '约会大作战',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253389736&di=20dd4d6873c5497c49eacb5243a99b58&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7af40ad162d9f2d3c7ef846da8ec8a136227ccb2.jpg',
                        introduction:'简介',
                        developersText: "444444444444",
                        price:'￥35'
                    },
                    {
                        id: '9',
                        name: '英雄联盟',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253308961&di=112bb4ba87e25e0ab00940efd3aaaff3&imgtype=0&src=http%3A%2F%2Fi1.3conline.com%2Fimages%2Fpiclib%2F201306%2F17%2Fbatch%2F1%2F179586%2F1371462425243b4sfs625yv_medium.jpg',
                        introduction:'简介',
                        developersText: "11111111111",
                        price:'￥50'
                    },
                    {
                        id: '10',
                        name: '彩虹六号',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073678498,370147010&fm=26&gp=0.jpg',
                        introduction:'简介',
                        developersText: "2222222222",
                        price:'￥60'
                    },
                    {
                        id: '11',
                        name: '怪物猎人世界',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253349674&di=9823dd2caee4d7a09740b3fcb8e482ed&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-08-13%2F5b7112bae4b37.jpg',
                        introduction:'简介',
                        developersText: "333333333333",
                        price:'￥300'
                    },
                    {
                        id: '12',
                        name: '约会大作战',
                        gameIcon: '游戏图标',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253389736&di=20dd4d6873c5497c49eacb5243a99b58&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7af40ad162d9f2d3c7ef846da8ec8a136227ccb2.jpg',
                        introduction:'简介',
                        developersText: "444444444444",
                        price:'￥35'
                    },
                ]
            };
        },
        methods: {
            gameDetail(model){
                // window.console.log(model);
                // this.$router.push("/UserGameDetail/" + model.id )
                this.$router.push({
                    path: '/gameDetail',
                    name: 'GameDetail',
                    params: {
                        id: model.id,
                        model: model
                    }
                })
            },
            swiperleft: function () {  //右划切换到goods页
                this.$router.push({'path':'/user'});
            },
            swiperright: function () { //左滑切换到detail页
                this.$router.push({'path':'/community'});
            }
        }
    }
</script>

<style>
    .v-touch{
        touch-action: pan-y !important;
    }
</style>

<style scoped>
    .m-content {
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 50px;

    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }


    .image {
        width: 100%;
        display: block;
    }



    .el-row {
        /*margin-bottom: 20px;*/
        margin-top: 20px;
        display:flex;
        flex-wrap: wrap;
    }
    .el-row  .el-card {
        min-width: 100%;
        height: 100%;
        /*margin-right: 20px;*/
    }
</style>