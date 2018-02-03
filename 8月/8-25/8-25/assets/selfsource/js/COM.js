Goption = {
    title : {
        text: '各地区评估机构综合排名',
        textStyle:{
            color:'#fefeff',
            fontSize:24,
			fontWeight:'normal'
        },
		left: 'center',
		top:'2%',
    },
    tooltip : {
        trigger: 'axis'
    },
	grid: {
        left: '0%',
        right: '0%',
        bottom:'3%',
        containLabel: true
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
			data : ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','大连','宁波市财政局','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','深圳','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#fefeff',
					fontSize:10,
				}
			},
			axisLine: {
				lineStyle: {
					color:'#154c87',
                    width:2,
                    type:'solid',
				},
			},
			axisTick: {
                show: false
            },
			splitLine: {
                show: true,
                lineStyle:{
                    color:'#072446',
                    width:1,
                    type:'solid',
                },
            },
            
        }
    ],
    yAxis : [
        {
            type : 'value',
			axisLine: {
				lineStyle: {
					color:'#154c87',
                    width:2,
                    type:'solid',
				},
			},
			axisLabel:{
				textStyle:{
					color:'#fefeff',
					fontSize:10,
				}
			},
			splitLine: {
                show: true,
                lineStyle:{
                    color:'#072446',
                    width:1,
                    type:'solid',
                },
            },
			axisTick: {
                show: false
            },
        }
    ],
    series : [
        {
            name:'地区',
            type:'bar',
            data:[21.0, 42.9, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 162.4, 32.3,2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 66.4, 73.3,92.0, 64.9, 87.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0,48],
			barWidth: 12,
			itemStyle: {
				normal: {
					color: function(params) {
						// build a color map as your need.
						var colorList = [
						  '#fa0201','#7f7f01','#fafb03','#028002','#04ef17',
						   '#048188','#02fcfb','#060f88','#0202f9','#780f88',
						   '#fa02fa','#969897','#750f19','#ba0406','#e4ef19',
						   '#fa0201','#d19204','#07ab06','#6ff56f','#00fc01',
						   '#00817f','#03c4c1','#02fcfb','#0308b9','#6065f2',
						   '#81027f','#e104dc','#f797f5','#fa0201','#f17b7a',
						   '#f8843b','#0ba523','#00f902','#018181','#07eaf3'
						];
						return colorList[params.dataIndex]
					}
				}
			}
        }
    ]
};   
var myChart = echarts.init(document.getElementById('COMbar'));
    myChart.setOption(Goption);  

Moption = {
    title : {
        text: '北京评估机构行业分析',
        textStyle:{
            color:'#fefeff',
            fontSize:18,
			fontWeight:'normal'
        },
		left: 'center'
    },
    tooltip : {
        trigger: 'axis'
    },
	grid: {
        left: '0%',
        right: '0%',
        bottom:'3%',
        containLabel: true
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
			data : ['证券资格','房产评估','土地评估','基建审计','土地资格','房地产资格','其他'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#fefeff',
					fontSize:10,
				}
			},
			axisLine: {
				lineStyle: {
					color:'#154c87',
                    width:2,
                    type:'solid',
				},
			},
			axisTick: {
                show: false
            },
			splitLine: {
                show: false
				  
         1111111000011011111111111111111111010101010101   },
            
        }
    ],
    yAxis : [
        {
            type : 'value',
			axisLine: {
				lineStyle: {
					color:'#154c87',
                    width:2,
                    type:'solid',
				},
			},
			axisLabel:{
				formatter: '{value}M',
				textStyle:{
					color:'#fefeff',
					fontSize:10,
				}
			},
			splitLine: {
                show: false
            },
			axisTick: {
                show: false
            },
        }
    ],
    series : [
        {
            name:'分类',
            type:'bar',
            data:[21.0, 42.9, 23.2, 25.6, 76.7, 135.6,48],
			barWidth: 24,
			itemStyle: {
				normal: {
					color: function(params) {
						// build a color map as your need.
						var colorList = [
						  '#267ed8'
						];
						return colorList[params.dataIndex]
					}
				}
			}
        }
    ]
};   
var myChart = echarts.init(document.getElementById('MLbar'));
    myChart.setOption(Moption);  

MRoption = {
    title : {
        text: '山东评估机构行业分析',
        textStyle:{
            color:'#fefeff',
            fontSize:18,
			fontWeight:'normal'
        },
		left: 'center'
    },
    tooltip : {
        trigger: 'axis'
    },
	grid: {
        left: '0%',
        right: '0%',
        bottom:'3%',
        containLabel: true
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
			data : ['证券资格','房产评估','土地评估','基建审计','土地资格','房地产资格','其他'],
			axisLabel:{
				formatter:function(value){
					var sepCount = 1;//每几个字符分隔
					return value.replace(/(\S{1})(?=[^$])/g, "$1\n")
				},
				textStyle:{
					color:'#fefeff',
					fontSize:10,
				}
			},
			axisLine: {
				lineStyle: {
					color:'#154c87',
                    width:2,
                    type:'solid',
				},
			},
			axisTick: {
                show: false
            },
			splitLine: {
                show: false
            },
            
        }
    ],
    yAxis : [
        {
            type : 'value',
			axisLine: {
				lineStyle: {
					color:'#154c87',
                    width:2,
                    type:'solid',
				},
			},
			axisLabel:{
				formatter: '{value}M',
				textStyle:{
					color:'#fefeff',
					fontSize:10,
				}
			},
			splitLine: {
                show: false
            },
			axisTick: {
                show: false
            },
        }
    ],
    series : [
        {
            name:'分类',
            type:'bar',
            data:[21.0, 42.9, 23.2, 25.6, 76.7, 135.6,48],
			barWidth: 24,
			itemStyle: {
				normal: {
					color: function(params) {
						// build a color map as your need.
						var colorList = [
						  '#267ed8'
						];
						return colorList[params.dataIndex]
					}
				}
			}
        }
    ]
};   
var myChart = echarts.init(document.getElementById('MRbar'));
    myChart.setOption(MRoption);  

