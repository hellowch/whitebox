<template>
    <div id="m-content">
        <!-- 定义一个id为main的元素 -->
        <el-divider></el-divider>
        <h2>您的战绩 vs 玩家平均战绩</h2>
        <div id="radarMain"></div>
        <el-divider></el-divider>
        <h2 >近期在线时长</h2>
        <div id="barMain"></div>
        <el-divider></el-divider>
    </div>


</template>

<script>
    // 引入 ECharts 主模块
    var echarts = require("echarts/lib/echarts");
    // 引入柱状图
    require("echarts/lib/chart/bar");
    // 引入折线图
    require('echarts/lib/chart/line');
    //引入雷达
    require('echarts/lib/chart/radar')
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')

    export default {
        name: "UGDEcharts",
        mounted() {
            this.test();
        },
        methods: {
            test() {

                var raderDom = document.getElementById("radarMain");
                var raderChart = echarts.init(raderDom);
                raderChart.setOption({

                    tooltip: {},
                    legend: {
                        data: ['您的战绩', '玩家平均战绩']
                    },
                    color:['#FFD85F','#38A2DA'],
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        indicator: [
                            { name: '输出', max: 6500},
                            { name: '经济', max: 16000},
                            { name: '存活', max: 30000},
                            { name: '杀敌', max: 38000},
                            { name: '助攻', max: 52000},
                            { name: '合作', max: 25000}
                        ]
                    },
                    series: [{
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data: [
                            {
                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                name: '您的战绩'
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                name: '玩家平均战绩'
                            }
                        ]
                    }]
                });


                // 获取元素
                var barDom = document.getElementById("barMain");
                // 基于准备好的dom，初始化echarts实例
                var barChart = echarts.init(barDom);

                // 绘制图表
                barChart.setOption({
                    tooltip: {},
                    color:['#65c8d0'],
                    xAxis: {
                        data: ["周一", "周二", "周三", "周四", "周五", "周六","周日"]
                    },
                    yAxis: {type: 'value'},
                    series: [
                        {
                            data: [2, 3, 2, 5, 4, 6, 5],
                            name: "时长(小时)",
                            type: "bar",
                        }
                    ]
                });

            }
        }
    };
</script>

<style scoped>
    #m-content {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding-bottom:30px;
        /*padding-top: 50px;*/
    }
    #radarMain{
        margin-top: 20px;
        height: 500px;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    #barMain {
        height: 500px;
        width: 100%;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

</style>