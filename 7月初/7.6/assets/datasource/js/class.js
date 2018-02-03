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

Goption = {
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
var myChart = echarts.init(document.getElementById('Gpolar'));
    myChart.setOption(Goption);  
/*左上极坐标结束*/
/*左中雷达图开始*/
GRadarMapoption = {
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
var myChart = echarts.init(document.getElementById('GRadarMap'));
    myChart.setOption(GRadarMapoption);
/*左中雷达图结束*/ 
/*右上折线图开始*/
GLineoption =  {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['班级一本率', '班级贡献率'],
        textStyle:{
            color: '#fff',
            fontSize: 12,
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        nameTextStyle: {
            color: "#fff",
            fontWeight:'bolder',
            fontSize:12,
        },
        boundaryGap: false,
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
        },
        data: ['九科', '语文', '数学', '英语', '物理', '化学', '生物']
    },
    yAxis: {
        type: 'value',
        nameTextStyle: {
            color: "#fff",
            fontWeight:'bolder',
            fontSize:12,
        },
        boundaryGap: false,
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
        },
    },
    series: [
        {
            name:'班级一本率',
            type:'line',
            symbol:'squre',
            symbolSize:8,
            itemStyle: {
                normal: {
                    color: '#f32929',
                    barBorderRadius: 0,
                }
            },
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'班级贡献率',
            type:'line',
            symbol:'diamond',
            symbolSize:8,
            itemStyle: {
                normal: {
                    color: '#1d7ef5',
                    barBorderRadius: 0,
                }
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
var myChart = echarts.init(document.getElementById('GLine'));
    myChart.setOption(GLineoption);
/*右上折线图结束*/
/*右中柱状图开始*/
GColumnoption = {
    color: ['#fb8a2e'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['霍柳丹', '郑宇鹏', '黄晓奕', '张天瑞', '袁国智', '李楚安', '张蓓儿', '王家瑞', '艾迪', '孙博文'],
            nameTextStyle: {
            color: "#fff",
            fontWeight:'bolder',
            fontSize:12,
            },
            boundaryGap: true,
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
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            nameTextStyle: {
            color: "#fff",
            fontWeight:'bolder',
            fontSize:12,
            },
            boundaryGap: false,
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
            },
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '15',
            data:[589, 587.5, 585.5, 582.5, 576, 572, 567.5, 565.5, 561, 560.5]
        }
    ]
};
var myChart = echarts.init(document.getElementById('GColumn'));
    myChart.setOption(GColumnoption);
/*右中柱状图结束*/