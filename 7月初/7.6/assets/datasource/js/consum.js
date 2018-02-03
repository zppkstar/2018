/**消耗品左上折线图start*/
function Cpoption(){
Cpoption = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        name: '月份',
        nameGap:5,
        nameTextStyle: {
            color: "#fff",
            fontWeight:'bolder',
            fontSize:12,
        },
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月'],
        axisTick: {
            show: false
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
                fontSize:12,
            },
        },
        splitLine: {
            show: true,
            lineStyle:{
                color:'#092a47',
                width:1,
                type:'solid',
            },
        }
    },
    yAxis: {
        type: 'value',
        name: '金额（万元）',
        nameTextStyle: {
            color: "#fff",
            fontWeight:'bolder',
            fontSize:12,
        },
        axisTick: {
            show: false
        },
        axisLine:{
           lineStyle:{
                color:'#00a0e9',
                width:2,
                type:'solid',
            },
        },
        axisLabel : {
            show:false,
        },
        splitLine: {
            show: false,
        }
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            symbol:'circle',
            symbolSize:1,
            itemStyle: {
                normal: {
                    color: '#f04a4e',
                    barBorderRadius: 0,
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle:{
                        color:'#fff'
                    }
                }
            },
            data:[28.14, 35.62, 45.23, 45.56, 55.47, 10],
        }
    ]
};
var CpChart = echarts.init(document.getElementById('Cpline'));
    CpChart.setOption(Cpoption);
}
/**消耗品左上折线图end*/

/*消耗品左下柱状图start*/
function ColumnPar(){
Coption = {
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
    //legend:{data:['2016年4月','2017年4月']},
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
            name: '2016年4月',
            type: 'bar',
            /*barWidth:10,*/
            barGap:'15%',
            data: [450, 400, 389, 420, 350, 395,320,460,300,286,392],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#3b3eb3','#2e7cfe','#8efe33','#feaf33','#fcf64e','#f04a4e','#fb8a2e',
                           '#a6e14a','#48d3aa','#8de6ff','#4d9def'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        },
        {
            name: '2017年4月',
            type: 'bar',
            /*barWidth:10,*/
            barGap:'15%',
            data: [350, 356, 430, 420, 345, 365,300,380,390,268,423],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#23276c','#1d4691','#4d872c','#85602c','#848339','#7e2d39',
                           '#834d29','#597937','#2a7267','#4c7b92','#2c578a'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};
var ColumnPar = echarts.init(document.getElementById('Column'));
    ColumnPar.setOption(Coption);
}

/*消耗品左下柱状图end*/
/*消耗品右上柱状图start*/
function DlinePar(){
var option=null,xAxisData=[],numData=[];
numData1 = [12.5, 8.5, 14, 13, 6.5,5,9.5,7.5];
numData2 = [13, 13.5, 15, 14, 11,6.2,10.5,9];

Doption = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        right:0,
        data:['2016','2017'],
        textStyle:{
            color:'#fff'
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['教学处','教务处','物业处','教研组','发展处','备课组','人事部','秘书处'],
            axisTick: {
                show: false
            },
            axisLine:{
               lineStyle:{
                    color:'#4a5d8e',
                    width:1,
                    type:'solid',
                },
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color: '#fff',
                    fontSize:12,
                },
            },
            splitLine: {
                show:false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name: '金额（万元）',
            nameTextStyle: {
                color: '#fff',
                fontWeight:'bolder',
                fontSize:12,
            },
            axisTick: {
                show: false
            },
            axisLine:{
               lineStyle:{
                    color:'#4a5d8e',
                    width:1,
                    type:'solid',
                },
            },
            axisLabel:{
                show:true,
                textStyle:{
                    color: '#fff',
                    fontSize:12,
                },
            },
            splitLine: {
                show: true,
                lineStyle:{
                    color:'#1e2a4a',
                    width:1,
                    type:'solid',
                },
            }
        }
    ],
    series : [
        {
            name:'2016',
            type:'bar',
            barWidth:20,
            barGap:'10%',
            /*itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#3b88d7'},
                            {offset: 0.5, color: '#60a3e6'},
                            {offset: 1, color: '#85bcf4'}
                        ]
                    )
                }
            },
            data:[12.5, 8.5, 14, 13, 6.5,5,9.5,7.5],*/
            data:numData1,
            itemStyle:{
                normal:{
                    opacity:0,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#3b88d7'},
                            {offset: 0.5, color: '#60a3e6'},
                            {offset: 1, color: '#85bcf4'}
                        ]
                    )
                }
            },
        },
        {
            name:'2017',
            type:'bar',
            barWidth:20,
            barGap:'10%',
            /*itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#ff6f00'},
                            {offset: 0.5, color: '#ffff00'},
                            {offset: 1, color: '#ff7102'}
                        ]
                    )
                }
            },
            data:[13, 13.5, 15, 14, 11,6.2,10.5,9],*/
            data:numData2,
            itemStyle:{
                normal:{
                    opacity:0,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#ff6f00'},
                            {offset: 0.5, color: '#ffff00'},
                            {offset: 1, color: '#ff7102'}
                        ]
                    )
                }
            },
    }
    ]
};
var myChart = echarts.init(document.getElementById('Dline'));
    myChart.setOption(Doption);

var model=myChart.getModel(),
        layer=model.getSeriesByIndex(0),
        layer_g=model.getSeriesByIndex(1),
        layouts=layer._data._itemLayouts;// 获取每根柱图的位置和高度和宽度
        layouts_g=layer_g._data._itemLayouts;
    var div=document.getElementById('Dline').getElementsByTagName('div')[0]; // 获得div
    var div_g=document.getElementById('Dline').getElementsByTagName('div')[1]; // 获得div_g
    var elem="",
        height=document.getElementById('Dline').offsetHeight,
        bottom=height-layouts[0]['y'];
    var elem_g="",
        height_g=document.getElementById('Dline').offsetHeight,
        bottom_g=height-layouts[1]['y'];
    for(var i= 0,len=layouts.length;i<len;i++){
        var widthX = layouts[i]['x']+22;
        console.log(widthX);
        elem+='<div class="bar-p" style="bottom:'+bottom+'px;left:'+layouts[i]['x']+'px;height:'+Math.round(Math.abs(layouts[i]['height'])/1)+'px;">'+
        '</div>';
    };
    for(var i= 0,len=layouts_g.length;i<len;i++){
        var widthX = layouts_g[i]['x'];
        elem_g+='<div class="bar-g" style="bottom:'+bottom_g+'px;left:'+layouts_g[i]['x']+'px;height:'+Math.round(Math.abs(layouts_g[i]['height'])/1)+'px;">'+
        '</div>';
    };
    var bluediv = document.createElement('div');
    bluediv.id = "bluediv";
    var yellowdiv = document.createElement('div');
    yellowdiv.id = "yellowdiv";
    div.appendChild(bluediv);
    document.getElementById('bluediv').innerHTML=elem;
    div.appendChild(yellowdiv);
    document.getElementById('yellowdiv').innerHTML=elem_g;
};
/*消耗品右上柱状图end*/
/**右中雷达图*/
function RadarPar(){
Roption = {
    tooltip: {},
    radar: {
        name:{
            textStyle:{
                color:'#fff',
                fontSize:12
            }
        },
        splitArea: {
            areaStyle: {
                color: '#0b1024'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#395e6f'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#395e6f'
            }
        },
        nameGap:3,
        indicator: [{
            name: '办公用品',
            max: 20
        }, {
            name: '卫生用品',
            max: 20
        }, {
            name: '医疗用品',
            max: 20
        }, {
            name: '防护用品',
            max: 20
        }, {
            name: '体育专用素材',
            max: 20
        }]
    },
    series: [{
        name: '',
        type: 'radar',
        data:[
            {
                value: [11, 1, 9, 10,20],
                areaStyle: {
                    normal: {
                        color:'#bfe77e',
                    }
                },
                lineStyle: {
                    normal: {
                        color:'#bfe77e',
                    }
                },
                itemStyle:{
                    normal: {
                        color:'#bfe77e',
                    }
                }
            },
             {
                value : [18, 5, 9, 13,15],
                areaStyle: {
                    normal: {
                        color:'#7eebf9',
                    }
                },
                lineStyle: {
                    normal: {
                        color:'#7eebf9',
                    }
                },
                itemStyle:{
                    normal: {
                        color:'#7eebf9',
                    }
                }
            }
        ]
    }]
};
var RadarPar = echarts.init(document.getElementById('Radar'));
    RadarPar.setOption(Roption);
}
/**右中雷达图*/
/*右下双向柱状图*/
function DoubleColumnPar(){
var temMax = 0;
temInterval = 100;
var distributeRadarData = [{
    "types": ["2017年", "2016年"]
}, {
    "time": "硒鼓",
    "values": [4.8, 4.2]
}, {
    "time": "打印纸",
    "values": [4.5, 3]
},  {
    "time": "记事本",
    "values": [4.6,3.9]
}, {
    "time": "粉笔",
    "values": [3.8, 2.8]
}, {
    "time": "教案本",
    "values": [4.1, 3.2]
}];

function setMax() {
    for (var x = 1; x < 6; x++) {
        for (var y = 0; y < 2; y++) {
            if (Math.abs(distributeRadarData[x].values[y]) > temMax) {
                temMax = Math.abs(distributeRadarData[x].values[y]);
            }
        }
    }
}

function switchMax(value) {
    if (value <= 20) {
        temInterval = 6;
    } else if (value <= 50) {
        temInterval = 12;
    } else {
        temInterval = 18;
    }
    temMax = Math.ceil(value / temInterval) * temInterval;
    console.log(temMax);
}
setMax();
switchMax(temMax);
DCoption = {
    title: [{
        text: distributeRadarData[0].types[0],
        right: "30%",
        bottom: 5,
        textStyle: {
            color: "#ffffff",
            fontSize: 16,
            fontWeight: 'normal'
        }
    }, {
        text: distributeRadarData[0].types[1],
        left: "30%",
        bottom: 5,
        textStyle: {
            color: "#ffffff",
            fontSize: 16,
            fontWeight: 'normal'
        }
    }],
    /*tooltip: {
        formatter: function(param) {
            if (param > 0) {
                return param
            } else {
                return -param
            }
        }
    },*/
    xAxis: [{
        name:'万',
        type: 'value',
        silent: true,
        axisLine: {
            show: false,
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false,
        },
        axisTick:{
            show:false
        },
        min: -temMax,
        max: temMax,
        interval: temInterval,
        axisLabel: {
            show:false
        }
    }],
    yAxis: [{
        show:true,
        axisTick: {
            show: false
        },
        axisLabel:{
            show:false
        },
        axisLine:{
            show:true,
            lineStyle:{
                color:'#40517c',
                type:'solid',
                width:2
            }
        },
        data: []
    }],
    series: [{
        name: distributeRadarData[1].time,
        type: 'bar',
        barWidth:16,
        barGap:'60%',
        stack: distributeRadarData[1].time,
        label: {
            normal: {
                formatter: function(param) {
                    return param.value +'万'
                },
                show: true,
                position: 'insideBottomRight',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }
        },
        itemStyle:{
            normal:{
                color:'#4d9def',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[0,20,1,0],
            }
        },
        data: [distributeRadarData[1].values[0]]
    }, {
        name: distributeRadarData[1].time,
        type: 'bar',
        barWidth:16,
        barGap:'60%',
        stack: distributeRadarData[1].time,
        label: {
            normal: {
                formatter: function(param) {
                    return -param.value +'万'
                },
                show: true,
                position: 'insideBottomLeft',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }
        },
        itemStyle:{
            normal:{
                color:'#254b77',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[20,0,0,1],
            }
        },
        data: [-distributeRadarData[1].values[1]]
    }, {
        name: distributeRadarData[2].time,
        type: 'bar',
        barWidth:16,
        barGap:'60%',
        stack: distributeRadarData[2].time,
        label: {
            normal: {
                formatter: function(param) {
                    return param.value +'万'
                },
                show: true,
                position: 'insideBottomRight',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }
        },
        itemStyle:{
            normal:{
                color:'#8de6ff',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[0,20,1,0],
            }
        },
        data: [distributeRadarData[2].values[0]]
    }, {
        name: distributeRadarData[2].time,
        type: 'bar',
        barWidth:16,
        barGap:'60%',
        stack: distributeRadarData[2].time,
        label: {
            normal: {
                formatter: function(param) {
                    return -param.value +'万'
                },
                show: true,
                position: 'insideBottomLeft',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }
        },
        itemStyle:{
            normal:{
                color:'#4c7b92',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[20,0,0,1],
            }
        },
        data: [-distributeRadarData[2].values[1]]
    }, {
        name: distributeRadarData[3].time,
        type: 'bar',
        barWidth:16,
        barGap:'60%',
        stack: distributeRadarData[3].time,
        label: {
            normal: {
                formatter: function(param) {
                    return param.value +'万'
                },
                show: true,
                position: 'insideBottomRight',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }
        },
        itemStyle:{
            normal:{
                color:'#48d3aa',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[0,20,1,0],
            }
        },
        data: [distributeRadarData[3].values[0]]
    }, {
        name: distributeRadarData[3].time,
        type: 'bar',
        barWidth:16,
        barGap:'60%',
        stack: distributeRadarData[3].time,
        label: {
            normal: {
                formatter: function(param) {
                    return -param.value +'万'
                },
                show: true,
                position: 'insideBottomLeft',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }
        },
        itemStyle:{
            normal:{
                color:'#2a7267',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[20,0,0,1],
            }
        },
        data: [-distributeRadarData[3].values[1]]
    }, {
        name: distributeRadarData[4].time,
        type: 'bar',
        barWidth:16,
        barGap:'60%',
        stack: distributeRadarData[4].time,
        label: {
            normal: {
                formatter: function(param) {
                    return param.value +'万'
                },
                show: true,
                position: 'insideBottomRight',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }
        },
        itemStyle:{
            normal:{
                color:'#a6e14a',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[0,20,1,0],
            }
        },
        data: [distributeRadarData[4].values[0]]
    }, {
        name: distributeRadarData[4].time,
        type: 'bar',
        barWidth:16,
        barGap:'60%',
        stack: distributeRadarData[4].time,
        label: {
            normal: {
                formatter: function(param) {
                    return -param.value +'万'
                },
                show: true,
                position: 'insideBottomLeft',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }
        },
        itemStyle:{
            normal:{
                color:'#597937',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[20,0,0,1],
            }
        },
        data: [-distributeRadarData[4].values[1]]
    }, {
        name: distributeRadarData[5].time,
        type: 'bar',
        barWidth:16,
        barGap:'60%',
        stack: distributeRadarData[5].time,
        label: {
            /*normal: {
                show: true,
                position: 'insideBottomRight',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            } */ 
            normal: {
                formatter: function(param) {
                    return param.value +'万'
                },
                show: true,
                position: 'insideBottomRight',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }        
        },
        itemStyle:{
            normal:{
                color:'#fb8a2e',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[0,20,1,0],
            }
        },
        data: [distributeRadarData[5].values[0]]
    }, {
        name: distributeRadarData[5].time ,
        type: 'bar',
        stack: distributeRadarData[5].time,
        barWidth:16,
        barGap:'60%',
        label: {
            normal: {
                formatter: function(param) {
                    return -param.value +'万'
                },
                show: true,
                position: 'insideBottomLeft',
                textStyle:{
                   color:'#041936',
                   fontSize:12
                },
            }
        },
        itemStyle:{
            normal:{
                color:'#834d29',
                borderColor:'#0b1024',
                borderWidth:2,
                barBorderRadius:[20,0,0,1],
            }
        },
        data: [-distributeRadarData[5].values[1]]
    }]
};
var DoubleColumnPar = echarts.init(document.getElementById('DoubleColumn'));
    DoubleColumnPar.setOption(DCoption);
}
/*右下双向柱状图*/

/**消耗品左上折线图*/
CplinePar();
function CplinePar(){
    //$("#CplinePar").addClass("wow fadeInRight animated animated");   
    setTimeout("Cpoption()",2500);
};
/**消耗品左下柱状图*/
Column();
function Column(){
    //$("#ColumnPar").addClass("wow fadeInRight animated animated");   
    setTimeout("ColumnPar()",3500);
};
/**消耗品右上柱状图*/
Dline();
function Dline(){
    //$("#DlinePar").addClass("wow fadeInRight animated animated");   
    setTimeout("DlinePar()",4500);
};
/**右中雷达图*/
Radar();
function Radar(){
    //$("#RadarPar").addClass("wow fadeInRight animated animated");   
    setTimeout("RadarPar()",5500);
};
/**右下双向柱状图*/
DoubleColumn();
function DoubleColumn(){
    //$("#DoubleColumnPar").addClass("wow fadeInRight animated animated");   
    setTimeout("DoubleColumnPar()",6500);
};