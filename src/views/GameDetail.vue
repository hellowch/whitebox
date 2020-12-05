<template>
    <div>
        <Header></Header>
            <h2>这里是游戏详情</h2>
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
        name: "GameDetail"
    }
</script>

<style scoped>

</style>