<template>
    <div>
        <Header></Header>
        <div class="m-content">
            <div style="margin: -35px 0%;" class="block">
                <el-image :src="modelDetail.url"></el-image>
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
            this.modelDetail.url = model.urls
            this.modelDetail.allLength = model.allLength
            this.modelDetail.twoWeeks = model.twoWeeks
            this.modelDetail.achievements = model.achievements
            this.modelDetail.ratio = model.ratio
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