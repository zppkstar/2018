/*左上极坐标开始*/
var data = [
  
    [71,105,86.3],
    [78,118,98.5],
    [77,110,93.9411764705882],
    [64,100,81.9705882352941],
    [77,95,87.6176470588235],
    [62,91,76.7058823529412]
];
var cities = ['九科', '语文', '数学', '英语', '物理', '化学', '生物'];
var barHeight = 1;

option = {
    legend: {
        show: true,
        data: ['价格范围', '均值']
    },
    grid: {
        top: 100
    },
    angleAxis: {
        type: 'category',
        data: cities,
        axisLabel:{
            textStyle:{
                color:'#fff'
            }
        },
    },
    tooltip: {
        show: true,
        formatter: function (params) {
            var id = params.dataIndex;
            return cities[id] + '<br>最高：' + data[id][1] + '<br>最低：' + data[id][0] + '<br>平均：' + data[id][2];
        }
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: data.map(function (d) {
            return d[0];
        }),
        coordinateSystem: 'polar',
        stack: '最大最小值',
        silent: true
    }, {
        type: 'bar',
        data: data.map(function (d) {
            return d[1] - d[0];
        }),
        coordinateSystem: 'polar',
        name: '价格范围',
        stack: '最大最小值'
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#transparent'
            }
        },
        data: data.map(function (d) {
            return d[2] - barHeight;
        }),
        coordinateSystem: 'polar',
        stack: '均值',
        silent: true,
        z: 10
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#df0650'
            }
        },
        data: data.map(function (d) {
            return barHeight * 2
        }),
        coordinateSystem: 'polar',
        name: '均值',
        stack: '均值',
        barGap: '-100%',
        z: 10
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    },
    color:['#2ec7c9'],
};
var myChart = echarts.init(document.getElementById('polar'));
    myChart.setOption(option);  
/*左上极坐标结束*/
/*右上柱状图开始*/
Histogramoption = {
    color: ['#fb8a2e', '#a6e14a'],
    legend: {
        textStyle:{
            color: '#fff', 
            fontSize: 12,
        },
        orient:'vertical',
        top:'center',
        right:'-4',
        width:'100%',
        itemGap:15,
        itemWidth: 8,
        itemHeight:8,
        data:['优秀率','及格率']
    },
    calculable : true,
    xAxis :{
            type : 'category',
            data : ['九科','语文','数学','英语','物理','化学','生物'],
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
    yAxis :{
            type : 'value',
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
    series : [
        {
            name:'优秀率',
            type:'bar',
            barGap:0,
            barWidth:15,
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6],
        },
        {
            name:'及格率',
            type:'bar',
            barGap:0,
            barWidth:15,
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6],
        }
    ]
};
var myChart = echarts.init(document.getElementById('Histogram'));
    myChart.setOption(Histogramoption);
/*左上柱状图结束*/
/*左中雷达图开始*/
RadarMapoption = {
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
            name: '1班',
            max: 1
        }, {
            name: '2班',
            max: 1
        }, {
            name: '3班',
            max: 1
        }, {
            name: '4班',
            max: 1
        }, {
            name: '5班',
            max: 1
        }, {
            name: '6班',
            max: 1
        }, {
            name: '7班',
            max: 1
        }]
    },
    series: [{
        name: '',
        type: 'radar',
        data:[
            {
                value: [0.2,0.6,0.8,0.9,0.4,0.1,0.5],
                areaStyle: {
                    normal: {
                        color:'#0b1024',
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
                value : [1,1,1,1,1,1,1],
                areaStyle: {
                    normal: {
                        color:'#0b1024',
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
var myChart = echarts.init(document.getElementById('RadarMap'));
    myChart.setOption(RadarMapoption);
/*左中雷达图结束*/ 
/*右中柱状和折线图开始*/
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 20; i++) {
    var date = new Date(dottedBase += 1000 * 3600 * 24);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b)
    lineData.push(d + b);
}
LcHoption = {
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    legend: {
        data:['平均分','一本率'],
        textStyle:{
            color: '#fff', 
            fontSize: 12,
        },
        /*orient:'vertical',
        top:'center',
        right:'-10',
        width:'100%',
        itemGap:15,
        itemWidth: 30,
        itemHeight: 10,*/
    },
    xAxis : [
        {
            type : 'category',
            data : ['1班','2班','3班','4班','5班','6班','7班'],
            axisLine:{
                lineStyle:{
                    color:'#1d99d2',
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
        }
    ],
    yAxis : [
        {
            type : 'value',
            name : '人数',
            nameTextStyle:{
                color:'#fefdfd',
                fontSize:14,
            },
            axisLine:{
                lineStyle:{
                    color:'#1d99d2',
                    width:2,
                    type:'solid',
                },
            },
            max:200,
            axisLabel : {
                show:true,
                formatter: '{value}',
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
        {
            type : 'value',
            name : '人数',
            nameTextStyle:{
                color:'#fefdfd',
                fontSize:14,
            },
            axisLine:{
                lineStyle:{
                    color:'#1d99d2',
                    width:2,
                    type:'solid',
                },
            },
            axisLabel : {
                show:true,
                formatter: '{value}',
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
        }
    ],
    series : [

        {
            name:'平均分',
            type:'bar',
            barWidth: 15,
            itemStyle:{
                normal:{
                    color:'#2ec7c9'
                }
            },
            data:[7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6]
        },
        {
            name:'一本率',
            type:'line',
            yAxisIndex: 1,
            smooth: true,
            symbol:'image://../assets/datasource/images/circle.png',
            hoverAnimation: false,
            showAllSymbol: true,
            legendHoverLink:false,
            symbolSize:['28','28'],
            label:{
                color:'#ffff00',
                normal:{
                    position:'inside',
                    textStyle:{
                            color: '#fff',
                            fontSize:18,
                            padding:0,
                        },
                }
            },
            itemStyle: {
                normal: {
                    color: '#e9165b',
                    /*borderColor:'#e9165b',
                    borderWidth:2,*/
                    label : {
                        show: true, 
                        position: 'inside',
                        textStyle:{
                            color: '#4f1235',
                            fontSize:20,
                        },
                    }         
                }
            },
            /*lineStyle:{
                normal: {
                    color: '#000',        
                }
            }*/
            data:[3, 4, 5, 3, 5, 4, 5]
        }
    ]
};
var myChart = echarts.init(document.getElementById('LcH'));
    myChart.setOption(LcHoption);
/*右中柱状和折线图结束*/