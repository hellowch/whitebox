<template>
    <div>
        <Header></Header>
        <h2>这里是用户界面</h2>
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
        name: "User"
    }
</script>

<style scoped>

</style>