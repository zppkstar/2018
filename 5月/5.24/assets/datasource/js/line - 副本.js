var bar_data = {
    "namelist": ['第一类','第二类','第三类','第四类'],
    "data_line": {
        "第一类": [25,19,8,15,10,12,10],
        "第二类": [20,21,19,20,25,23,21],
        "第三类": [40,34,36,36,32,30,34],
        "第四类": [31,41,35,40,26,52,28]
    }
};
var x_line = ['1月份','2月份','3月份','4月份','5月份','6月份','7月份'];
var colorConsArr_hdfs = ["#ffff00", "#11abec", "#0be457", "#ec1159"];
var option = {
    title: {
        text: '各类学生成绩趋势特征',
        left: 'center',
        textStyle:{
            color: '#fff',
            fontSize: 20,
        },
        padding:10,
        itemGap:10,
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        textStyle:{
            color: '#fff', 
            fontSize: 12,
        },
        bottom:'10px',
    	left:'100px',
    	width:'100%',
    	icon: 'line',
    	itemWidth: 30,
		itemHeight: 10,
        data: []
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: x_line,
        axisLine: {
            lineStyle:{
                color:'#3c4e7b',
                width:1,
                type:'solid',
            },
        },
        //坐标轴刻度标签
        axisLabel: {
            textStyle:{
                color: '#fff',
                fontWeight:'bolder',
                fontSize:12,
            },
        },
        splitLine: {
            lineStyle:{
                color:'#14264d',
                width:1,
                type:'solid',
            },
        },

    }],
    yAxis: {
        type: 'value',
        name: ['排名'],
        nameLocation:'end',
        nameGap:'10',
            nameTextStyle: {
                color: "#fff",
                fontWeight:'bolder',
                fontSize:12,
            },
        min:80,
        max: 0,
        interval: 10,
        axisLine:{
            lineStyle:{
                color:'#4a5d8e',
                width:4,
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
                color:'#12254c',
                width:1,
                type:'solid',
            },
        },
    },
    series: []
};
for (var i = 0; i < hdfs_stack_bar_data["namelist"].length + 1; i++) {
    var namelist = hdfs_stack_bar_data["namelist"];
    var series = [];
    if (i < hdfs_stack_bar_data["namelist"].length) {
        option.series.push({
            name: namelist[i],
            type: 'line',
            data: hdfs_stack_bar_data['dataArr_line'][namelist[i]],
            itemStyle:{
                normal:{
                    color: colorConsArr_hdfs[i],
                    borderWith:0,
                },
            },
            lineStyle: {
                normal: {
                    barBorderRadius: 0,
                    width: 5, //连线粗细
                    color: colorConsArr_hdfs[i] //连线颜色
                }
            },
        });
        option.legend.data.push({
            name: namelist[i],
            icon: "line",
            textStyle: {
                color: colorConsArr_hdfs[i],
            }
        });
    }

};
var catChart = echarts.init(document.getElementById('PolyLineO'));
	catChart.setOption(option);