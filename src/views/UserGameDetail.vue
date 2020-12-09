<template>
    <div>
        <Header></Header>
        <v-touch v-on:swiperight="swiperright" class="v-touch">
        <div class="m-content">
            <div style="margin: 12px 0%;" class="block">
                <el-image :src="modelDetail.url"></el-image>
                <div class="text">
                    <div class="gamename">
                        <h2>{{modelDetail.name}}</h2>
                    </div>
                    <div class="gameRatio">
                        <a>成就完成进度</a>
                        <el-progress style="width: 65%;margin-top: 10px;margin-left: 20%" :percentage="modelDetail.ratio"></el-progress>
                    </div>

                    <div class="gamedata">
                        <div class="gamedataText">
                            <h2>{{modelDetail.allLength}}</h2>
                            <p>游戏总时长</p>
                        </div>
                        <div class="gamedataText">
                            <h2>{{modelDetail.twoWeeks}}</h2>
                            <p>两周内时长</p>
                        </div>

                    </div>
                </div>

            </div>

            <UGDEcharts></UGDEcharts>

        </div>
        </v-touch>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    import UGDEcharts from "../components/UGDEcharts";

    export default {
        components: {
            Header,
            Footer,
            UGDEcharts
        },
        name: "UserGameDetail",
        data() {
            return {
                modelDetail: [
                    {
                        id: '',
                        name: '',
                        url: '',
                        allLength: '',
                        twoWeeks: '',
                        achievements: '',
                        ratio: ''
                    },
                ]
            };
        },
        created(){
            const model = this.$route.params.model
            this.modelDetail.id = model.id
            this.modelDetail.name = model.name
            this.modelDetail.url = model.url
            this.modelDetail.allLength = model.allLength
            this.modelDetail.twoWeeks = model.twoWeeks
            this.modelDetail.achievements = model.achievements
            this.modelDetail.ratio = model.ratio
        },
        methods: {
            swiperright: function () { //左滑切换到detail页
                this.$router.push({'path':'/user'});
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
    }
    .text{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding-bottom: -50px;
        margin-top: -32px;
    }
    .gameRatio{
        display: flex;
        flex-direction: column;
    }
    .gamedata{
        display: flex;
        flex-direction: row;
        margin-left: 20%;
    }
    .gamedataText{
        margin-left: 8%;
        margin-top: 2%;
        margin-bottom: 2%;
        padding: 10px;
        background-color: #ff9c01;
        border-radius: 20px;
        color: #FFFFFF;
    }
</style>