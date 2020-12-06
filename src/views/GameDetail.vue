<template>
    <div>
        <Header></Header>
            <h2>{{modelDetail.name}}</h2>
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
        // mounted:function (){
        //     console.log(this.$route.params.model)
        // },
    }
</script>

<style scoped>

</style>