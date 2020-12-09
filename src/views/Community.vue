<template>
    <div>
        <Header></Header>
        <v-touch v-on:swipeleft="swiperleft"  v-on:swiperight="swiperright" class="v-touch">

            <el-button style="position: fixed;z-index: 1;margin-top: 155%;margin-left: 35%" icon="el-icon-plus" @click="showInput" circle></el-button>

            <div class="m-content">

                <el-card style="" class="el-card" :body-style="{ padding: '0px'}" shadow="hover" >
                    <el-input v-if="inputVisible" v-model="inputValue.title" ref="saveTagInput" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm" placeholder="请输入标题"></el-input>
                    <el-input v-if="inputVisible" v-model="inputValue.text" ref="saveTagInput" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm" type="textarea" :rows="2" placeholder="请输入内容"></el-input>
                </el-card>


                <el-row style="margin-bottom: 20px">
                    <el-col :span="30" v-for="(model,key) in models" :key="key">
                        <div class="link-top"></div>
                        <el-card class="el-card" :body-style="{ padding: '0px'}" shadow="hover" >

                            <div class="text">
                                <div class="userData">
                                    <el-avatar style="float: left;margin-left: 10px;margin-top:5px" :size="35" :src="model.avatar"></el-avatar>
                                    <div style="display: flex;flex-direction: column;float: left">
                                        <a style="position: relative;margin-top: 6px;margin-left: 5px">{{model.username}}</a>
                                        <a style="color: #C0C4CC;">{{model.data}}</a>
                                    </div>
                                    <div style="float: right;margin-right: 10px">
                                        <i style="margin-top: 16px;color: #C0C4CC;" class="el-icon-s-comment">{{model.comments}}</i>
                                        <i style="margin-top: 16px;color: #C0C4CC;margin-left: 5px" class="el-icon-star-on">{{model.give}}</i>
                                    </div>

                                </div>

                                <div class="gamename">
                                    <p>{{model.title}}</p>
                                    <p style="color: #909399">{{model.text}}</p>
                                    <img :src="model.url" class="imageText">
                                </div>

                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>


        </v-touch>
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
        name: "Community",
        data() {
            return {
                activeName: 'first',
                currentDate: new Date(),

                inputVisible: false,
                inputValue:
                    {
                        id: '5',
                        avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                        username:'我是管理员',
                        url: 'https://picsum.photos/360/460?random=1',
                        title: '',
                        text:'',
                        data:'刚刚',
                        comments:'0',
                        give:'0'
                    },

                models: [
                    {
                        id: '1',
                        avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607364322238&di=d364a4003082ee77a103e74785265f6c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121171154_KZL4N.jpeg",
                        username:'奥特曼与小怪兽',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607432769356&di=dc8320775f84ad14be66b3c20101bf5d&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2013%2F03%2F15%2F927_swkj%2520%25285%2529.jpg',
                        title: "太刀萌新怒斥冰牙龙不讲武德",
                        text:'一个小前跳，一个飞天吐息，一个铁山靠。\n' +
                            '\n' +
                            '我全部见切出去，见切出去了啊！\n' +
                            '\n' +
                            '见切出去自然是按传统狩猎的方式点到为止，大回旋捏在手里放他头前面了啊，放在他头前面，没打他。\n',
                        data:'30分钟前',
                        comments:'112',
                        give:'50'
                    },
                    {
                        id: '2',
                        avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607364340282&di=b6193c8e03b547ca777b9097c4f1323c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F19%2F20150419H4644_tKx23.jpeg",
                        username:'神奇的路人A',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607432754345&di=6911e988bb0638104ccfd4f48ffb5a7a&imgtype=0&src=http%3A%2F%2Fpic.16pic.com%2F00%2F54%2F22%2F16pic_5422967_b.jpg',
                        title: "怎么连接gog",
                        text:'哪位hxd知道怎么连接gog跟steam吗？',
                        data:'45分钟前',
                        comments:'112',
                        give:'50'
                    },
                    {
                        id: '3',
                        avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607364360002&di=3d65547b9efd55020303c1ae70a86957&imgtype=0&src=http%3A%2F%2Fimg02.fs.yiban.cn%2F45481414%2Favatar%2Fuser%2F200",
                        username:'Archer',
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607432803822&di=b23867596f8eb34d2b310a5db76c09c0&imgtype=0&src=http%3A%2F%2F09imgmini.eastday.com%2Fmobile%2F20181023%2F20181023155544_24312a9b026cad41374641707b1cff57_1.jpeg',
                        title: "蠢驴的2077游戏协议真是太好玩了",
                        text:'当我前几天得知八号可以预载之后我今天啪就点了预载按钮，很快嗷！然后蠢驴上来就是一个中文本土化，一个装可爱，一个假正经，我全部防区...防出去了啊！',
                        data:'58分钟前',
                        comments:'112',
                        give:'50'
                    },
                    {
                        id: '4',
                        avatar:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1325988420,2634334416&fm=26&gp=0.jpg",
                        username:'羞羞子',
                        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1892726360,3154488886&fm=26&gp=0.jpg',
                        title: "有没有适合定制鼠标垫的图片",
                        text:'桌子贴了桌纸，而且这个桌纸很容易被破坏，每次我冲一杯热的东西后桌纸总会留下痕迹，由于我每次底下都垫一块布，所以痕迹不是很明显，有一次忘记垫了然后留下了特别明显的痕迹，而且桌纸在我日常玩游戏时被我不小心弄出两个小口。所以想买一个大鼠标垫把桌面覆盖住。',
                        data:'1小时前',
                        comments:'112',
                        give:'50'
                    },

                ]
            };
        },

        methods: {
            swiperleft: function () {  //右划切换到goods页
                this.$router.push({'path':'/games'});
            },
            swiperright: function () { //左滑切换到detail页
                this.$router.push({'path':'/home'});
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
                    this.models.unshift(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },

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
        text-align: center;
        margin: 25px 5%;
    }

    .imageText {
        width: 35%;
        display: block;
        border-radius: 6px;
        margin-bottom: 10px;
    }
    .text{
        display: flex;
        flex-direction: column;
    }
    .gamename{
        height: auto;
        margin-left: 25px;
        text-align: left;
    }
    .gamedata{
        margin-left: 20px;
        margin-top: 13px;
        width: 325px;
        height: 20px;
        display: flex;
        justify-content:space-between;
        color: #C0C4CC;
    }
    .el-card{
        margin-top: 5px;
    }
    /*中间的过度的横线*/
    .link-top {
        margin-top: 6px;
        border-top: solid #e3e3e3 5px;
    }
</style>