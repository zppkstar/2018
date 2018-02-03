// 随机0-1000的数
function randomData() {
    return Math.round(Math.random()*1000);
}
// legend内容
var legendData=['地区'];
// legend自定义颜色 不设置有默认色
var legendColor=['#004098','#00459c','#007cc8','#0069b8'];
// 映射颜色  不设置有默认色
var visColor=["#008cd6","#007cc8"];
// seriesData Array [{name:'',type:'map',mapType:'china',
//           label: { normal: {show: true},emphasis: { show: true}},data:[{name:'',value:''},...]},{...}]
var seriseData=[
        {
            name: '地区',
            type: 'map',
            mapType: 'china',
            symbolSize: 8,
			symbol: 'circle',
			label: {
			   normal: {
					formatter: '{b}',
					position: 'right',
					show:true,
					textStyle: {
						 fontSize:12,
						 color: '#fbfcfc',
					 },
			   },
			   emphasis: {
				   show: true
			   }
			},
			itemStyle: {
			   normal: {
					color: '#fbfcfc',
					borderColor: '#0085b2',
			   }
			},
            data:[
                {name: '北京',value: randomData() },
                {name: '天津',value: randomData() },
                {name: '上海',value: randomData() },
                {name: '重庆',value: randomData() },
                {name: '河北',value: randomData() },
                {name: '河南',value: randomData() },
                {name: '云南',value: randomData() },
                {name: '辽宁',value: randomData() },
                {name: '黑龙江',value: randomData() },
                {name: '湖南',value: randomData() },
                {name: '安徽',value: randomData() },
                {name: '山东',value: randomData() },
                {name: '新疆',value: randomData() },
                {name: '江苏',value: randomData() },
                {name: '浙江',value: randomData() },
                {name: '江西',value: randomData() },
                {name: '湖北',value: randomData() },
                {name: '广西',value: randomData() },
                {name: '甘肃',value: randomData() },
                {name: '山西',value: randomData() },
                {name: '内蒙古',value: randomData() },
                {name: '陕西',value: randomData() },
                {name: '吉林',value: randomData() },
                {name: '福建',value: randomData() },
                {name: '贵州',value: randomData() },
                {name: '广东',value: randomData() },
                {name: '青海',value: randomData() },
                {name: '西藏',value: randomData() },
                {name: '四川',value: randomData() },
                {name: '宁夏',value: randomData() },
                {name: '海南',value: randomData() },
                {name: '台湾',value: randomData() },
                {name: '香港',value: randomData() },
                {name: '澳门',value: randomData() }
            ]
        }
       
    ]
    
    
option = {
    title: {
        text: '中国评估师协会数据分析总览',
		textStyle:{
			color:'#f9fbfc',
			fontSize:30,
			lineHeight:30,
		},
        subtext: '目前评估机构3568家   评估师共计32987人  净收入16277万元',
		subtextStyle:{
			color:'#f9fbfc',
			fontSize:14,
			lineHeight:30,
		},
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: '0%',
		left:'0',
        bottom:'3%',
		show:false,
        data:legendData
    },
    color:legendColor,
	
    visualMap: {
        min: 0,
        max: 2500,
		show:false,
        left: 'left',
        bottom: '3%',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true,
        color:visColor
    },
    series: seriseData
};
                    
 var MAPChart = echarts.init(document.getElementById('MAP'));
	MAPChart.setOption(option);