/**余缺分析柱状图start**/
Aoption = {
    /*tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },*/
    tooltip : {
        formatter: function(params) {
            if (params.seriesIndex % 9=== 0) {
                return params.seriesName +':'+ params.value
            } else {
                return params.seriesName +':'+ -params.value
            }
        }
    },
    legend: {
        data:['余缺人数','现有在编人数', '计划编制人数'],
        textStyle:{
            color:'#fff',
            fontSize:12,
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color:'#1d99d2',
                    width:2,
                    type:'solid',
                },
            },
            axisLabel : {
                show:true,
                formatter: function(param) {
                    if (param > 0) {
                        return param
                    } else {
                        return -param
                    }
                },
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
            type : 'category',
            axisTick : {show: false},
            axisLine:{
                lineStyle:{
                    color:'#1d99d2',
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
            splitLine: {
                show: false,
            },
            data : ['本部高中','本部初中','嘉铭东校','嘉铭分校','保利分校','崇实分校','帝景分校']
        }
    ],
    series : [
        {
            name:'计划编制人数',
            type:'bar',
            stack: '总量',
            barWidth : 5,
            itemStyle: {
                normal: {
                    color:'#ffff00',
                    label : {
                        show: true,
                        position: 'right',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            },
            data:[141, 99, 120, 107, 189, 160, 120]
        },{
            name:'余缺人数',
            type:'bar',
            barWidth:20,
            itemStyle : { normal: {label : {show: true, position: 'inside'}}},
            itemStyle: {
                normal: {
                    color:'#2ec7c9',
                    barBorderRadius:[5,5,5,5],
                    label: {
                        show: true, 
                        position: 'inside',
                        normal: {
                            show: true,
                            /*position: 'left',*/
                            textStyle:{
                                color:'#fff',
                                fontSize:12,
                                fontWeight:'bold',
                                align:'center'
                            }
                                        
                        }
                    },
                }
            },
           data:[12, 24, 23, 33, 35, 30, 10]
        },
        {
            name:'现有在编人数',
            type:'bar',
            stack: '总量',
            barWidth:5,
            itemStyle: {
                normal: {
                    color:'#e92f49',                   
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: function(param) {
                        return Math.abs(param.value)
                    },
                    textStyle:{
                        color:'#fff',
                    }
                }
            },
            data:[-129, -75, -97, -74, -154, -130, -110],
        }
    ]
};
var AChart = echarts.init(document.getElementById('Abar'));
    AChart.setOption(Aoption);
/**余缺分析柱状图end**/
/*余缺分析柱状图与折线图的结合*/
Coption = {
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    legend: {
        data:['现有在编人员','计划编制人员','余缺人数'],
        textStyle:{
            color: '#fff',
            fontSize:14,
        },
    },
    xAxis : [
        {
            type : 'category',
            data : ['语文','数学','英语','化学','物理','生物','历史','地理','政治','体育','音乐','美术'],
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
            name:'现有在编人员',
            type:'bar',
            barWidth: 15,
            itemStyle:{
                normal:{
                    color:'#2ec7c9'
                }
            },
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'计划编制人员',
            type:'bar',
            barWidth: 15,
            itemStyle:{
                normal:{
                    color:'#f79727'
                }
            },
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'余缺人数',
            type:'line',
            yAxisIndex: 1,
            smooth: true,
            symbol:'image://../../assets/datasource/images/circle.png',
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
            data:[2.0, 2, 3, 4, 4, 5, 3, 2, 3, 5, 4, 5]
        }
    ]
};

var AChart = echarts.init(document.getElementById('Column'));
    AChart.setOption(Coption); 
    
/*余缺分析柱状图与折线图的结合*/ 

