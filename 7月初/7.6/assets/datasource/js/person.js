/**人事综合分析左上柱状图start**/
var PCoption={
        color: ['#fb8a2e', '#a6e14a'],
        tooltip:{},
        legend:{
            data:['2016','2017'],
            right:'10%',
            textStyle: {
                color: '#fff',
                fontSize:12
            },
        },
        xAxis:{
            data:['博士','研究生','本科','专科','其他','重点院校毕业'],
            axisLine:{
                lineStyle:{
                    color:'#00a0e9',
                    width:2,
                    type:'solid',
                },
            },
            axisLabel : {
                show:true,
                textStyle:{
                    color: '#fff',
                    fontSize:14,
                },
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
        },
        yAxis:{
            type:'value',
            name:'人数',
            max:900,
            splitNumber:9,
            nameTextStyle:{
                color:'#fff',
                fontSize:12,
            },
            axisLine:{
                lineStyle:{
                    color:'#00a0e9',
                    width:2,
                    type:'solid',
                },
            },
            axisLabel : {
                show:true,
                textStyle:{
                    color: '#fff',
                    fontSize:14,
                },
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
        },
        series:[ {
                name:'2016',
                type:'bar',
                barWidth:15,
                barGap: '10%',
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        }
                    }
                },
                data:[150, 282, 774, 603, 93,350]
            },
            {
                name:'2017',
                type:'bar',
                barWidth:15,
                barGap: '10%',
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        }
                    }
                },
                data:[180, 302, 874, 603, 193,450]
            }
        ]
};
var PChart = echarts.init(document.getElementById('columnar'));
    PChart.setOption(PCoption);           
/**人事综合分析左上柱状图end**/
/**人事综合分析右上折线图start**/
PLoption = {
    xAxis: {
        name:'年份',
        nameTextStyle:{
            color:'#fff',
            fontSize:12,
        },
        nameLocation:'end',
        axisLine:{
            lineStyle:{
                color:'#4a5d8e',
                width:2,
                type:'solid',
            },
        },
        axisLabel : {
            show:true,
            textStyle:{
                color: '#fff',
                fontSize:14,
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show:true,
            lineStyle:{
                color:'#1e2947',
                width:1,
                type:'solid',
            },
        },
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
    },
    yAxis: {
        name:'人数（个）',
        nameTextStyle:{
            color:'#fff',
            fontSize:12,
        },
        axisLine:{
            lineStyle:{
                color:'#4a5d8e',
                width:2,
                type:'solid',
            },
        },
        axisLabel : {
            show:true,
            textStyle:{
                color: '#fff',
                fontSize:14,
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle:{
                color:'#1e2947',
                width:1,
                type:'solid',
            },
        },
    },
    series : [
        {
            type:'line',
            symbol:'emptyCircle',
            symbolSize :'6',
            itemStyle: {
                normal: {
                    lineStyle: {            // 系列级个性化折线样式，横向渐变描边
                        width: 3,
                        color:'#187bf5',
                        shadowColor : 'rgba(0,0,0,0.5)',
                        shadowBlur: 10,
                        shadowOffsetX: 8,
                        shadowOffsetY: 8
                    }
                }
            },
            data:[820, 982, 1091, 1234, 1290, 1530, 1710]
        }
    ]
};

var PLChart = echarts.init(document.getElementById('Pline'));
    PLChart.setOption(PLoption);    
/**人事综合分析右上折线图end**/
/*人事综合分析左下柱状图start*/
PBoption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend:{
        data:['2017年','2016年'],
        left:'20%',
        bottom:0,
        textStyle: {
            color: '#fff',
            fontSize:14
        },
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine:{
           show:false,
        },
        axisLabel : {
            show:false,
        },
        splitLine: {
            show: false,
        }
    },
    yAxis: {
        type: 'category',
        data: ['花家分校','十八里店分校','崇实分校','国贸分校','帝景小学','帝景分校','嘉铭东校','嘉铭西校寄宿','嘉铭西校初中','本部初中','本部高中'],
        axisTick: {
            show: false
        },
        axisLine:{
           show:false,
        },
        axisLabel : {
            show:true,
            textStyle:{
                color: '#fff',
                fontSize:14,
            },
        },
        splitLine: {
            show: false,
        }
    },
    series: [
        {
            name: '2017年',
            type: 'bar',
            barWidth:11,
            barGap:'15%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle:{
                        color:'#fff',
                        fontSize:12,
                    }
                }
            },
            data: [196, 141,165, 247, 194,205,172,219,203,213,239],
            itemStyle: {
                normal: {
                    color:'#48d3aa'
                }
            }
        },
        {
            name: '2016年',
            type: 'bar',
            /*barWidth:10,*/
            barGap:'15%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle:{
                        color:'#fff',
                        fontSize:12,
                    }
                }
            },
            data: [213, 123, 204, 198, 172,194,152,212,212,190,199],
            itemStyle: {
                normal: {
                    color:'#fb8a2e'
                }
            }
        }
    ]
}
var PBChart = echarts.init(document.getElementById('PBar'));
    PBChart.setOption(PBoption);

/*人事综合分析左下柱状图end*/
/*右中双向柱状图start*/
option = {
    tooltip : {
        formatter: function(params) {
            if (params.seriesIndex % 2 === 0) {
                return params.seriesName +':'+ params.value
            } else {
                return params.seriesName +':'+ -params.value
            }
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            axisLine:{
                show:false
            },
            axisLabel : {
                show:false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            axisLine:{
                lineStyle:{
                    color:'#00a0e9',
                    width:2,
                    type:'solid',
                },
            },
            axisLabel : {
                show:true,
                textStyle:{
                    color: '#fff',
                    fontSize:14,
                },
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            data : ['见习','三级','二级','一级','高级','正高级'],
        }
    ],
    series : [
        {
            name:'2017',
            type:'bar',
            stack: '总量',
            barWidth :18,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#4d9def', '#8de6ff','#48d3aa', '#a6e14a','#fb8a2e','#f32929'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label : {
                        show: true,
                        position: 'insideBottomRight',
                        textStyle:{
                            color:'#fdfdfd',
                            fontSize:'12',
                            fontWeight:'bold'
                        }
                    }
                }
            },
            
            data:[260, 335, 286, 312, 267, 296]
        },
        {
            name:'2016',
            type:'bar',
            stack: '总量',
            barWidth:18,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#4d9def', '#8de6ff','#48d3aa', '#a6e14a','#fb8a2e','#f32929'
                        ];
                        return colorList[params.dataIndex]
                    },                 
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(param) {
                        return Math.abs(param.value)
                    },
                    position: 'insideBottomLeft',
                    textStyle:{
                        color:'#fdfdfd',
                        fontSize:'12',
                        fontWeight:'bold'
                    }
                }
            },
            data:[-243, -303, -271, -279, -251, -265],
        }
    ]
};
var catChart = echarts.init(document.getElementById('DoubleBar'));
    catChart.setOption(option);
/*右中双向柱状图end*/
Peroption = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        icon: 'line',
        orient:'vertical',
        top:'center',
        right:'5',
        data: ['2017', '2016'],
        textStyle:{
            color:'#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        name:'年龄段',
        nameGap:5,
        nameTextStyle:{
            color:'#fff',
            fontSize:12,
        },
        nameLocation:'end',
        axisLine:{
            lineStyle:{
                color:'#4a5d8e',
                width:2,
                type:'solid',
            },
        },
        axisLabel : {
            show:true,
            textStyle:{
                color: '#fff',
                fontSize:14,
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show:true,
            lineStyle:{
                color:'#1e2947',
                width:1,
                type:'solid',
            },
        },
        data: ['20-25', '25-30', '30-35', '35-40', '40-45', '45-50', '50-55','55以上']
    },
    yAxis: {
        name:'人数',
        nameTextStyle:{
            color:'#fff',
            fontSize:12,
        },
        axisLine:{
            lineStyle:{
                color:'#4a5d8e',
                width:2,
                type:'solid',
            },
        },
        axisLabel : {
            show:true,
            textStyle:{
                color: '#fff',
                fontSize:14,
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle:{
                color:'#1e2947',
                width:1,
                type:'solid',
            },
        },
    },
    series: [
        {
            name:'2017',
            type:'line',
            symbol:'circle',
            symbolSize :'6',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#2784f4'
                }
            },
            lineStyle: {
                normal: {
                    color: '#2784f4'
                }
            },
            data:[320, 182, 491, 200, 230, 430, 210,150]
        },
        {
            name:'2016',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize :'6',
            itemStyle: {
                normal: {
                    color: '#f12929'
                }
            },
            lineStyle: {
                normal: {
                    color: '#f12929'
                }
            },
            data:[250, 165, 389, 170, 228, 450, 190,90]
        }
    ]
};
var PerChart = echarts.init(document.getElementById('PerLine'));
    PerChart.setOption(Peroption);   