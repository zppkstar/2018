var all = {
    "data": [
        [10, 13, 14, 10, 13,12,20,7,14,18,22],
		[5,5,3,5,0,6,6,2,7,7,9],
		[0,0,5,0,15,10,10,0,10,10,10],
		[23,19,21,15,18,20,20,19,22,22,19],
		[24,20,24,19,25,23,22,19,19,24,23]
    ],
    "provinces":['花家分校','十八里店分校','崇实分校','国贸分校','帝景小学','帝景分校','嘉铭学校','嘉铭西校寄宿','嘉铭西校初中','本部初中','本部高中'],
    "years": ["2013","2014","2015", "2016", "2017"]
};

option = {
    timeline: {
        axisType: 'category',
        autoPlay: true,
        playInterval: 5000,
        data: all.years,
		left:'10%',
		right:'10%',
		bottom:0,
		height:30,
		symbol: 'image://../../assets/selfsource/images/circle.png',
		symbolSize: 10,
		lineStyle:{
		color: '#ff6840',
		},
		label:{
		  normal:{
			  textStyle:{
				  fontSize:12,
				  color:'#8F8F8F',
				  fontFamily:'微软雅黑',
				  baseline:'bottom',
			  },
			  position:'bottom'
		  }
		},
		checkpointStyle:{
			symbol: 'image://../../assets/selfsource/images/org-cir.png',
			symbolSize:['15','15'],
		},
		controlStyle:{
		show: false,
		},
	},	
    options: [{
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        legend: {
			data: ['国家级', '国家学会级', '省市学会级', '区级','校级'],
			padding: [20, 10],
			textStyle: {
				fontSize: 14,
				color:'#939393'
			},
			itemWidth:10,
			itemHeight:10,
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '10%',
			containLabel: true
		},
        xAxis: {
			show:false
		},
        yAxis: [{
			type: 'category',
			offset: 0,
			nameLocation:'start',
			nameGap:33,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			axisLabel: { //调整x轴的lable   
				textStyle: {
					fontSize: 12  
				}
			},
			data: all.provinces,
            }],
        series: [{
            name: '国家级',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
            data: all.data[0],
			itemStyle: {
                normal: {
                    color:'#f4565c'
                }
            }
        },{
            name: '国家学会级',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
            data: all.data[1],
			itemStyle: {
                normal: {
                    color:'#f3cc55'
                }
            }
        }, {
            name: '省市学会级',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
            data: all.data[2],
			itemStyle: {
                normal: {
                    color:'#969afc'
                }
            }
        }, {
            name: '区级',
            type: 'bar',
            stack: '总量',
            label: {
				normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
           data: all.data[3],
			itemStyle: {
                normal: {
                    color:'#57c29e'
                }
            }
        },{
            name: '校级',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
            data: all.data[4],
			itemStyle: {
                normal: {
                    color:'#74d3dc'
                }
            }
        }]
    }, {
        series: [{
            data: all.data[0],
        }]
    }, {
        series: [{
            data: all.data[1],
        }]
    }, {
        series: [{
            data: all.data[2],
        }]
    }, {
        series: [{
            data: all.data[3],
        }]
    }, {
        series: [{
            data: all.data[4],
        }]
    }]
};

var catChart = echarts.init(document.getElementById('category'));
	catChart.setOption(option);

/*余缺分析柱状图与折线图的结合*/
Coption = {
    tooltip : {
        trigger: 'axis'
    },
	grid: {
        bottom: '0%',
        containLabel: true
    },
    calculable : true,
    legend: {
        data:['老师人数','学生人数','余缺人数'],
        textStyle:{
            color: '#7a7a7a',
            fontSize:14,
        },
		itemWidth:10,
		itemHeight:10,

    },
    xAxis : [
        {
            type: 'category',
            data : ['本部高中','本部初中','嘉铭西校初中','嘉铭西校寄宿','嘉铭东校','帝景分校','帝景小学','国贸分校','崇实分校','十八里店分校','花家分校'],
            axisLine:{
                lineStyle:{
                    color:'#e9e9e9',
                    width:1,
                    type:'solid',
                },
            },
            axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#939393',
					fontSize:8
				}
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
                    color:'#e9e9e9',
                    width:1,
                    type:'solid',
                },
            },
            max:200,
            axisLabel : {
                show:true,
                formatter: '{value}',
                textStyle:{
                    color: '#939393',
                    fontSize:8,
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
                    color:'#e9e9e9',
                    width:1,
                    type:'solid',
                },
            },
            axisLabel : {
                show:true,
                formatter: '{value}',
                textStyle:{
                    color: '#7a7a7a',
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
            name:'老师人数',
            type:'bar',
            barWidth: 10,
			label: {
                normal: {
                    show: false,
                    position: 'top',
					textStyle:{
						color:'#7a7a7a'
					}
                }
            },
            itemStyle:{
                normal:{
                    color:'#62da97'
                }
            },
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4]
        },
        {
            name:'学生人数',
            type:'bar',
            barWidth: 10,
			label: {
                normal: {
                    show: false,
                    position: 'top',
					textStyle:{
						color:'#7a7a7a'
					}
                }
            },
            itemStyle:{
                normal:{
                    color:'#ff9073'
                }
            },
            data:[45, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0]
        },
        {
            name:'余缺人数',
            type:'line',
            yAxisIndex: 1,
            smooth: true,
            symbol:'emptyCircle',
            hoverAnimation: false,
            showAllSymbol: true,
            legendHoverLink:false,
            symbolSize:['18','18'],
            label:{
                color:'#ffff00',
                normal:{
                     position: ['30%', '10%'],
                    textStyle:{
                            color: '#f90719',
                            fontSize:9,
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
            data:[2.0, 2, 3, 4, 4, 5, 3, 2, 3, 5, 4]
        }
    ]
};

var AChart = echarts.init(document.getElementById('Column'));
    AChart.setOption(Coption); 
    
/*余缺分析柱状图与折线图的结合*/ 
/*折线图*/
LineOption = {
	color: ['#adb0f8', '#58c39f', '#f2cb56'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['固定资产', '办公耗材', '运维费用'],
        textStyle: {
            color: '#939393',
			fontSize:12,
        },
		itemWidth:10,
		itemHeight:10,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom:'0',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['本部高中','本部初中','嘉铭西校初中','嘉铭西校寄宿','嘉铭东校','帝景分校','帝景小学','国贸分校','崇实分校','十八里店分校','花家分校'],
		axisLabel:{
			formatter:function(value){
				var sepCount = 1;//每几个字符分隔
				return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
			},
			textStyle:{
				color:'#939393'
			}
		},
        axisLine: {
            lineStyle: {
                color: '#e9e9e9',
				fontSize:10,
            }
        },
		axisTick:{
			show:false
		},

    },
    yAxis: {
		name:'(万元)',
		
		nameTextStyle:{
			color:'#939393'
		},
        axisLine: {
            lineStyle: {
                color: '#e9e9e9'
            }
        },
		axisLabel:{
			textStyle:{
				color:'#939393'
			}
		},
        splitLine: {
            show:false,
        },
		axisTick:{
			show:false
		},

    },
    series: [{
        name: '固定资产',
        type: 'line',
        data: [0.42, 0.5, 0.3, 0.39, 0.55, 0.2, 0.6],
		symbolSize:6,
		symbol:'circle',
		markPoint: {
			symbol:'image://../../assets/selfsource/images/alarm.png',
			symbolSize:'14',
            data: [
                {type: 'max', name: '最大值'}
            ],
			label:{
				normal:{
					show:false
				}
			},
        },
    }, {
        name: '办公耗材',
        type: 'line',
		label:{
			normal:{
				show:false
			}
		},
		markPoint: {
			symbol:'image://../../assets/selfsource/images/alarm.png',
			symbolSize:'14',
            data: [
                {type: 'max', name: '最大值'}
            ],
			label:{
				normal:{
					show:false
				}
			},
        },
        data: [0.32, 0.2, 0.4, 0.7, 0.3, 0.2, 0.7]
    }, {
        name: '运维费用',
        type: 'line',
		label:{
			normal:{
				show:false
			}
		},
        data: [0.22, 0.5, 0.3, 0.49, 0.3, 0.8, 0.1]
    }]
};
var LChart = echarts.init(document.getElementById('Line'));
    LChart.setOption(LineOption); 

/**饼图*/
var data = [{
    value: 1200,
    name: '花家分校'
}, {
    value: 6800,
    name: '帝景分校'
}, {
    value: 5600,
    name: '崇实分校'
}, {
    value: 7900,
    name: '本部分校'
}, {
    value: 4900,
    name: '嘉铭东校欧陆经典'
}, {
    value: 8200,
    name: '嘉铭西校寄宿'
},{
    value: 1544,
    name: '本部高中'
},{
    value: 2300,
    name: '本部初中'
},{
    value: 4322,
    name: '帝景小学'
},{
    value: 1235,
    name: '国贸分校'
},{
    value: 3467,
    name: '十八里店分校'
}];
Pieoption = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius:['50%', '72%'],
            center: ['50%', '50%'],
            color: ['#f3cc56', '#969afc', '#58c29e', '#74d3dc', '#5787f4','#f4575c','#ff9073','#dc6392','#a64326','#8cd0fb','#bf8170'],
            label: {
                normal: {
                    position: 'outside',
                    formatter: '{b}\n{d}万',
                    textStyle: {
                        color: '#939393',
                        fontSize: 6,
    					fontWeight:'normal',
    					fontFamily:'微软雅黑,宋体'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
    				lineStyle: {
                        color: '#e6e6e6',
                    }
                }
            },
            data:[
                {value:3100, name:'花家分校'},
                {value:6800, name:'帝景分校'},
                {value:5600, name:'崇实分校'},
                {value:7000, name:'本部分校'},
                {value:4900, name:'嘉铭东校欧陆经典'},
                {value:6000, name:'嘉铭西校寄宿'},
				{value:1544,name: '本部高中'},
				{value:2300,name: '本部初中'},
				{value:4322,name: '帝景小学'},
				{value:1235,name: '国贸分校'},
				{value:3467,name: '十八里店分校'}
            ],
        }
    ]
};
var PChart = echarts.init(document.getElementById('Pie'));
    PChart.setOption(Pieoption); 
/**饼图*/
/*弹出层*/
popupsoption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        show : false,
    },
    legend: {
        data: ['国家级', '国家学会级', '省市学会级', '区级','校级'],
		padding: [20, 10],
        textStyle: {
            fontSize: 14,
			color:'#939393'
        },
		itemWidth:10,
		itemHeight:10,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
		show:false
    },
    yAxis: {
        type: 'category',
        data: ['花家分校','十八里店分校','崇实分校','国贸分校','帝景小学','帝景分校','嘉铭学校','嘉铭西校寄宿','嘉铭西校初中','本部初中','本部高中'],
		axisLine: {
            show: false
        },
		axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLabel: { //调整x轴的lable   

            textStyle: {
                fontSize: 12  
            }
        }
    },
    series: [{
            name: '国家级',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
            data: [10, 13, 14, 10, 13,12,20,7,14,18,22],
			itemStyle: {
                normal: {
                    color:'#f4565c'
                }
            }
        }, {
            name: '国家学会级',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
            data: [5,5,3,5,0,6,6,2,7,7,9],
			itemStyle: {
                normal: {
                    color:'#f3cc55'
                }
            }
        }, {
            name: '省市学会级',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
            data: [0,0,5,0,15,10,10,0,10,10,10],
			itemStyle: {
                normal: {
                    color:'#969afc'
                }
            }
        }, {
            name: '区级',
            type: 'bar',
            stack: '总量',
            label: {
				normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
            data: [23,19,21,15,18,20,20,19,22,22,19],
			itemStyle: {
                normal: {
                    color:'#57c29e'
                }
            }
        },{
            name: '校级',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
					textStyle:{
						fontSize:11,
						color:'#fdfdfe'
					}
                }
            },
            data: [24,20,24,19,25,23,22,19,19,24,23],
			itemStyle: {
                normal: {
                    color:'#74d3dc'
                }
            }
        }


    ]
    
};

var popupsChart = echarts.init(document.getElementById('popups'));
	popupsChart.setOption(popupsoption);	
/**柱形图*/
Baroption = {
    tooltip: {
        trigger: 'axis',
        formatter: "{b}:{c}万",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '20%',
        top: '1%',
        containLabel: true
    },
    yAxis: {
        type: 'category',
        data: ['灯具', '风扇', '汽车', '中央空调', '台式空调','桌椅','电视','投影仪','打印机','台式电脑'],
        axisLine: {
            show: true,
			lineStyle:{
				color:'#e9e9e9'
			}
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            textStyle: {
                color: '#939393',
				fontSize:10,
            }
        }
    },
    xAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],

    series: [{
        type: 'bar',
        data:['0.2','0.35','0.36','0.4','0.47','0.54','0.7','0.92','1.0','1.3'],
        barCategoryGap: '35%',
		barWidth:12,
        label: {
            normal: {
                show: true,
                position: 'right',
				formatter: '{c}万',
                textStyle: {
                    color: '#939393',
					fontSize:6
                }
            }
        },
        itemStyle: {
            normal: {
                color:'#ff6840'
            }
        }
    }]
};
var BarChart = echarts.init(document.getElementById('Bar'));
    BarChart.setOption(Baroption); 
/*柱形图*/
