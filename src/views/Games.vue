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
                        gameIcon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3763674846,3606470673&fm=26&gp=0.jpg',
                        score:'8.0',   //10分最高
                        developers:'开发商: Riot Games',
                        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.9game.cn%2Fs%2F9game%2Fg%2F2020%2F12%2F23%2F193723316.jpg&refer=http%3A%2F%2Fimage.9game.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611319376&t=1d7e639cd0bf5ddbf67b3865b52880c5',
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
                        gameIcon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3763674846,3606470673&fm=26&gp=0.jpg',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.9game.cn%2Fs%2F9game%2Fg%2F2020%2F12%2F23%2F193723316.jpg&refer=http%3A%2F%2Fimage.9game.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611319376&t=1d7e639cd0bf5ddbf67b3865b52880c5',
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
                        gameIcon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3763674846,3606470673&fm=26&gp=0.jpg',
                        score:'评分',
                        developers:'开发者',
                        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.9game.cn%2Fs%2F9game%2Fg%2F2020%2F12%2F23%2F193723316.jpg&refer=http%3A%2F%2Fimage.9game.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611319376&t=1d7e639cd0bf5ddbf67b3865b52880c5',
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