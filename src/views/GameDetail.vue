<template>
    <div>
        <Header></Header>
        <div class="m-content">
            <div style="margin: 12px 0%;" class="block">
                <el-image :src="modelDetail.url"></el-image>
                <div class="text">
                    <div style="background-color: #ffffff;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);">
                        <p>{{modelDetail.name}}</p>
                        <el-avatar shape="square" :size="50" :src="modelDetail.gameIcon"></el-avatar>
                        <el-avatar :size="45" style="background-color: #65C8D0">{{modelDetail.score}}</el-avatar>
                        <p>{{modelDetail.developers}}</p>
                    </div>
                </div>
                <el-tabs stretch="stretch" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="详情" name="first">
                        <p>{{modelDetail.introduction}}</p>
                        <p>{{modelDetail.developersText}}</p>
                    </el-tab-pane>
                    <el-tab-pane label="评价" name="second">

                        <el-avatar :size="45" style="background-color: #65C8D0">{{modelDetail.score}}</el-avatar>
                        <p>我的评价</p>
                        <div class="block">
                            <el-rate v-model="value1" :colors="colors"></el-rate>
                        </div>

                    </el-tab-pane>
                </el-tabs>
            </div>
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
        name: "GameDetail",
        data() {
            return {
                activeName: 'first',
                value1: null,
                colors:['#65C8D0','#65C8D0','#65C8D0'],
                modelDetail: [
                    {
                        id: '',
                        name: '',
                        gameIcon: '',
                        score:'',
                        developers:'',
                        url: '',
                        introduction:'',
                        developersText: "",
                        price:''
                    },
                ]
            };
        },
        created(){
            const model = this.$route.params.model
            this.modelDetail.id = model.id
            this.modelDetail.name = model.name
            this.modelDetail.gameIcon = model.gameIcon
            this.modelDetail.score = model.score
            this.modelDetail.developers = model.developers
            this.modelDetail.url = model.url
            this.modelDetail.introduction = model.introduction
            this.modelDetail.developersText = model.developersText
            this.modelDetail.price = model.price
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

</style>