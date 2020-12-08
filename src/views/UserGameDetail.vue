<template>
    <div>
        <Header></Header>
        <v-touch v-on:swiperight="swiperright"  class="wrapper">
        <div class="m-content">
            <div style="margin: 12px 0%;" class="block">
                <el-image :src="modelDetail.url"></el-image>
                <div class="text">
                    <div class="gamename">
                        <p>{{modelDetail.name}}</p>
                    </div>
                    <div class="gamedata">
                        <p>{{modelDetail.allLength}}</p>
                        <p>{{modelDetail.twoWeeks}}</p>
                        <p>{{modelDetail.achievements}}</p>
                    </div>
                </div>
                <el-progress style="width: 65%;float:left;margin-top: 20px" :percentage="modelDetail.ratio"></el-progress>
            </div>


        </div>
        </v-touch>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";


    export default {
        components: {
            Header,
            Footer
        },
        name: "UserGameDetail",
        data() {
            return {
                charts: '',
                /*  opinion: ["1", "3", "3", "4", "5"],*/
                opinionData: ["3", "2", "4", "4", "5"],

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

<style scoped>
    .m-content {
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
    }
</style>