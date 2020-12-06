<template>
    <div>
        <Header></Header>
        <div class="m-content">
            <p style="text-align: left;">游戏图片<i style="margin-left: 25%"/>总时长<i style="margin-left: 13%"/>两周内<i style="margin-left: 12%"/>成就</p>
            <el-row>
                <el-col :span="30" v-for="(model,key) in models" :key="key">
                    <el-card class="el-card" :body-style="{ padding: '0px'}" shadow="hover">
                        <img :src="model.urls" class="image">
                        <div class="text">
                            <div class="gamename">
                                <p>{{model.name}}</p>
                            </div>
                            <div class="gamedata">
                                <p>{{model.allLength}}</p>
                                <p>{{model.twoWeeks}}</p>
                                <p>{{model.achievements}}</p>
                            </div>
                        </div>
                        <el-progress style="width: 65%;float:left;margin-top: 20px" :percentage="model.ratio"></el-progress>
                    </el-card>
                </el-col>
            </el-row>


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
            Footer
        },
        name: "User",
        data() {
            return {
                models: [
                    {
                        name: '英雄联盟',
                        urls: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253308961&di=112bb4ba87e25e0ab00940efd3aaaff3&imgtype=0&src=http%3A%2F%2Fi1.3conline.com%2Fimages%2Fpiclib%2F201306%2F17%2Fbatch%2F1%2F179586%2F1371462425243b4sfs625yv_medium.jpg',
                        allLength: "90h",
                        twoWeeks: "22h",
                        achievements: "10",
                        ratio: "50"
                    },
                    {
                        name: '彩虹六号',
                        urls: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3073678498,370147010&fm=26&gp=0.jpg',
                        allLength: "130h",
                        twoWeeks: "20h",
                        achievements: "15",
                        ratio: "75"
                    },
                    {
                        name: '怪物猎人世界',
                        urls: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253349674&di=9823dd2caee4d7a09740b3fcb8e482ed&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-08-13%2F5b7112bae4b37.jpg',
                        allLength: "100h",
                        twoWeeks: "15h",
                        achievements: "5",
                        ratio: "25"
                    },
                    {
                        name: '约会大作战',
                        urls: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607253389736&di=20dd4d6873c5497c49eacb5243a99b58&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7af40ad162d9f2d3c7ef846da8ec8a136227ccb2.jpg',
                        allLength: "110h",
                        twoWeeks: "10h",
                        achievements: "10",
                        ratio: "50"
                    },
                ]
            };
        },
        methods: {
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%`;
            }
        }
    }
</script>

<style scoped>
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
        margin-left: 50px;
        width: 325px;
        height: 20px;
        display: flex;
        justify-content:space-between;
    }
    .m-content {
        max-width: 960px;
        text-align: center;
        margin: 25px 5%;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .el-card{
        margin-top: 5px;
    }

    .image {
        width: 35%;
        display: block;
        border-radius: 8px;
        float:left;
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