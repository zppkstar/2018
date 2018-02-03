LHSoption = {
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
    tooltip: {
		trigger: 'axis'
	},
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
		data:['2013','2014','2015','2016','2017'],
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
    series: [
        {
            name: '优秀率',
            type: 'line',
			symbol: 'circle',
			symbolSize: 6,
			itemStyle: {
				normal: {
					color: '#ff9073'
				}
			},
            data:[41,45,53,56,60],
        },
        {
            name: '及格率',
            type: 'line',
            symbol: 'circle',
			symbolSize: 6,
			itemStyle: {
				normal: {
					color: '#969afc'
				}
			},
            data:[50,65,78,80,85],
        }
    ]
};

var LHSChart = echarts.init(document.getElementById('HLinesslide'));
	LHSChart.setOption(LHSoption);


BHaraccumulationoption = {
 tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['2015集团人数','2016集团人数','2017集团人数'],
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
		top:'20%',
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
            name:'2015集团人数',
            type:'bar',
			stack: '2015',
			barWidth:15,
			barGap:'20%',
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
			barGap:'20%',
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
			barGap:'20%',
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
    
var BHaraccumulationChart = echarts.init(document.getElementById('BHaraccumulation'));
	BHaraccumulationChart.setOption(BHaraccumulationoption); 


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
        data: ['高一年级','高二年级','高三年级']
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
     '#969afc','#58c29e','#74d3dc','#5787f4', '#f4575c','#f3cc56'
 ];
 var originalData = [{
     value: 202,
     name: '市骨干教师\n202人'
 }, {
     value: 320,
     name: '区优秀青年教师\n320人'
 }, {
     value: 380,

     name: "区学科带头人\n380人"
 }, {
     value: 390,

     name: "区骨干教师\n390人"
 }, {
     value: 262,

     name: "市学科带头人\n262人"
 }, {
     value: 460,

     name: "校级骨干教师\n460人"
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

var popupsChart = echarts.init(document.getElementById('Hpopups'));
	popupsChart.setOption(popupsoption);	
	
