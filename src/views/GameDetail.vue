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

                        <div style="height: 100px">
                            <el-avatar class="tabScore" :size="45">{{modelDetail.score}}</el-avatar>
                            <div style="float: right;height: 80%;width: 70%;">
                                <div v-for="values in 5" :key="values">
                                    <i style="position:relative;" :style="{left:(values-1)*6 +'px'}" v-for="value in 6-values" :key="value" class="el-icon-star-on"></i>
                                    <el-progress class="tabProgress" :percentage="45/values" :show-text="false"></el-progress>
                                </div>
                            </div>

                        </div>

                        <div class="link-top"></div>

                        <h3 style="text-align: left">我的评价</h3>
                        <div style="background-color: #f2f2f2;padding: 13px;border-radius: 10px;">
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            <el-rate v-model="value1" :colors="colors"></el-rate>
                        </div>

                        <h3 style="text-align: left">玩家评价</h3>
                        <div v-for="(evaluate,key) in evaluates" :key="key" style="background-color: #f2f2f2;padding: 13px;border-radius: 10px;margin-top: 5px">
                            <el-avatar :size="30" :src="evaluate.avatar"></el-avatar>
                            <el-rate v-model="evaluate.value" disabled :colors="colors"></el-rate>
                            <p>{{evaluate.text}}</p>
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
                ],
                evaluates: [
                    {
                        avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607364322238&di=d364a4003082ee77a103e74785265f6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121171154_KZL4N.jpeg",
                        value:3.7,
                        text: "同学推荐的，玩了一晚上感觉挺好玩。特别上头。"
                    },
                    {
                        avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607364340282&di=b6193c8e03b547ca777b9097c4f1323c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F19%2F20150419H4644_tKx23.jpeg",
                        value:4.5,
                        text: "兄弟们！组起来！买不了吃亏买不了上当!"
                    },
                    {
                        avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607364360002&di=3d65547b9efd55020303c1ae70a86957&imgtype=0&src=http%3A%2F%2Fimg02.fs.yiban.cn%2F45481414%2Favatar%2Fuser%2F200",
                        value:4.1,
                        text: "我下单了！你们呢！"
                    },
                    {
                        avatar:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1325988420,2634334416&fm=26&gp=0.jpg",
                        value:5.0,
                        text: "不错，之前玩过类似的游戏，不过这个游戏给我一种能玩下去的感觉，每天上线割菜，不强迫氪金"
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
    .el-tabs__item.is-active{
        color: #65c8d0 !important;
    }
    .el-tabs__active-bar{
        background-color: #65c8d0 !important;
    }
    .el-progress-bar__inner{
        background-color: #65c8d0 !important;
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


    .tabScore{
        background-color: #65C8D0;
        float: left;
        margin-left: 15%;
        margin-top: 5%;
    }
    /*中间的过度的横线*/
    .link-top {
        border-top: solid #f2f2f2 5px;
    }

    .tabProgress{
        width: 60%;
        float: right;
        margin-top: 2%;
        margin-right: 10%;
    }

</style>

