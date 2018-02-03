var all = {
    "data": [
		[41,45,53,56,60],
		[50,65,78,80,85],
		[61,55,53,36,70],
		[70,67,48,40,85],
		[21,65,53,96,60],
		[50,66,78,50,76]
    ],
    "provinces":["2013","2014","2015", "2016", "2017"],
	
    "years": ["初一年级","初二年级","初三年级"]
};

LSoption = {
    timeline: {
        axisType: 'category',
        autoPlay: true,
        playInterval: 5000,
		symbol: 'image://../../assets/selfsource/images/circle.png',
		symbolSize: ['18','11'],
		left:'15%',
		right:'15%',
		bottom:0,
		height:32,
		lineStyle:{
		color: '#ff6840',
		},
		label:{
		  normal:{
			  textStyle:{
				  fontSize:12,
				  color:'#636363',
				  fontFamily:'微软雅黑',
				  baseline:'bottom',
			  },
			  position:'bottom'
		  }
		},
		checkpointStyle:{
			symbol: 'image://../../assets/selfsource/images/org-cir.png',
			symbolSize:['24','16'],
		},
		controlStyle:{
		show: false,
		},
        data: all.years
    },
    options: [{
        tooltip: {
            trigger: 'axis'
        },
		legend: {
			data: ['及格率','优秀率'],
			itemWidth: 10,
			itemHeight: 10,
			textStyle:{
				color:'#939393',
				fontSize:12,
			},
			icon:'squre'
		},
        calculable: true,
        xAxis: [{
            type: 'category',
			name: '年份',
			nameGap:2,
			nameTextStyle:{
				color:'#939393',
				fontSize:11,	
				fontWeight:'bold'
			},
            axisLabel: {
                interval: 0,
				textStyle:{
					color:'#939393',
					fontSize:12,
				}
            },
			axisLine:{
				lineStyle:{
					color:'#e9e9e9',
					width:1,
					type:'solid',
				}
			},
			axisTick:{
				show:false
			},
			splitLine:{
				show:false
			},
            data: all.provinces
        }],
        yAxis: [{
            type: 'value',
            name: '百分比%',
			nameTextStyle:{
				color:'#939393',
				fontSize:11,	
				fontWeight:'bold'
			},
			max:100,
			axisTick: {
				show: false
			},
			axisLine:{
			   lineStyle:{
					color:'#e9e9e9',
					width:1,
					type:'solid',
				},
			},
			axisLabel : {
				textStyle:{
					color:'#939393',
					fontSize:12,
				}
			},
			splitLine: {
				show: false,
			},
        }],
        series: [{
            name: '优秀率',
            type: 'line',
			symbol: 'circle',
			symbolSize: 6,
			itemStyle: {
				normal: {
					color: '#ff9073'
				}
			},
            data: all.data[0]
        },{
            name: '及格率',
            type: 'line',
            symbol: 'circle',
			symbolSize: 6,
			itemStyle: {
				normal: {
					color: '#969afc'
				}
			},
            data: all.data[1]
        }]
    }, {
        series: [{
            data: all.data[2]
        }]
    }, {
        series: [{
            data: all.data[3]
        }]
    }, {
        series: [{
            data: all.data[4]
        }]
    }]
};
var LSChart = echarts.init(document.getElementById('Linesslide'));
	LSChart.setOption(LSoption);


Baraccumulationoption = {
 tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['2015集团人数','2016集团人数','2017集团人数','2015本部人数','2016本部人数','2017本部人数'],
		textStyle: {
            fontSize: 12,
			color:'#939393'
        },
		left: '15%',
		icon:'squre',
		itemWidth: 10,
        itemHeight: 10,
    },
    grid: {
        left: '3%',
        right: '16%',
		top:'40%',
        bottom: '0',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['1-10','11-20','21-50','51-100','101-200'],
			name:'总分区排名',
			nameTextStyle:{
				color:'#939393',
				fontSize:11,	
				fontWeight:'bold'
			},
			nameGap:0,
			nameTextStyle:{
				color:'#939393',
				fontSize:11,	
				fontWeight:'bold'
			},
            axisLabel: {
                interval: 0,
				textStyle:{
					color:'#939393',
					fontSize:12,
				}
            },
			axisLine:{
				lineStyle:{
					color:'#e9e9e9',
					width:1,
					type:'solid',
				}
			},
			axisTick:{
				show:false
			},
			splitLine:{
				show:false
			},
        }
    ],
    yAxis : [
        {
            type : 'value',
			name:'人数',
			nameTextStyle:{
				color:'#939393',
				fontSize:11,	
				fontWeight:'bold'
			},
			max:100,
			axisTick: {
				show: false
			},
			axisLine:{
			   lineStyle:{
					color:'#e9e9e9',
					width:1,
					type:'solid',
				},
			},
			axisLabel : {
				textStyle:{
					color:'#939393',
					fontSize:12,
				}
			},
			splitLine: {
				show: false,
			},
        }
    ],
    series : [
        {
            name:'2015本部人数',
            type:'bar',
			barWidth:15,
            stack: '2015',
			itemStyle: {
				normal: {
					color: '#ffeaa9'
				}
			},
            data:[3,5,8,12,20]
        },
        {
            name:'2016本部人数',
            type:'bar',
			barWidth:15,
            stack: '2016',
			itemStyle: {
				normal: {
					color: '#b6f9ff'
				}
			},
            data:[3,4,6,8,16]
        },
        {
            name:'2017本部人数',
            type:'bar',
            stack: '2017',
			itemStyle: {
				normal: {
					color: '#8aaeff'
				}
			},
            data:[3,4,6,15,29]
        },
        {
            name:'2015集团人数',
            type:'bar',
			stack: '2015',
			barWidth:15,
			itemStyle: {
				normal: {
					color: '#f3cc55'
				}
			},
            data:[5, 6, 15, 30, 45]
        },
        {
            name:'2016集团人数',
            type:'bar',
			barWidth:15,
            itemStyle: {
				normal: {
					color: '#74d3dc'
				}
			},
            stack: '2016',
            data:[5,8,16,25,78]
        },
        {
            name:'2017集团人数',
            type:'bar',
			barWidth:15,
            stack: '2017',
			itemStyle: {
				normal: {
					color: '#5787f4'
				}
			},
            data:[6,8,18,37,68]
        }
    ]
};
    
var BaraccumulationChart = echarts.init(document.getElementById('Baraccumulation'));
	BaraccumulationChart.setOption(Baraccumulationoption); 

ccaoption = {
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
		icon:'squre',
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
        data: ['初三年级','初二年级','初三年级'],
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
			barWidth:16,
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
            data: [10, 13, 13],
			itemStyle: {
                normal: {
                    color:'#f4565c'
                }
            }
        }, {
            name: '国家学会级',
            type: 'bar',
			barWidth:16,
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
            data: [5,5,3,],
			itemStyle: {
                normal: {
                    color:'#f3cc55'
                }
            }
        }, {
            name: '省市学会级',
            type: 'bar',
			barWidth:16,
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
            data: [10,10,10],
			itemStyle: {
                normal: {
                    color:'#969afc'
                }
            }
        }, {
            name: '区级',
            type: 'bar',
			barWidth:16,
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
            data: [20,19,22],
			itemStyle: {
                normal: {
                    color:'#57c29e'
                }
            }
        },{
            name: '校级',
            type: 'bar',
			barWidth:16,
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
            data: [22,24,23],
			itemStyle: {
                normal: {
                    color:'#74d3dc'
                }
            }
        }
    ]
    
};

var ccaChart = echarts.init(document.getElementById('ccategory'));
	ccaChart.setOption(ccaoption);

BJARoption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
		name:'次数',
		nameGap:2,
		nameTextStyle:{
			color:'#939393',
			fontSize:10,	
			fontWeight:'bold'
		},
		axisLabel: {
			interval: 0,
			textStyle:{
				color:'#939393',
				fontSize:12,
			}
		},
		axisLine:{
			lineStyle:{
				color:'#e9e9e9',
				width:1,
				type:'solid',
			}
		},
		axisTick:{
			show:false
		},
		splitLine:{
			show:false
		},
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
		name:'年级',
		nameTextStyle:{
			color:'#939393',
			fontSize:10,	
			fontWeight:'bold'
		},
		axisTick: {
			show: false
		},
		axisLine:{
		   lineStyle:{
				color:'#e9e9e9',
				width:1,
				type:'solid',
			},
		},
		axisLabel : {
			textStyle:{
				color:'#939393',
				fontSize:12,
			}
		},
		splitLine: {
			show: false,
		},
        data: ['初一年级','初二年级','初三年级']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [12,10,16],
			barWidth:16,
			itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#f3cc56','#5787f4','#f4575c'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};
var BJARChart = echarts.init(document.getElementById('BJAR'));
	BJARChart.setOption(BJARoption);

GBARoption = {
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
			name:'类型',
			nameTextStyle:{
				color:'#939393',
				fontSize:10,	
				fontWeight:'bold'
			},
			axisLabel: {
				interval: 0,
				textStyle:{
					color:'#939393',
					fontSize:12,
				}
			},
			axisLine:{
				lineStyle:{
					color:'#e9e9e9',
					width:1,
					type:'solid',
				}
			},
			axisTick:{
				show:false
			},
			splitLine:{
				show:false
			},
            data : ['固定资产','运维费用','办公耗材','教师工资']
        }
    ],
    yAxis : [
        {
            type : 'value',
			name:'金额（万）',
			nameTextStyle:{
				color:'#939393',
				fontSize:10,	
				fontWeight:'bold'
			},
			axisTick: {
				show: false
			},
			axisLine:{
			   lineStyle:{
					color:'#e9e9e9',
					width:1,
					type:'solid',
				},
			},
			axisLabel : {
				textStyle:{
					color:'#939393',
					fontSize:12,
				}
			},
			splitLine: {
				show: false,
			},
        }
    ],
    series : [
        {
            name:'消耗品',
            type:'bar',
			barWidth:22,
            data:[23.2, 25.6, 76.7, 135.6],
			itemStyle: {
                normal: {
                    color:'#62da97',
				}
			},
			label: {
				normal: {
					show: true,
					position: 'top',
					formatter: '{c}万',
					textStyle:{
						color:'#7a7a7a',
						fontSize:11,
						fontWeight:'bold'
					}
				}
			},
        }
    ]
};   
var GBARChart = echarts.init(document.getElementById('Consumables'));
	GBARChart.setOption(GBARoption);
   
 var colorList = [
     '#969afc', '#f3cc56', '#f4575c'
 ];
 var originalData = [{
     value: 36,
     name: '初一324\n占比36%'
 }, {
     value: 11,
     name: '初二178\n占比11%'
 }, {
     value: 53,
     name: "初三678\n占比53%"
 }];

 echarts.util.each(originalData, function(item, index) {
     item.itemStyle = {
         normal: {
             color: colorList[index]
         }
     };
 });

 PDoption = {
     series: [{
         hoverAnimation: false, //设置饼图默认的展开样式
         radius: [35, 70],
         name: 'pie',
         type: 'pie',
         selectedMode: 'single',
         selectedOffset: 16, //选中是扇区偏移量
         clockwise: true,
         startAngle: 90,
         label: {
             normal: {
                 textStyle: {
                     fontSize: 12,
                     color: '#636363'
                 }
             }
         },
         labelLine: {
             normal: {
                 lineStyle: {
                     color: '#e6e6e6',

                 }
             }
         },
         data: originalData
     }]
 };

 var PDChart = echarts.init(document.getElementById('PIEprepare'));
	PDChart.setOption(PDoption);
	
PBDoption = {
	title: {
        text: '初一年级老师备课量',
		textStyle:{
			color:'#565656',
			fontSize:12,
		},
		left:'center',
    },
	//提示框组件
	tooltip: {
		//触发类型
		trigger: 'axis',
		//指示器
		axisPointer: {
			type: 'shadow'
		},
		//提示悬浮文字
		formatter: "{a} <br/>{b} : {c}"
	},
	legend: {
		data: ['2016年']
	},
	grid: {
		left: '9%',
		right: '8%',
		bottom: '5%',
		top:'15%',
		containLabel: true
	},
	xAxis: {
		type: 'value',
		axisTick: {
			show: false
		},
		axisLine:{
			show: false
		},
		splitLine: {
			show: false,
		},
		axisLabel:{
			show: false,
		}
	},
	yAxis: {
		type: 'category',
		axisTick: {
			show: false
		},
		axisLine:{
		   lineStyle:{
				color:'#e9e9e9',
				width:1,
				type:'solid',
			},
		},
		axisLabel : {
			textStyle:{
				color:'#939393',
				fontSize:10,
			}
		},
		splitLine: {
			show: false,
		},
		inverse:'true', //排序
		data: [
			'李娜那',
			'王琳琳',
			'绮梦',
			'王嘉韵',
			'王家瑞',
			'黎于茜',
			'月梅',
			'赵宇'
		]
	},
	series: [{
		name: '2016年占比',
		type: 'bar',
		barWidth:16,
		itemStyle: {
				normal: {
					color: '#ff6840'
				}
			},
		data: [30, 30, 18, 18, 20, 30, 50, 78],
		label: {
			normal:{
				show: true, 
				position: 'inside',
				formatter: '{c}个',
			}
		},
	}]
};
 var PBDChart = echarts.init(document.getElementById('BARprepare'));
	PBDChart.setOption(PBDoption);
	
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

var popupsChart = echarts.init(document.getElementById('Jopups'));
	popupsChart.setOption(popupsoption);	