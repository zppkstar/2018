/*工资分析左上饼图start*/
Roption = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}",

    },
    series: [
        {
            name:'教师工资额度分布（年薪）',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['40%', '42%'],
            color: ['#dbdb00', '#d48221', '#0cc34c', '#0fcba5'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
               
            },
            tooltip: {
               show:false,
               
               
            },
            
            data:[
                {value:47, name:''},
                {value:38, name:''},
                {value:11, name:''},
                {value:4, name:''}
            ]
        },
        {
            name:'教师工资额度分布（年薪）',
            type:'pie',
            radius: ['42%', '60%'],
            color: ['#ffff00', '#f79727', '#0ee259', '#11ecc0'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        fontSize: 12,
                        color: '#ffffff'
                    }
                },
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#fff',

                    }
                }
            },
            data:[
                {value:47, name:'10万以下'},
                {value:38, name:'10-15万'},
                {value:11, name:'15-20万'},
                {value:4, name:'20万以上'},
         
            ]
        }
    ]
};
 var RChart = echarts.init(document.getElementById('ring'));
     RChart.setOption(Roption);
 $("#ring").css("background", "url('../../assets/datasource/images/ring-bg.png') no-repeat center center");
/*工资分析左上饼图end*/

/*工资分析左下饼图start*/
var dataStyle = { 
    normal: {
        label: {
            show:true,
            normal: {
                formatter: '{a} <br/>{b} : {c} ({d}%)',
                textStyle: {
                    fontSize: 12,
                    color: '#ffffff'
                }
            },
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#fff',

                }
            }
        },
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
Poption = {
    color: ['#0081fe', '#35c77a','#ff6356', '#92d101','#f78a26'],
    series : [
        {
            name:'10万以上',
            type:'pie',
            clockWise:false,
            radius : [150,170],
            itemStyle : dataStyle,
            hoverAnimation: false,
            data:[
                {
                    value:300,
                    name:'10万以上',
                    label: {
                        normal: {
                            formatter: '{b}{d}%',
                            textStyle: {
                                fontSize: 12,
                                color: '#ffffff'
                            }
                        },
                    },
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
         
            ]
        }, 
         {
            name:'8-10万',
            type:'pie',
            clockWise:false,
            radius : [120, 140],
            itemStyle : dataStyle,
            hoverAnimation: false,
           
            data:[
                {
                    value:150, 
                    name:'8-10万',
                    label: {
                        normal: {
                            formatter: '{b}{d}%',
                            textStyle: {
                                fontSize: 12,
                                color: '#ffffff'
                            }
                        },
                    },
                },
                {
                    value:60,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'6-8万',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [100, 120],
            itemStyle : dataStyle,
           
            data:[
                {
                    value:80, 
                    name:'6-8万',
                    label: {
                        normal: {
                            formatter: '{b}{d}%',
                            textStyle: {
                                fontSize: 12,
                                color: '#ffffff'
                            }
                        },
                    },
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'5-6万',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [80, 100],
            itemStyle : dataStyle,
           
            data:[
                {
                    value:45, 
                    name:'5-6万',
                    label: {
                        normal: {
                            formatter: '{b}{d}%',
                            textStyle: {
                                fontSize: 12,
                                color: '#ffffff'
                            }
                        },
                    },
                },
                {
                    value:30,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
         {
            name:'5万以下',
            type:'pie',
            clockWise: false,
            hoverAnimation: false,
            radius : [20, 40],
            itemStyle : dataStyle,
            
            data:[
                {
                    value:30, 
                    name:'5万以下',
                    label: {
                        normal: {
                            formatter: '{b}{d}%',
                            textStyle: {
                                fontSize: 12,
                                color: '#ffffff'
                            }
                        },
                    },
                },
                {
                    value:30,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },

    ]
};
 var PChart = echarts.init(document.getElementById('Pie'));
     PChart.setOption(Poption);
/*工资分析左下饼图end*/
/*工资分析右上象形图start*/
PIoption = {
    xAxis: {
        data: ['正高级', '副高级', '一级', '二级', '三级'],
        axisLine:{
            lineStyle:{
                color:'#4a5d8e',
                width:1,
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
    },
    yAxis: {
        name: '年薪（万元）',
        nameTextStyle: {
                color: '#fff',
                fontSize:12,
            },
        axisLine:{
            lineStyle:{
                color:'#4a5d8e',
                width:1,
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
        splitLine: {
            show: true,
            lineStyle:{
                color:'#1e2a4a',
                width:1,
                type:'solid',
            },
        },
        axisTick: {
            show: false
        },
    },
    series: [{
        type: 'pictorialBar',
        name: 'pictorial element',
        label:{
            normal:{
                show: true,
                position: 'top',
                textStyle:{
                    color:'#fff'
                }
            }
        },
        data: [{
            value: 15.0,
            symbol: 'image://../../assets/datasource/images/1-1 (1).png',
            symbolSize:['120%','100%'],
        }, {
            value: 11.2,
            symbol: 'image://../../assets/datasource/images/1-1 (2).png',
            symbolSize:['150%','100%'],
        }, {
            value: 10.2,
            symbol: 'image://../../assets/datasource/images/1-1 (3).png',
            symbolSize:['150%','100%'],
        }, {
            value: 8.5,
            symbol: 'image://../../assets/datasource/images/1-1 (4).png',
            symbolSize:['150%','100%'],
        }, {
            value: 7.5,
            symbol: 'image://../../assets/datasource/images/1-1 (5).png',
            symbolSize:['150%','100%'],
        }]
    }]
};
var myChart = echarts.init(document.getElementById('Pictorial'));
    myChart.setOption(PIoption);
/*工资分析右上象形图end*/
/*工资分析右中柱状图start*/

Hoption = {
    title: [{
        text: '普通老师收入',
        left: '31%',
        bottom:0,
        textStyle: {
            color: '#6a94d2',
            fontSize:12,
            fontWeight: 'normal'
        }
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        max:20,
        axisLine:{
           lineStyle:{
                color:'#4a5d8e',
                width:1,
                type:'solid',
            },
        },
        axisLabel:{
            show:false,
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',
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
            show: false,
        },
        data: [
            '市骨干教师',
            '市学科带头人',
            '区骨干教师',
            '区学科带头',
            '区优秀青年教师',
            '校骨干教师',
        ]
    },
    series: [{
        name: '2016年占比',
        type: 'bar',
        data: [6.50, 7.50, 8.50, 8.50, 9.50, 10.0],
        barMaxWidth:10,
        itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#f04a4e','#fb8a2e','#a6e14a',
                          '#48d3aa','#8de6ff','#4d9def'
                        ];
                        return colorList[params.dataIndex]
                    },
                    barBorderRadius:[10,10,10,10],
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{c} 倍'
                    },
                },

            }
    }]
};
var myChart = echarts.init(document.getElementById('His'));
    myChart.setOption(Hoption);
/*工资分析右中柱状图end*/
/*工资分析右下柱状图start*/
Poption = {
    tooltip : {
        formatter: function(params) {
            if (params.seriesIndex % 2 === 0) {
                return params.seriesName +':'+ params.value
            } else {
                return params.seriesName +':'+ -params.value
            }
        }
    },
    title: [{
        text: '身兼行政职务的教师',
        right: '31%',
        top:30,
        textStyle: {
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 'normal'
        }
    }, {
        text: '普通教师',
        left: '40%',
        top:30,
        textStyle: {
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 'normal'
        }
    }],
    xAxis : [
        {
            type : 'value',
            axisTick: {
                show: false
            },
            min:-20,
            axisLabel:{
                show:false,
            },
            axisLine:{
                show:false,
            },
            splitLine:{
                show:false,
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['年均科研课题收入','年均总收入','年均工资性收入'],
            axisTick: {
                show: false
            },
            offset:0, //Y 轴相对于默认位置的偏移，在相同的 position 上有多个 Y 轴的时候有用。
            axisLabel:{
                inside:true,
                textStyle:{
                    color:'#8ab3f1',
                    fontSize:'14',
                    align:'left'
                }
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#40517c',
                    type:'solid',
                    width:2
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#4a5d8e',
                    type:'dashed',
                    width:1
                }
            }
        }
    ],
    series : [
        {
            name:'身兼行政职务的教师',
            type:'bar',
            stack: '总量',
            barWidth :16,
            data:[3.7, 15.1, 9.1],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#a6e14a','#42d9eb','#4d9def'
                        ];
                        return colorList[params.dataIndex]
                    },
                    /*borderColor: new echarts.graphic.LinearGradient(
                        1,0, 0, 1,
                        [
                            {offset: 0, color: '#a6e14a'},
                            {offset: 1, color: '#a6e14a'}
                        ]
                    ),
                    borderWidth:2,*/
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{c} 万元',
                        textStyle:{
                            color:'#fff',
                        }
                    },
                }

            },
        },
        {
            name:'普通教师',
            type:'bar',
            stack: '总量',
            data:[-1.6, -11.1, -7.9],
            itemStyle: {
                normal: {
                    label : {
                        show: true, 
                        position: 'left',
                        formatter: function(param) {
                            return Math.abs(param.value) +'万元'
                        },
                        textStyle:{
                            color:'#fff',
                        }
                    },
                    color: function(params) {
                        var colorList = [
                          '#a6e14a','#42d9eb','#4d9def'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
        }
    ]
};
var myChart = echarts.init(document.getElementById('Post'));
    myChart.setOption(Poption);
/*工资分析右下柱状图end*/
