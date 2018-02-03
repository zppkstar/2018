option = {
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

var catChart = echarts.init(document.getElementById('category'));
	catChart.setOption(option);
	
caaoption = {
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

var caaChart = echarts.init(document.getElementById('caategory'));
	caaChart.setOption(caaoption);	

cbaoption = {
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

var cbaChart = echarts.init(document.getElementById('cbategory'));
	cbaChart.setOption(cbaoption);
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
    value: 31000,
    name: '花家分校'
}, {
    value: 68000,
    name: '帝景分校'
}, {
    value: 56000,
    name: '崇实分校'
}, {
    value: 79000,
    name: '本部分校'
}, {
    value: 49000,
    name: '国贸分校'
}, {
    value: 82000,
    name: '嘉铭分校'
}];
Pieoption = {
    backgroundColor: '#fff',
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['20%', '36%'],
        color: ['#f3cc56', '#969afc', '#58c29e', '#74d3dc', '#5787f4','#f4575c'],

        label: {
            normal: {
                position: 'outside',
                formatter: '{b}\n{d}万',
                textStyle: {
                    color: '#939393',
                    fontSize: 10
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
        data: data
    }]
};
var PChart = echarts.init(document.getElementById('Pie'));
    PChart.setOption(Pieoption); 
/**饼图*/
/**柱形图*/
Baroption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '8%',
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
        name: '应用使用率',
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
/**柱形图*/

/*集团学校老师数量及招聘余缺柱状图与折线图的结合*/
CIoption = {
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    legend: {
        data:['分校在职总人数','已招聘人数','缺少人数'],
		data:[{
			name:'分校在职总人数',
			icon:'squre',
		},{
			name:'已招聘人数',
			icon:'squre',
		},{
			name:'缺少人数',
			icon:'squre',
		}],
        textStyle:{
            color: '#939393',
            fontSize:12,
        },
		itemWidth:10,
		itemHeight:10,

    },
	grid: {
        bottom: '0%',
        containLabel: true
    },
    xAxis : [
        {
			name:'校区',
			nameTextStyle:{
				color:'#939393',
			},
			nameGap:20,
            type: 'category',
            data : ['嘉铭东校初中部','嘉铭东校小学部','嘉铭西校初中部','嘉铭西校寄宿部','嘉铭西校小学部','嘉铭东校欧陆经典','本部初中','本部高中','帝景分校小学部','帝景分校初中部','保利分校','崇实分校小学部','崇实分校初中部'],
            axisLine:{
                lineStyle:{
                    color:'#e9e9e9',
                    width:1,
                    type:'solid',
                },
            },
            axisLabel:{
				/* formatter:function(value){
					var sepCount = 1;每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				}, */
				formatter:function(params){
					var newParamsName = "";// 最终拼接成的字符串
					var paramsNameNumber = params.length;// 实际标签的个数
					var provideNumber = 1;// 每行能显示的字的个数
					var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
					/**
					 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
					 */
					// 条件等同于rowNumber>1
					if (paramsNameNumber > provideNumber) {
						/** 循环每一行,p表示行 */
						for (var p = 0; p < rowNumber; p++) {
							var tempStr = "";// 表示每一次截取的字符串
							var start = p * provideNumber;// 开始截取的位置
							var end = start + provideNumber;// 结束截取的位置
							// 此处特殊处理最后一行的索引值
							if (p == rowNumber - 1) {
								// 最后一次不换行
								tempStr = params.substring(start, paramsNameNumber);
							} else {
								// 每一次拼接字符串并换行
								tempStr = params.substring(start, end) + "\n";
							}
							newParamsName += tempStr;// 最终拼成的字符串
						}

					} else {
						// 将旧标签的值赋给新标签
						newParamsName = params;
					}
					//将最终的字符串返回
					return newParamsName
				},
				textStyle:{
					color:'#000'
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
            name : '余缺人数',
            nameTextStyle:{
                color:'#939393',
                fontSize:10,
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
                    color: '#939393',
                    fontSize:10,
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
            name : '在职人数',
			
            nameTextStyle:{
                color:'#939393',
                fontSize:10,
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
                    color: '#939393',
                    fontSize:10,
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
            name:'分校在职总人数',
            type:'bar',
            barWidth: 15,
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
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,25,48]
        },
        {
            name:'已招聘人数',
            type:'line',
			symbol:'circle',
			itemStyle:{
                normal:{
                    color:'#969afc'
                }
            },
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,5.3,29]
        },
        {
            name:'缺少人数',
            type:'line',
            yAxisIndex: 1,
            symbol:'circle',
            itemStyle: {
                normal: {
                    color: '#62da97',        
                }
            },
            data:[2.0, 2, 3, 4, 4, 5, 3, 2, 3, 5, 4,2.8,37]
        }
    ]
};

var AIChart = echarts.init(document.getElementById('CIolumn'));
    AIChart.setOption(CIoption); 
    
/*集团学校老师数量及招聘余缺柱状图与折线图的结合*/ 
/*集团资产消耗情况折线图*/ 
BRoption =  {
    tooltip : {
        trigger: 'axis'
    },
    calculable : true,
    legend: {
        data:['办公耗材','固定资产','教师工资'],
		data:[{
			name:'办公耗材',
			icon:'squre',
		},{
			name:'固定资产',
			icon:'squre',
		},{
			name:'教师工资',
			icon:'squre',
		}],
        textStyle:{
            color: '#939393',
            fontSize:12,
        },
		itemWidth:10,
		itemHeight:10,

    },
	grid: {
        bottom: '0%',
        containLabel: true
    },
    xAxis : [
        {
			name:'校区',
			nameTextStyle:{
				color:'#939393',
			},
			nameGap:20,
            type: 'category',
            data : ['嘉铭东校初中部','嘉铭东校小学部','嘉铭西校初中部','嘉铭西校寄宿部','嘉铭西校小学部','嘉铭东校欧陆经典','本部初中','本部高中','帝景分校小学部','帝景分校初中部','保利分校','崇实分校小学部','崇实分校初中部'],
            axisLine:{
                lineStyle:{
                    color:'#e9e9e9',
                    width:1,
                    type:'solid',
                },
            },
            axisLabel:{
				/* formatter:function(value){
					var sepCount = 1;每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				}, */
				formatter:function(params){
					var newParamsName = "";// 最终拼接成的字符串
					var paramsNameNumber = params.length;// 实际标签的个数
					var provideNumber = 1;// 每行能显示的字的个数
					var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
					/**
					 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
					 */
					// 条件等同于rowNumber>1
					if (paramsNameNumber > provideNumber) {
						/** 循环每一行,p表示行 */
						for (var p = 0; p < rowNumber; p++) {
							var tempStr = "";// 表示每一次截取的字符串
							var start = p * provideNumber;// 开始截取的位置
							var end = start + provideNumber;// 结束截取的位置
							// 此处特殊处理最后一行的索引值
							if (p == rowNumber - 1) {
								// 最后一次不换行
								tempStr = params.substring(start, paramsNameNumber);
							} else {
								// 每一次拼接字符串并换行
								tempStr = params.substring(start, end) + "\n";
							}
							newParamsName += tempStr;// 最终拼成的字符串
						}

					} else {
						// 将旧标签的值赋给新标签
						newParamsName = params;
					}
					//将最终的字符串返回
					return newParamsName
				},
				textStyle:{
					color:'#000'
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
            name : '金额（万）',
            nameTextStyle:{
                color:'#939393',
                fontSize:10,
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
                textStyle:{
                    color: '#939393',
                    fontSize:10,
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
            name : '工资金额（万）',
			
            nameTextStyle:{
                color:'#939393',
                fontSize:10,
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
                    color: '#939393',
                    fontSize:10,
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
            name:'办公耗材',
            type:'line',
			symbol:'circle',
            itemStyle:{
                normal:{
                    color:'#969afc'
                }
            },
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,25,48]
        },
        {
            name:'固定资产',
            type:'line',
			symbol:'circle',
			itemStyle:{
                normal:{
                    color:'#62da97'
                }
            },
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,5.3,29]
        },
        {
            name:'教师工资',
            type:'line',
            yAxisIndex: 1,
            symbol:'circle',
            itemStyle: {
                normal: {
                    color: '#f4cd56',        
                }
            },
            data:[2.0, 2, 3, 4, 4, 5, 3, 2, 3, 5, 4,2.8,37]
        }
    ]
};
var BRChart = echarts.init(document.getElementById('Broken-line'));
    BRChart.setOption(BRoption); 	
/*集团资产消耗情况折线图*/ 
/*集团运维管理费用状况柱形图*/
cyoption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{b} : {c}万元"
    },
    legend: {
        data: ['2016年']
    },
    grid: {
        left: '3%',
        right: '13%',
		top:'5%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
		name:'金额（万元）',
		nameGap:1,
        axisLabel: {
            interval: 0,
            formatter: '{value}',
        },
		nameTextStyle:{
			color:'#939393',
			fontSize:10,
		},
		max:7,
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
				color: '#939393',
				fontSize:10,
			},
		},
		axisTick: {
			show: false
		},
		splitLine: {
			 show: false,
		},
    }, 
    yAxis: {
        type: 'category',
		name:'校区',
		nameTextStyle:{
			color:'#939393',
			fontSize:11,
		},
		nameGap:1,
		axisLine:{
			show: false
		},
		axisLabel : {
			show:true,
			textStyle:{
				color: '#636363',
				fontSize:10,
			},
		},
		axisTick: {
			show: false
		},
		splitLine: {
			 show: false,
		},
        data:['崇实分校初中部','崇实分校小学部','保利分校','帝景分校初中部','帝景分校小学部','本部高中','本部初中','嘉铭东校欧陆经典','嘉铭西校小学部','嘉铭西校寄宿部','嘉铭西校初中部','嘉铭东校小学部','嘉铭东校初中部']
    },
    series: [{
        name: '金额（万元）',
		nameTextStyle:{
			color:'#939393',
			fontSize:11,
		},
        type: 'bar',
        data: [2.5,3.6,1.8,5.5,3.4,1.5,7,4.3,1.2,2.3,1.4,4.5,3.8],
		itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#62da97','#62da97','#74d3dc','#57c29e','#57c29e','#969afc',
                           '#969afc','#f3cc55','#f3cc55','#f3cc55','#f4565c','#f4565c','#f4565c'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            }
    }]
};
var cyChart = echarts.init(document.getElementById('cylindrical'));
    cyChart.setOption(cyoption); 	
/*集团运维管理费用状况柱形图*/
/*当月集团各校区各年级备课数量情况饼图*/
JMPoption = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
	title: {
		text: '嘉铭东校',
		subtext:'小学部',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		subtextStyle:{
			color:'#636363',
			fontSize:'14',
		},
		bottom:10,
		x:'center',
		
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['10%', '58%'],
			center: ['50%', '40%'],
            color: ['#fff', '#fff', '#fff', '#fff','#fff'],
            label: {
				normal: {
					position: 'inner',
					formatter: '{c}',
					textStyle: {
						color: '#037b3b',
						fontSize: 10
					}
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
                {value:128, name:''},
                {value:147, name:''},
                {value:114, name:''},
                {value:116, name:''},
				{value:84, name:''}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
			center: ['50%', '40%'],
            radius: ['60%', '80%'],center: ['50%', '40%'],
            color: ['#969afc', '#74d3dc', '#5787f4', '#f4575c','#f3cc56'],
            label: {
                normal: {
                    show: false
                },      
            },
            data:[
                {value:128, name:'一年级'},
                {value:147, name:'二年级'},
                {value:114, name:'三年级'},
                {value:116, name:'四年级'},
                {value:84, name:'五年级'}        
            ]
        }
    ]
};
var JMPChart = echarts.init(document.getElementById('Primary'));
    JMPChart.setOption(JMPoption); 
	
JMWoption = {
	tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
	title: {
		text: '嘉铭西校',
		subtext:'小学部',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		subtextStyle:{
			color:'#636363',
			fontSize:'14',
		},
		bottom:10,
		x:'center'
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['10%', '58%'],
			center: ['50%', '40%'],
            color: ['#fff', '#fff', '#fff', '#fff','#fff'],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}',

                textStyle: {
                    color: '#037b3b',
                    fontSize: 10
                }
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
                {value:149, name:''},
                {value:267, name:''},
                {value:158, name:''},
                {value:96, name:''},
				{value:88, name:''}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '80%'],
			center: ['50%', '40%'],
            color: ['#969afc', '#74d3dc', '#5787f4', '#f4575c','#f3cc56'],
            label: {
                normal: {
                    show: false
                },      
            },
            data:[
                {value:149, name:'一年级'},
                {value:267, name:'二年级'},
                {value:158, name:'三年级'},
                {value:96, name:'四年级'},
                {value:88, name:'五年级'}        
            ]
        }
    ]
};
var JMWChart = echarts.init(document.getElementById('JMwest'));
    JMWChart.setOption(JMWoption); 
	
DJPoption = {
	title: {
		text: '帝景分校',
		subtext:'小学部',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		subtextStyle:{
			color:'#636363',
			fontSize:'14',
		},
		bottom:10,
		x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    series: [
        {
            name:'小学',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['10%', '58%'],center: ['50%', '40%'],
            color: ['#fff', '#fff', '#fff', '#fff','#fff'],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}',

                textStyle: {
                    color: '#037b3b',
                    fontSize: 10
                }
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
                {value:167, name:''},
                {value:176, name:''},
                {value:78, name:''},
                {value:137, name:''},
				{value:93, name:''}
            ]
        },
        {
            name:'小学',
            type:'pie',
            radius: ['60%', '80%'],center: ['50%', '40%'],
            color: ['#969afc', '#74d3dc', '#5787f4', '#f4575c','#f3cc56'],
            label: {
                normal: {
                    show: false
                },      
            },
            data:[
                {value:167, name:'一年级'},
                {value:176, name:'二年级'},
                {value:78, name:'三年级'},
                {value:137, name:'四年级'},
                {value:93, name:'五年级'}        
            ]
        }
    ]
};
var DJPChart = echarts.init(document.getElementById('DJPrimary'));
    DJPChart.setOption(DJPoption);

CSPoption = {
	tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
	title: {
		text: '崇实分校',
		subtext:'小学部',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		subtextStyle:{
			color:'#636363',
			fontSize:'14',
		},
		bottom:10,
		x:'center'
    },
   series: [
        {
            name:'小学',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['10%', '58%'],center: ['50%', '40%'],
            color: ['#fff', '#fff', '#fff', '#fff','#fff'],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}',

                textStyle: {
                    color: '#037b3b',
                    fontSize: 10
                }
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
                {value:162, name:''},
                {value:178, name:''},
                {value:215, name:''},
                {value:139, name:''},
				{value:67, name:''}
            ]
        },
        {
            name:'小学',
            type:'pie',
            radius: ['60%', '80%'],center: ['50%', '40%'],
            color: ['#969afc', '#74d3dc', '#5787f4', '#f4575c','#f3cc56'],
            label: {
                normal: {
                    show: false
                },      
            },
            data:[
                {value:162, name:'一年级'},
                {value:178, name:'二年级'},
                {value:215, name:'三年级'},
                {value:139, name:'四年级'},
                {value:67, name:'五年级'}        
            ]
        }
    ]
};
var CSPChart = echarts.init(document.getElementById('CSPrimary'));
    CSPChart.setOption(CSPoption);

JMboption = {
	tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
	title: {
		text: '嘉铭西校',
		subtext:'寄宿部',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		subtextStyle:{
			color:'#636363',
			fontSize:'14',
		},
		bottom:10,
		x:'center'
    },
   series: [
        {
            name:'小学',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['10%', '58%'],center: ['50%', '40%'],
            color: ['#fff', '#fff', '#fff', '#fff','#fff'],
            label: {
            normal: {
                position: 'inner',
                formatter: '{c}',

                textStyle: {
                    color: '#037b3b',
                    fontSize: 10
                }
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
                {value:162, name:''},
                {value:178, name:''},
                {value:215, name:''},
                {value:139, name:''},
				{value:67, name:''}
            ]
        },
        {
            name:'小学',
            type:'pie',
            radius: ['60%', '80%'],center: ['50%', '40%'],
            color: ['#969afc', '#74d3dc', '#5787f4', '#f4575c','#f3cc56'],
            label: {
                normal: {
                    show: false
                },      
            },
            data:[
                {value:162, name:'一年级'},
                {value:178, name:'二年级'},
                {value:215, name:'三年级'},
                {value:139, name:'四年级'},
                {value:67, name:'五年级'}        
            ]
        }
    ]
};
var JMbChart = echarts.init(document.getElementById('JMboard'));
    JMbChart.setOption(JMboption); 	

THISJoption = {
	title: {
		text: '本部初中',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		bottom:10,
		x:'center'
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	color:['#969afc', '#74d3dc', '#5787f4'],
	series : [
		{
			name: '本部初中',
			type: 'pie',
			radius : '55%',
			center: ['50%', '40%'],
			data:[
				{value:310, name:'初一'},
				{value:234, name:'初二'},
				{value:135, name:'初三'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						position:'inside',
						formatter: '{c}' 
					}
				},
				labelLine :{show:true}
			}
		}
	]
};	
var THISJChart = echarts.init(document.getElementById('THJunior'));
    THISJChart.setOption(THISJoption); 		

JMJoption = {
	title: {
		text: '嘉铭东校初中部',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		bottom:10,
		x:'center'
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	color:['#969afc', '#74d3dc', '#5787f4'],
	series : [
		{
			name: '嘉铭东校初中部',
			type: 'pie',
			radius : '55%',
			center: ['50%', '40%'],
			data:[
				{value:310, name:'初一'},
				{value:234, name:'初二'},
				{value:135, name:'初三'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						position:'inside',
						formatter: '{c}' 
					}
				},
				labelLine :{show:true}
			}
		}
	]
};	
var JMJChart = echarts.init(document.getElementById('JMJunior'));
    JMJChart.setOption(JMJoption); 	
JMouluoption = {
	title: {
		text: '嘉铭东校欧陆经典',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		bottom:10,
		x:'center'
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	color:['#969afc', '#74d3dc', '#5787f4'],
	series : [
		{
			name: '嘉铭东校欧陆经典',
			type: 'pie',
			radius : '55%',
			center: ['50%', '40%'],
			data:[
				{value:310, name:'初一'},
				{value:234, name:'初二'},
				{value:135, name:'初三'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						position:'inside',
						formatter: '{c}' 
					}
				},
				labelLine :{show:true}
			}
		}
	]
};	
var JMouluChart = echarts.init(document.getElementById('JMoulu'));
    JMouluChart.setOption(JMouluoption);

DJJoption = {
	title: {
		text: '帝景分校初中部',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		bottom:10,
		x:'center'
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	color:['#969afc', '#74d3dc', '#5787f4'],
	series : [
		{
			name: '帝景分校初中部',
			type: 'pie',
			radius : '55%',
			center: ['50%', '40%'],
			data:[
				{value:310, name:'初一'},
				{value:234, name:'初二'},
				{value:135, name:'初三'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						position:'inside',
						formatter: '{c}' 
					}
				},
				labelLine :{show:true}
			}
		}
	]
};	
var DJJChart = echarts.init(document.getElementById('DJJunior'));
    DJJChart.setOption(DJJoption); 		

BLJoption = {
	title: {
		text: '保利分校',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		bottom:10,
		x:'center'
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	color:['#969afc', '#74d3dc', '#5787f4'],
	series : [
		{
			name: '保利分校',
			type: 'pie',
			radius : '55%',
			center: ['50%', '40%'],
			data:[
				{value:310, name:'初一'},
				{value:234, name:'初二'},
				{value:135, name:'初三'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						position:'inside',
						formatter: '{c}' 
					}
				},
				labelLine :{show:true}
			}
		}
	]
};	
var BLJChart = echarts.init(document.getElementById('BLJunior'));
    BLJChart.setOption(BLJoption); 	
CSJoption = {
	title: {
		text: '崇实分校初中部',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		bottom:10,
		x:'center'
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	color:['#969afc', '#74d3dc', '#5787f4'],
	series : [
		{
			name: '崇实分校初中部',
			type: 'pie',
			radius : '55%',
			center: ['50%', '40%'],
			data:[
				{value:310, name:'初一'},
				{value:234, name:'初二'},
				{value:135, name:'初三'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						position:'inside',
						formatter: '{c}' 
					}
				},
				labelLine :{show:true}
			}
		}
	]
};	
var CSJChart = echarts.init(document.getElementById('CSJunior'));
    CSJChart.setOption(CSJoption); 	 	
TShoption = {
	title: {
		text: '本部高中',
		textStyle:{
			color:'#636363',
			fontSize:'14',
			fontWeight:'normal',
		},
		bottom:10,
		x:'center'
	},
	tooltip : {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	color:['#969afc', '#74d3dc', '#5787f4'],
	series : [
		{
			name: '本部高中',
			type: 'pie',
			radius : '75%',
			center: ['50%', '40%'],
			data:[
				{value:310, name:'初一'},
				{value:234, name:'初二'},
				{value:135, name:'初三'}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			itemStyle: {
				normal: {
					label:{ 
						show: true, 
						position:'inside',
						formatter: '{c}' 
					}
				},
				labelLine :{show:true}
			}
		}
	]
};	
var TShChart = echarts.init(document.getElementById('THIShigh'));
    TShChart.setOption(TShoption);
/*当月集团各校区各年级备课数量情况饼图*/
/*当月集团各校区教科研工作成果情况柱状图*/
GBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GBarChart = echarts.init(document.getElementById('GBar'));
    GBarChart.setOption(GBaroption);
	
GJBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GJBarChart = echarts.init(document.getElementById('GJBar'));
    GJBarChart.setOption(GJBaroption);
GJMBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GJMBarChart = echarts.init(document.getElementById('GJMBar'));
    GJMBarChart.setOption(GJMBaroption);
GJMPBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GJMPBarChart = echarts.init(document.getElementById('GJMPBar'));
    GJMPBarChart.setOption(GJMPBaroption);
GJOBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GJOBarChart = echarts.init(document.getElementById('GJOBar'));
    GJOBarChart.setOption(GJOBaroption);
GJMWBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GJMWBarChart = echarts.init(document.getElementById('GJMWBar'));
    GJMWBarChart.setOption(GJMWBaroption);
GJJMPBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GJJMPBarChart = echarts.init(document.getElementById('GJJMPBar'));
    GJJMPBarChart.setOption(GJJMPBaroption);
GJMJBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GJMJBarChart = echarts.init(document.getElementById('GJMJBar'));
    GJMJBarChart.setOption(GJMJBaroption);
GJBLBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GJBLBarChart = echarts.init(document.getElementById('GJBLBar'));
    GJBLBarChart.setOption(GJBLBaroption);
GJDJBaroption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable:true,
	grid: {
        left: '3%',
        right: '13%',
		top:'10%',
        bottom: 0,
        containLabel: true
    },
    xAxis:[
        {
            type : 'category',
			name:'工作成果',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:1,
            data : ['课题研究','教育教学成果奖','专著','发表论文','获奖论文','课题获奖','比赛获奖','其他获奖','政治获奖','专业荣誉'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#000'
				}
			},
			axisTick: {
                show: false
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'数量',
			nameTextStyle:{
				color:'#939393',
                fontSize:10,
			},
			nameGap:5,
            max:10,
			axisTick: {
                show: false
            },
            axisLabel:{
				show:true,
				formatter: '{value}',
				textStyle:{
					color: '#939393',
					fontSize:10,
				},
			},
        }
    ],
    series : [
        {
            name:'工作成果',
            type:'bar',
            data:[3, 1, 2, 9, 1, 4, 5, 10, 1,0],
			barWidth:15,
            label:{
				normal: {
                    show: true,
					position: 'top',
					textStyle:{
						color:'#7a7a7a',
						fontSize:10,
					}
                }
                
            },
            itemStyle: {
                normal: {
                    color:'#62da97'
                }
            }
        }
    ]
};   
var GJDJBarChart = echarts.init(document.getElementById('GJDJBar'));
    GJDJBarChart.setOption(GJDJBaroption);
/*当月集团各校区教科研工作成果情况柱状图*/