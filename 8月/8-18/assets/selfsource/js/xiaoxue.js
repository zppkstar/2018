var provinces = ['2013', '2014', '2015', '2016','2017'];
var yarn_data_obj = {
	"xValueList": provinces,
	"queueNameList": ["及格率", "优秀率"],

	"一年级": {
		"及格率": [41,45,53,56,60],
		"优秀率": [50,65,78,80,85],
	},
	"二年级": {
		"及格率": [61,55,53,36,70],
		"优秀率": [70,67,48,40,85],
	},
	"三年级": {
		"及格率": [21,65,53,96,60],
		"优秀率": [50,66,78,50,76],
	},
	"四年级": {
		"及格率": [35,15,53,46,76],
		"优秀率": [20,68,68,20,35],
	},
	"五年级": {
		"及格率": [25,43,32,45,65],
		"优秀率": [46,69,32,38,90]
	},
	"六年级": {
		"及格率": [35,32,45,76,25],
		"优秀率": [12,89,12,31,75]
	},
};
var dateArr=[];
for(key in yarn_data_obj){
    if(key==="xValueList"||key==="queueNameList") continue;
    dateArr.push(key);
}
var colorConsArr_hdfs = ["#989cfc", "#ff9073"];
var LSoption={
	baseOption: {
		tooltip: {
			trigger: 'axis'
		},
		color: [], //ToDo
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
            data: provinces, 
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
        }],
        yAxis: [{
            type: 'value',
            name: '百分比%',
			nameTextStyle:{
				color:'#939393',
				fontSize:11,	
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
        }],
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
            data: dateArr
        },
		series: [] //ToDo
	},
	options: [] //Todo
};

for (var i = 0; i < dateArr.length; i++) {
    var options = [];
	for (var i = 0; i < dateArr.length; i++) {
		var item = [];
		for (var j = 0; j < (Object.keys(yarn_data_obj[dateArr[i]])).length; j++) {
			var dataItem = yarn_data_obj[dateArr[i]];
			var nameList = Object.keys(yarn_data_obj[dateArr[i]]);
			item.push({
				name: nameList[j],
				type: 'line',
				stack: '总量',
				symbol: 'circle',
    			symbolSize: 6,
    			itemStyle: {
    				normal: {
    					color: colorConsArr_hdfs[j],
    				}
    			},
				lineStyle: {
					normal: {
						color: colorConsArr_hdfs[j],
					}
				},
				data: dataItem[nameList[j]]
			})
		}
		LSoption.options.push({
			series: item,			
		});
		
	}
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
        data: ['六年级','五年级','四年级','三年级','二年级','一年级'],
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
			barCategoryGap:20,
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
            data: [22,18,14,18,14,22],
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
			barCategoryGap:20,
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
            data: [9,7,7,8,9,10],
			itemStyle: {
                normal: {
                    color:'#f3cc55'
                }
            }
        }, {
            name: '省市学会级',
            type: 'bar',
			barWidth:16,
			barCategoryGap:20,
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
            data: [10,10,10,10,10,10],
			itemStyle: {
                normal: {
                    color:'#969afc'
                }
            }
        }, {
            name: '区级',
            type: 'bar',
			barWidth:16,
			barCategoryGap:20,
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
            data: [20,19,22,15,25,15],
			itemStyle: {
                normal: {
                    color:'#57c29e'
                }
            }
        },{
            name: '校级',
            type: 'bar',
			barWidth:16,
			barCategoryGap:20,
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
            data: [22,24,23,17,23,24],
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
        data: ['六年级','五年级','四年级','三年级','二年级','一年级'],
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [12,10,16,15,10,13],
			barWidth:16,
			itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                          '#74d3dc','#57c29e','#969afc','#5787f4','#f3cc56','#f4575c'
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
     '#f3cc56','#f4575c','#74d3dc','#57c29e','#969afc','#5787f4'    
 ];
 var originalData = [{
     value: 20,
     name: '一年级'
 }, {
     value: 25,
     name: '二年级'
 }, {
     value: 43,
     name: "三年级"
 }, {
     value: 30,
     name: "四年级"
 }, {
     value: 20,
     name: "五年级"
 }, {
     value: 10        ,
     name: "六年级"
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
        text: '一年级老师备课量前十',
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