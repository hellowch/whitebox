<template>
    <div>
        <Header></Header>
        <div class="m-content">
            <div style="margin: 12px 0%;" class="block">
                <el-image :src="modelDetail.url"></el-image>

                <div class="introduce">
                    <el-avatar class="gameIcon" shape="square" :size="65" :src="modelDetail.gameIcon"></el-avatar>

                    <div class="introduceText">
                        <h2 style="margin-top: 6px;margin-bottom: -10px">{{modelDetail.name}}</h2>
                        <p style="color: #909399;margin-bottom: 5px">{{modelDetail.developers}}</p>

                        <el-tag
                                size="mini"
                                :key="tag"
                                v-for="tag in dynamicTags"
                                closable
                                :disable-transitions="false"
                                @close="handleClose(tag)">
                            {{tag}}
                        </el-tag>
                        <el-input
                                class="input-new-tag"
                                v-if="inputVisible"
                                v-model="inputValue"
                                ref="saveTagInput"
                                size="mini"
                                @keyup.enter.native="handleInputConfirm"
                                @blur="handleInputConfirm"
                        >
                        </el-input>
                        <el-button v-else class="button-new-tag" size="mini" @click="showInput">+</el-button>

                    </div>

                    <el-avatar class="introduceScore" :size="45">{{modelDetail.score}}</el-avatar>

                    <el-row class="introduceButton">
                        <el-button class="introduceFollow" @click="Follow" size="mini" round>+ 关注</el-button>
                        <el-button class="introduceDownload" @click="Download" size="mini" round> 购 买 </el-button>
                    </el-row>
                </div>

                <el-tabs stretch="stretch" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="详情" name="first">

                        <p style="text-align: left">{{modelDetail.introduction}}</p>
                        <div style="background-color: #f2f2f2;padding: 10px;border-radius: 10px;">
                            <h3 style="text-align: left">开发者的话</h3>
                            <p style="text-align: left;">{{modelDetail.developersText}}</p>
                        </div>

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
                //我的评价星星
                activeName: 'first',
                value1: null,
                colors:['#65C8D0','#65C8D0','#65C8D0'],

                //标签内容
                dynamicTags: ['多人', '联机'],
                inputVisible: false,
                inputValue: '',

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
            },
            //标签内容↓↓↓
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            //标签内容↑↑↑
            Follow(){
                this.$message({
                    showClose: true,
                    message: '关注成功！',
                    type: 'success',
                });
            },
            Download(){
                this.$confirm('是否确认购买?', '提示', {
                    customClass: 'message-logout',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success',
                    center: true
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '开始下载!',
                        showClose: true,
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消下载',
                        showClose: true,
                    });
                });
            }
        }
    }
</script>



<style>
    .message-logout {
        width: 60% !important;
    }
</style>

<style scoped>
    .m-content {
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
    }

    .introduce{
        background-color: #ffffff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
        position: relative;
        height: 230px;
        top: -30px;
    }
    .gameIcon{
        float: left;
        margin-top: 10px;
        margin-left: 20px;
        border-radius: 20px;
    }
    .introduceText{
        text-align: left;
        position: absolute;
        margin-left: 25%;

    }
    .introduceScore{
        background-color: #65C8D0;
        position: absolute;
        margin-left: 25%;
        margin-top: 3%;
    }
    .introduceButton{
        float: right;
        margin-top: 22%;
        margin-right: 5%;
    }
    .el-button--mini, .el-button--mini.is-round{
        padding: 5px 10px;
    }
    .introduceFollow{
        background: #FFFFFF;
        border: 1px solid #aafffd;
        color: #aafffd;

    }
    .introduceDownload{
        background: #65C8D0;
        border: 1px solid #65C8D0;
        color: #FFFFFF;

    }
    .el-button.is-round{
        border-radius: 13px;
    }


    /*标签内容↓↓↓*/
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
    .el-tag{
        background-color: #aafffd;
        color: #79d8dd;
        border-color: #aafffd;
    }
    .button-new-tag{
        background-color: #aafffd;
        border-color: #aafffd;
    }
</style>

