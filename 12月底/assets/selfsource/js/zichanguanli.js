$(function(){
  /*************近3年集团消耗品同比总投入消耗库存分析***********/
   var kuCunFX01=echarts.init(document.getElementById("ku_cun_fenxi_01"));
  var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];
var configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};
var config = {
    align: 'center',
    verticalAlign: 'middle',
    position: 'top',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: config.rotate,
                align: config.align,
                verticalAlign: config.verticalAlign,
                position: config.position,
                distance: config.distance,
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};
var labelOption = {
    normal: {
        show: true,
        position: config.position,
        distance: config.distance,
        align: config.align,
        verticalAlign: config.verticalAlign,
        rotate: config.rotate,
        formatter: '{c}',
        textStyle:{
          fontSize: 16,
          color:'#000',
        }

    }
};
var kuCunFX01Option = {
    title:{
      show:true,
      text:'近3年集团消耗品同比总投入消耗库存分析',
      textStyle:{
        color:'#424141',
        fontSize:18
      },
      left:'center',
      top:10,
    },
    color: ['#4f81bd', '#e46c0a', '#9bbb59'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['投入(万)', '消耗(万)', '库存(万)'],
        right:'right',
        orient:'vertical',
        top:'middle',
        itemWidth:8,
        itemHeight:7,
        textStyle:{
          fontSize:14,
          color:'#000'
        }
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['2015年', '2016年','2017年']
        }
    ],
    yAxis: [
      {
        type:'value',
        interval:20
      }
    ],
    series: [
        {
            name: '投入(万)',
            type: 'bar',
            barGap: 0,
            barWidth:68,
            label:labelOption,
            data: [100, 124, 160]
        },
        {
            name: '消耗(万)',
            type: 'bar',
            barWidth:68,
            label:labelOption,
            data: [98, 117, 101]
        },
        {
            name: '库存(万)',
            type: 'bar',
            barWidth:68,
            label:labelOption,
            data: [2, 6, 29]
        },
    ]
};
 kuCunFX01.setOption(kuCunFX01Option);
/*************近3年集团消耗品同比总投入消耗库存分析***********/

/*************截止到2017年11月集团各校区消耗品投入占比***********/
var xiaoHao01=echarts.init(document.getElementById("xiao_hao_01"));
var xiaoHao01Option = {
    title : {
        text: '截止到2017年11月集团各校区消耗品投入占比',
        x:'center',
        top:10
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#4572a7','#aa4643','#89a54e', '#71588f','#4198af',  '#db843d', '#93a9cf','#d19392', '#b9cd96'],
    legend: {
        orient: 'vertical',
        right: 'right',
        top:80,
        itemWidth:8,
        itemHeight:7,
        itemGap:15,
        textStyle:{
          fontSize:14,
          color:'#000'
        },
        data: ['本部初中','本部高中','保利分校','崇实初中部','帝景分校','欧陆校区','嘉铭初中部','嘉铭小学部','国际部']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['45%', '55%'],
            data:[
                {value:20,name:'本部初中'},
                {value:10,name:'本部高中'},
                {value:30,name:'保利分校'},
                {value:5,name:'崇实初中部'},
                {value:15,name:'帝景分校'},
                {value:6,name:'欧陆校区'},
                {value:18,name:'嘉铭初中部'},
                {value:50,name:'嘉铭小学部'},
                {value:20,name:'国际部'}
            ],
            label:{
              normal:{
                formatter:'{b|{b}}:{d|{d}}{per|%}',
                rich:{
                    d:{
                        color:'#333'
                    },
                    b:{
                        color:'#333'
                    },
                    per:{
                        color:'#333'
                    }
                    }
                  }
            },
            labelLine:{
              normal:{
                lineStyle:{
                  color:'#000'
                }
              }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        }
    ]
};
xiaoHao01.setOption(xiaoHao01Option);
/*************截止到2017年11月集团各校区消耗品投入占比***********/

/*************截止到2017年11月集团各校区消耗品投入消耗库存分析***********/
var kuCunFX02=echarts.init(document.getElementById("ku_cun_fenxi_02"));
kuCunFX02Option = {
  color:['#4f81bd','#e46c0a','#98b954'],
  title : {
      text: '截止到2017年11月集团各校区消耗品投入消耗库存分析',
      x:'center',
      top:10
  },
  grid:{
    width:400,
    height:210,
    left:35,
    bottom:60
  },
  tooltip: {
       trigger: 'axis',
       axisPointer: {
           type: 'cross',
           crossStyle: {
               color: '#999'
           }
       }
   },
   toolbox: {
     show:false,
       feature: {
           dataView: {show: true, readOnly: false},
           magicType: {show: true, type: ['line', 'bar']},
           restore: {show: true},
           saveAsImage: {show: true}
       }
   },
   legend: {
       data:['库存(万)','消耗(万)','使用率'],
       right:'right',
       orient:'vertical',
       top:'middle',
       itemWidth:25,
       itemHeight:7
   },
   xAxis: [
       {
           type: 'category',
           data: ['本部初中','本部高中','保利分校','崇实初中部','景帝分校','欧陆校区','嘉铭初中部','嘉铭小学部','国际部'],
           axisPointer: {
               type: 'shadow'
           },
           axisLabel: {
             interval:0,
             rotate:40
          }
       }
   ],
   yAxis: [
       {
           type: 'value',
           name: '金额(万)',
           interval:5
       },
       {
           type: 'value',
           name: '使用率',
           maxInterval:1,
           minInterval:0.1,
           interval:0.1
       },

   ],
   series: [
       {
           name:'库存(万)',
           type:'bar',
           stack: 'sum',
           label:{
             normal:{
                show:true,
                position:'inside',
                fontSize:10
             }
           },
           barWidth:21,
           data:[2, 4, 6, 8, 10, 12,14,18,20]
       },
       {
           name:'消耗(万)',
           type:'bar',
           stack: 'sum',
           label:{
             normal:{
                show:true,
                position:'inside',
                fontSize:10
             }
           },
           barWidth:21,
           data:[3,5,7,9,11,13,15,17,19]
       },
       {
           name:'使用率',
           type:'line',
           yAxisIndex: 1,
           symbol:'triangle',
           symbolSize:10,
           lineStyle:{
             normal:{
               color:'#9bbb59',
               width:4
             }
           },
           data:[0.3,0.5,0.7,0.9,0.11,0.13,0.15,0.17,0.19]
       }
   ]
};
kuCunFX02.setOption(kuCunFX02Option);
/*************截止到2017年11月集团各校区消耗品投入消耗库存分析***********/


/*************截止到2017年11月集团各类型消耗品投入占比***********/
var xiaoHao02=echarts.init(document.getElementById("xiao_hao_02"));
var xiaoHao02Option = {
    title : {
        text: '截止到2017年11月集团各校区消耗品投入占比',
        x:'center',
        top:10
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#4572a7','#aa4643','#89a54e', '#71588f','#4198af',  '#db843d', '#93a9cf','#d19392', '#b9cd96'],
    legend: {
        orient: 'vertical',
        right: 'right',
        top:80,
        itemWidth:8,
        itemHeight:7,
        itemGap:15,
        textStyle:{
          fontSize:14,
          color:'#000'
        },
        data: ['键盘','鼠标','数据线','网线','U盘','小音箱','路由器','扩音器']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '70%',
            center: ['45%', '55%'],
            data:[
                {value:20,name:'键盘'},
                {value:10,name:'鼠标'},
                {value:30,name:'数据线'},
                {value:5,name:'网线'},
                {value:15,name:'U盘'},
                {value:6,name:'小音箱'},
                {value:18,name:'路由器'},
                {value:50,name:'扩音器'},
            ],
            label:{
              normal:{
                formatter:'{b|{b}}:{d|{d}}{per|%}',
                rich:{
                    d:{
                        color:'#333'
                    },
                    b:{
                        color:'#333'
                    },
                    per:{
                        color:'#333'
                    }
                    }
                  }

            },
            labelLine:{
              normal:{
                lineStyle:{
                  color:'#000'
                }
              }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        }
    ]
};
xiaoHao02.setOption(xiaoHao02Option);
/*************截止到2017年11月集团各校区消耗品投入占比***********/

/*************截止到2017年11月集团各校区消耗品投入消耗库存分析***********/
var kuCunFX03=echarts.init(document.getElementById("ku_cun_fenxi_03"));
kuCunFX03Option = {
  color:['#4f81bd','#e46c0a','#98b954'],
  title : {
      text: '截止到2017年11月集团各类型消耗品投入消耗库存分析',
      x:'center',
      top:10
  },
  grid:{
    width:400,
    height:210,
    left:35,
    bottom:60
  },
  tooltip: {
       trigger: 'axis',
       axisPointer: {
           type: 'cross',
           crossStyle: {
               color: '#999'
           }
       }
   },
   toolbox: {
     show:false,
       feature: {
           dataView: {show: true, readOnly: false},
           magicType: {show: true, type: ['line', 'bar']},
           restore: {show: true},
           saveAsImage: {show: true}
       }
   },
   legend: {
       data:['库存(万)','消耗(万)','使用率'],
       right:'right',
       orient:'vertical',
       top:'middle',
       itemWidth:25,
       itemHeight:7
   },
   xAxis: [
       {
           type: 'category',
           data: ['键盘','鼠标','数据线','网线','U盘','小音箱','路由器','扩音器'],
           axisPointer: {
               type: 'shadow'
           },
           axisLabel: {
             interval:0
          }
       }
   ],
   yAxis: [
       {
           type: 'value',
           name: '金额(万)',
           interval:0.5
       },
       {
           type: 'value',
           name: '使用率',
           maxInterval:1,
           minInterval:0.1,
           interval:0.1
       },

   ],
   series: [
       {
           name:'库存(万)',
           type:'bar',
           stack: 'sum',
           label:{
             normal:{
                show:true,
                position:'inside',
                fontSize:10
             }
           },
           barWidth:21,
           data:[1.8, 1.3, 1.43, 0.98, 1.02, 1.01,0.89,1.32]
       },
       {
           name:'消耗(万)',
           type:'bar',
           stack: 'sum',
           label:{
             normal:{
                show:true,
                position:'inside',
                fontSize:10
             }
           },
           barWidth:21,
           data:[0.5,0.6,0.37,0.52,0.22,0.21,0.11,0.12]
       },
       {
           name:'使用率',
           type:'line',
           yAxisIndex: 1,
           symbol:'triangle',
           symbolSize:10,
           lineStyle:{
             normal:{
               color:'#9bbb59',
               width:4
             }
           },
           data:[0.3,0.5,0.7,0.9,0.11,0.13,0.15,0.17]
       }
   ]
};
kuCunFX03.setOption(kuCunFX03Option);
/*************截止到2017年11月集团各校区消耗品投入消耗库存分析***********/
});
