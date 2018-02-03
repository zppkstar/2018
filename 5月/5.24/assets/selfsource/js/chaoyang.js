var dataList = [{
		"ID": "01",
		"school": "嘉铭东校",
		"chuzhong": {
			"tot": 1000,
			"sdt": 500,
			"tea": 500
		},
		"xiaoxue": {
			"tot": 9000,
			"sdt": 400,
			"tea": 500
		}
	},
	{
		"ID": "02",
		"school": "嘉铭西校初中部",
		"chuzhong": {
			"tot": 1000,
			"sdt": 500,
			"tea": 500
		},
		"xiaoxue": {
			"tot": 9000,
			"sdt": 400,
			"tea": 500
		}
	},
	{
		"ID": "03",
		"school": "嘉铭西校小学部",
		"chuzhong": {
			"tot": 1000,
			"sdt": 500,
			"tea": 500
		},
		"xiaoxue": {
			"tot": 9000,
			"sdt": 400,
			"tea": 500
		}
	},
	{
		"ID": "04",
		"school": "嘉铭西校寄宿部",
		"chuzhong": {
			"tot": 1000,
			"sdt": 500,
			"tea": 500
		},
		"xiaoxue": {
			"tot": 9000,
			"sdt": 400,
			"tea": 500
		}
	},
	{
		"ID": "05",
		"school": "本部高中",
		"chuzhong": {
			"tot": 1000,
			"sdt": 500,
			"tea": 500
		},
		"xiaoxue": {
			"tot": 9000,
			"sdt": 400,
			"tea": 500
		}
	},
	{
		"ID": "06",
		"school": "本部初中",
		"chuzhong": {
			"tot": 1000,
			"sdt": 500,
			"tea": 500
		},
		"xiaoxue": {
			"tot": 9000,
			"sdt": 400,
			"tea": 500
		}
	},
	{
		"ID": "07",
		"school": "帝景分校",
		"chuzhong": {
			"tot": 1000,
			"sdt": 500,
			"tea": 500
		},
		"xiaoxue": {
			"tot": 900,
			"sdt": 400,
			"tea": 500
		}
	},
	{
		"ID": "08",
		"school": "崇实分校初中部",
		"chuzhong": {
			"tot": 1000,
			"sdt": 500,
			"tea": 500
		},
		"xiaoxue": {
			"tot": 9000,
			"sdt": 400,
			"tea": 500
		}
	},
	{
		"ID": "09",
		"school": "崇实分校小学部",
		"chuzhong": {
			"tot": 1000,
			"sdt": 500,
			"tea": 500
		},
		"xiaoxue": {
			"tot": 900,
			"sdt": 400,
			"tea": 500
		}
	},
	{
		"ID": "10",
		"school": "保利分校",
		"chuzhong": {
			"tot": 1000,
			"sdt": 523,
			"tea": 450
		},
		"xiaoxue": {
			"tot": 900,
			"sdt": 409,
			"tea": 402
		}
	},
	{
		"ID": "11",
		"school": "嘉铭西校区",
		"chuzhong": {
			"tot": 1000,
			"sdt": 523,
			"tea": 450
		},
		"xiaoxue": {
			"tot": 900,
			"sdt": 409,
			"tea": 402
		}
	}
];
var yData = ["", "其他", "三等奖", "二等奖", "一等奖"];
var xData = ["", "国家级", "省级", "区县级", "校级"];
var c1Data = [
	[1, 4, 56],
	[2, 4, 78],
	[3, 4, 109],
	[4, 4, 130]
]; /*一等奖*/
var c2Data = [
	[1, 3, 60],
	[2, 3, 94],
	[3, 3, 119],
	[4, 3, 135]
]; /*二等奖*/
var c3Data = [
	[1, 2, 68],
	[2, 2, 112],
	[3, 2, 125],
	[4, 2, 146]
]; /*三等奖*/
var coData = [
	[1, 1, 76],
	[2, 1, 120],
	[3, 1, 130],
	[4, 1, 156]
]; /*其他*/
var index = -1;
var timer;
var catChart;
var couChart;
var pieChart;
var tainerChart;
var maChart;

$(document).ready(function() {
	var cvs = document.getElementById("cvs");
	cvs.width = $("#cover").width();
	cvs.height = $("#cover").height();
	/*画线*/
	function divHover(x, y) {
		var context = cvs.getContext("2d");
		context.clearRect(0, 0, cvs.width, cvs.height)
		context.beginPath();
		context.lineJoin = "round";
		context.lineCap = "round";
		context.lineWidth = 1; //设置线宽
		context.strokeStyle = 'rgb(255,255,255)'; //设置连线颜色
		context.moveTo(x, y);
		context.lineTo(x + 40, y);
		context.lineTo(x + 60, y - 30);
		context.stroke();
	};
	/*鼠标划过*/
	$(document).on('mouseenter', '.campus-distribution a', function() {
		clearInterval(timer);
		$(this).trigger("mouseMove");
	});
	$(document).on('mouseleave', '.campus-distribution a', function() {
		settime();
	});
	$(document).on('mouseMove', '.campus-distribution a', function() {
		console.log($("#cover").offset().left);
		console.log($("#cover").offset().top);
		console.log("------------------------")
		console.log($(this).offset().left);
		console.log($(this).offset().top);
		var x = $(this).offset().left - $("#cover").offset().left+6;
		var y = $(this).offset().top - $("#cover").offset().top+6;
		$(".campus-distribution a").css("background", "#DCDCDC");
		$(".campus-distribution a").siblings().css("border-color", "#C0C0C0");
		$(this).siblings().css("border-color", "#FFCC22");
		$(this).css("background", "#FFBB00");
		divHover(x, y);
		$("#msgSchool").css({
			"top": y - 112 - 15,
			"left": x + 60,
			"display": "block"
		});
		index = $('.campus-distribution a').index($(this));
		$("#msgSchool").children(".sch").children().text(dataList[index].school);
		/*初中*/
		$("#msgSchool .chuzhong").find(".sum").text(dataList[index].chuzhong.tot);
		$("#msgSchool .chuzhong").find(".sdt").text(dataList[index].chuzhong.sdt);
		$("#msgSchool .chuzhong").find(".tea").text(dataList[index].chuzhong.tea);
		/*小学*/
		$("#msgSchool .xiaoxue").find(".sum").text(dataList[index].xiaoxue.tot);
		$("#msgSchool .xiaoxue").find(".sdt").text(dataList[index].xiaoxue.sdt);
		$("#msgSchool .xiaoxue").find(".tea").text(dataList[index].xiaoxue.tea);

	});
	/*自动轮播学校*/
	settime();
	function settime() {
		timer = setInterval(function timeMove() {
			var aList = $("a.center");
			index++;
			if(index >= aList.length) {
				index = 0;
			}
			$(aList[index]).trigger("mouseMove");
			//console.log(dataList[index]);
		}, 3000);
	}
	/*右下散泡图*/
	OPcategory = {
		grid: {
			top: "20%",
			left: "15%"
		},
		xAxis: {
			type: 'category',
			data: xData,
			boundaryGap: true,
			axisLine: {
				show: true,
				lineStyle: {
					color: "#485D7C",
					opacity: 0.7
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "#eee"
				}
			}
		},
		yAxis: {
			type: 'category',
			data: yData,
			boundaryGap: true,
			splitLine: {
				show: false,
				lineStyle: {
					color: '#485D7C',
					type: 'dashed'
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#485D7C",
					opacity: 0.7
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: "#eee"
				}
			}
		},
		series: [{
				name: '一等奖',
				type: 'scatter',
				large: true,
				symbolSize: 3,
				itemStyle: {
					normal: {
						/*color: "#E3D570"*/
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#E3D570' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#E5DFAD' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				label: {
					normal: {
						show: true,
						formatter: function(param) {
							return param.data[2];
						},
						position: 'inside',
						textStyle: {
							color: "#eee",
						}
					}
				},
				symbolSize: function(val) {
					return val[2] * 0.5;
				},

				data: c1Data
			},
			{
				name: '二等奖',
				type: 'scatter',
				large: true,
				symbolSize: 3,
				itemStyle: {
					normal: {
						/*color: "#4F83E9"*/
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#4F83E9' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#98AFE5' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				label: {
					normal: {
						show: true,
						formatter: function(param) {
							return param.data[2];
						},
						position: 'inside',
						textStyle: {
							color: "#eee",
						}
					}
				},
				symbolSize: function(val) {
					return val[2] * 0.5;
				},
				data: c2Data
			},
			{
				name: '三等奖',
				type: 'scatter',
				large: true,
				symbolSize: 3,
				itemStyle: {
					normal: {
						/*color: "#13CECF"*/
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#13CECF' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#5FE5E8' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				label: {
					normal: {
						show: true,
						formatter: function(param) {
							return param.data[2];
						},
						position: 'inside',
						textStyle: {
							color: "#eee",
						}
					}
				},
				symbolSize: function(val) {
					return val[2] * 0.5;
				},
				data: c3Data
			},
			{
				name: '其他',
				type: 'scatter',
				large: true,
				symbolSize: 3,
				itemStyle: {
					normal: {
						/*color: "#3DC76C"*/
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#3DC76C' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#A8DBC8' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				label: {
					normal: {
						show: true,
						formatter: function(param) {
							return param.data[2];
						},
						position: 'inside',
						textStyle: {
							color: "#eee",
						}
					}
				},
				symbolSize: function(val) {
					return val[2] * 0.5;
				},
				data: coData
			}
		]
	};
	var catChart = echarts.init(document.getElementById('category'));
	catChart.setOption(OPcategory);
	/*右下课程数量*/
	var zData = [24, 45, 66, 80]; /*主持*/
	var cData = [17, 32, 73, 92]; /*参与*/
	OPcourses = {
		legend: {
			textStyle: {
				color: "#eee"
			},
			icon: 'square',
			top: "5%",
			right: 0,
			data: ['主持', '参与']

		},
		xAxis: {
			type: 'category',
			boundaryGap: true,
			axisTick: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#485D7C",
				}
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: "#eee"
				}
			},
			data: ['国家级', '市级', '区级', '校级']
		},
		yAxis: {
			type: 'value',
			name: '课题数量',
			nameTextStyle: {
				color: "#eee"
			},
			min: 0,
			max: 100,
			splitLine: {
				show: true,
				lineStyle: {
					color: '#1C2C4F',
					type: 'solid'
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#485D7C"
				}
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: "#eee"
				}
			},
			axisTick: {
				show: false
			},
			splitNumber: 4,
			interval: 25
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c}',
			position: 'top',
			backgroundColor:'#021533'
		},
		series: [{
				name: '主持',
				type: 'line',
				symbol: 'circle',
				symbolSize: 10,
				itemStyle: {
					normal: {
						color: '#31DAE4'
					}
				},
				lineStyle: {
					normal: {
						color: '#31DAE4'
					}
				},
				areaStyle: {
					normal: {
						color: '#2EA0C0'
					}
				},
				data: zData
			},
			{
				name: '参与',
				type: 'line',
				symbol: 'circle',
				symbolSize: 10,
				itemStyle: {
					normal: {
						color: "#549DF9", // 会设置点和线的颜色，所以需要下面定制 line
					}
				},
				lineStyle: {
					normal: {
						color: '#549DF9'
					}
				},
				areaStyle: {
					normal: {
						color: '#255088'
					}
				},
				data: cData
			}
		]

	};
	var couChart = echarts.init(document.getElementById('courses'));
	couChart.setOption(OPcourses);

	/*右上名師*/
	var pieChart = echarts.init(document.getElementById('pie-chart'));
        var pieoption = {
            title: {
                text: '陈经纶',
                subtext: 'chenjinglun',
                x: 'center',
                y: 'center',
                textStyle: {
                    color: "#ffffff",
                    fontSize: 28,
                    fontWeight: 'normal'
                },
                subtextStyle: {
                    color: "#ffffff",
                    fontSize: 14
                },
                top: 115
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            color: ['#ffff00', '#f79727', '#0ee359', "#11ecc0","#11abec","#ec1159"],
            textStyle: {
                color: "#ffffff"
            },
            series: [{
                name: '',
                type: 'pie',
                radius: ['40%', '60%'], 
                data: [{
                    value: 202,
                    name: '市骨干教师202人'
                }, {
                    value: 320,
                    name: '区优秀青年教师320人'
                }, {
                    value: 380,
                    name: '区学科带头人380人'
                }, {
                    value: 390,
                    name: '区骨干教师390人'
                }, {
                    value: 262,
                    name: '市学科带头人'
                }, {
                    value: 460,
                    name: '校级骨干教师460人'
                }, ],
                rotate: -10
            }, ]
        };
        pieChart.setOption(pieoption);
    /*右上教師*/
    var tainerChart = echarts.init(document.getElementById('container2'));
        var taineroption = {
            title: {
                text: '陈经纶',
                subtext: 'chenjinglun',
                x: 'center',
                y: 'center',
                textStyle: {
                    color: "#ffffff",
                    fontSize: 28,
                    fontWeight: 'normal'
                },
                subtextStyle: {
                    color: "#ffffff",
                    fontSize: 14
                },
                top: 115
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            color: ['#33659e', '#ffff00', '#f79727', "#0ee359"],
            textStyle: {
                color: "#ffffff"
            },
            series: [{
                name: '',
                type: 'pie',
                radius: ['40%', '60%'],
                data: [{
                    value: 10,
                    name: '区班主任带头人',
                }, {
                    value: 18,
                    name: '区骨干班主任'
                }, {
                    value: 67,
                    name: '区优秀青年教师班主任'
                }, {
                    value: 5,
                    name: '市紫禁杯优秀班主任'
                }, ],
                rotate: -10
            }, ]
        };
        tainerChart.setOption(taineroption);
       /*左下優秀及格率*/
       var maChart = echarts.init(document.getElementById('main'));
       var maoption = {

    tooltip: {
			trigger: 'item',
			position: 'top',
			formatter: '{a}<br/>{b} : {c}%',
			backgroundColor: '#021533'
		},
    legend: {
			show: true,
			textStyle: {
				color: "#eee"
			},
			icon: 'square',
			top: "5%",
			right: 0,
			itemWidth: 14,
			itemHeight: 10,
			data: ['及格率', '优秀率']
		},
    /*grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },*/
    /*toolbox: {
        feature: {
            saveAsImage: {}
        }
    },*/
    xAxis: {
        type: 'category',
		 nameTextStyle: {
				color: "#eee"
			},
		axisLine: {
				show: true,
				lineStyle: {
					color: "#485D7C",
				}
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: "#eee"
				}
			},
        boundaryGap: true,
        data: ['2013','2014','2015','2016']
    },
    yAxis: {
			type: 'value',
			name: ['百分比'],
			nameTextStyle: {
				color: "#eee"
			},
			min: 0,
			max: 100,
			splitNumber: 5,
			interval: 20,
			axisLabel: {
				show: true,
				textStyle: {
					color: "#eee"
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#1C2C4F',
					type: 'solid',
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#485D7C",
				}
			},
		},
    series: [
        {
            name:'优秀率',
			lineStyle:{
				normal:{
					color:'#eb2e33',
					width:2,
				},
				emphasis:{
					show:true,
				},
			},
			symbol: 'circle',
				symbolSize: 10,
				itemStyle: {
					normal: {
						color: "#eb2e33", // 会设置点和线的颜色，所以需要下面定制 line
					}
				},
			itemStyle: {
                normal: {
                    color: '#eb2e33',
					background:'#eb2e33',
					width:10,
                    shadowBlur: 20,
                    shadowColor: '#b36b6b'
                }
            },
			label: {
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}%'
					}
				},
            type:'line',
            //stack: '总量',
            data:[18, 22, 28, 38]
        },
        {
            name:'及格率',
			lineStyle:{
			normal:{
				color:'#3cbcff',
			}
			},
			label: {
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}%'
					}
				},
			symbol: 'circle',
				symbolSize: 10,
				itemStyle: {
					normal: {
						color: "#3cbcff", // 会设置点和线的颜色，所以需要下面定制 line
					}
				},
			itemStyle: {
                normal: {
                    color: '#3cbcff',
					background:'#3cbcff',
					width:10,
                    shadowBlur: 20,
                    shadowColor: '#5cb1cd'
                }
            },
            type:'line',
            //stack: '总量',
            data:[80,85,89,96]
        }
    ]
        };
        // 使用刚指定的配置项和数据显示图表。
        maChart.setOption(maoption);
		
		/*左侧高中切换*/
		 var magzChart = echarts.init(document.getElementById('maingz'));
       var magzoption = {

    tooltip: {
			trigger: 'item',
			position: 'top',
			formatter: '{a}<br/>{b} : {c}%',
			backgroundColor: '#021533'
		},
    legend: {
			show: true,
			textStyle: {
				color: "#eee"
			},
			icon: 'square',
			bottom: -7,
			left: 22,
			itemGap: 3,
			itemWidth: 12,
			itemHeight: 7,
			orient:'vertical',
			data: ['重点','一本', '二本']
		},
    /*grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },*/
    /*toolbox: {
        feature: {
            saveAsImage: {}
        }
    },*/
    xAxis: {
        type: 'category',
		 nameTextStyle: {
				color: "#eee"
			},
		axisLine: {
				show: true,
				lineStyle: {
					color: "#485D7C",
				}
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: "#eee"
				}
			},
        boundaryGap: true,
        data: ['2013','2014','2015','2016']
    },
    yAxis: {
			type: 'value',
			name: ['百分比'],
			nameTextStyle: {
				color: "#eee"
			},
			min: 0,
			max: 100,
			splitNumber: 5,
			interval: 20,
			axisLabel: {
				show: true,
				textStyle: {
					color: "#eee"
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#1C2C4F',
					type: 'solid',
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: "#485D7C",
				}
			},
		},
    series: [
        {
            name:'重点',
			lineStyle:{
				normal:{
					color:'#eb2e33',
					width:2,
				},
				emphasis:{
					show:true,
				},
			},
			symbol: 'circle',
				symbolSize: 10,
				itemStyle: {
					normal: {
						color: "#eb2e33", // 会设置点和线的颜色，所以需要下面定制 line
					}
				},
			itemStyle: {
                normal: {
                    color: '#eb2e33',
					background:'#eb2e33',
					width:10,
                    shadowBlur: 20,
                    shadowColor: '#b36b6b'
                }
            },
			label: {
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}%'
					}
				},
            type:'line',
            //stack: '总量',
            data:[18, 22, 28, 38]
        },
        {
            name:'一本',
			lineStyle:{
			normal:{
				color:'#3cbcff',
			}
			},
			label: {
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}%'
					}
				},
			symbol: 'circle',
				symbolSize: 10,
				itemStyle: {
					normal: {
						color: "#3cbcff", // 会设置点和线的颜色，所以需要下面定制 line
					}
				},
			itemStyle: {
				normal: {
					color: '#3cbcff',
					background:'#3cbcff',
					width:10,
					shadowBlur: 20,
					shadowColor: '#5cb1cd'
				}
			},
            type:'line',
            //stack: '总量',
            data:[80,85,89,96]
        },
		{
            name:'二本',
			lineStyle:{
			normal:{
				color:'#30dae5',
			}
			},
			label: {
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}%'
					}
				},
			symbol: 'circle',
				symbolSize: 10,
				itemStyle: {
					normal: {
						color: "#30dae5", // 会设置点和线的颜色，所以需要下面定制 line
					}
				},
			itemStyle: {
				normal: {
					color: '#30dae5',
					background:'#30dae5',
					width:10,
					shadowBlur: 20,
					shadowColor: '#3edae5',
					opacity:1
				}
			},
            type:'line',
            //stack: '总量',
            data:[72,64,50,43]
        }
    ]
        };
        // 使用刚指定的配置项和数据显示图表。
        magzChart.setOption(magzoption);
		
		/*右侧标题切换*/
	/* $('li a').on('click', function() {
		switch ($(this).attr('id')){
			case 'couChart':
				setTimeout(function(){
					couChart.resize();	
				},1000);
				break;
			case 'tainerChart':
				setTimeout(function(){
					tainerChart.resize();	
				},1000);
			default:
				break;
		}
		
	}) */
});