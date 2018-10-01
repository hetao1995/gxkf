import React  from 'react';
import echarts from 'echarts';
import styles from "./zxt.less";


export default class TablesChart extends  React.Component{
  componentDidMount(){
    var data_in = [
        5,6,12,15,22,14,13
    ];

    var fiveMinutes = 60 * 1000 * 60 * 24;

    const __date=new Date();
    const currentDate={
      year:__date.getFullYear(),
      month:__date.getMonth()+1,
      day:__date.getDate()-1,
      hours:__date.getHours(),
      minutes:__date.getMinutes(),
      seconds:__date.getSeconds()
    }
    var timestr = `${currentDate.year}/${currentDate.month}/${currentDate.day} ${currentDate.hours}:${currentDate.minutes}:${currentDate.seconds}`;

    var startTime = +new Date(timestr)-fiveMinutes*7;

    //把new Date出来的时间格式转换为data123中的日期格式
    function riqigeshi(now){
        return now.toLocaleDateString() + ' ' + now.getHours() + now.toLocaleTimeString().substr(-6,6)
    }

    //用来返回data123一样的数据格式
    function chartData(i,data,now) {
        return {
            value: [
                riqigeshi(now),
                data[i],
            ]
        }
    }

    //把原数据改成data123一样的格式
    function changeData(datain) {
        var liuru = [];
        for (var i = 0; i < 7; i++) {
            startTime = new Date(+startTime + fiveMinutes);
            liuru.push(chartData(i,datain,startTime));
        }
        return liuru;
    }
    var liuru = changeData(data_in);

    var chart = echarts.init(document.getElementById("zxt"));
    var option = {
        grid:{
            x:'3.6%',
            y:'5%',
            x2:'2.4%',
            y2:'12%',
        },
        xAxis:{
            type:'time',
            splitLine: {
                show: false
            },
            axisTick:{
                 show:false
             },
             axisLine:{
               lineStyle:{
                 opacity: 0.1,
                 color:"#FFFFFF"
               }
             },
            splitNumber:7
        },
        yAxis:{
          show:false,
            type:'value',
            axisLabel:{
                formatter:'{value} G'       //给Y轴上的刻度加上单位
            },
        },
        dataZoom: [
            {
                type: 'slider',//数据滑块
                start:0,
                show:false,
                minSpan:8,    //5min
                // minSpan:16,   //10min
                // minSpan:24,   //15min
                // minSpan:50,   //30min
                dataBackground:{
                    lineStyle:{
                        color:'#95BC2F'
                    },
                    areaStyle:{
                        color:'#95BC2F',
                        opacity:1,
                    }
                },
                // fillerColor:'rgba(255,255,255,.6)'
            },
            {
                type:'inside'//使鼠标在图表中时滚轮可用
            }
        ],
        tooltip:{
            trigger: 'axis',
            formatter : function(params) {
                var result = params[0].value[0];
                params.forEach(function(item) {

                    result += '<br/>';
                    result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>';

                    result += isNaN(item.value[1]) ? 0 : parseInt(item.value[1],10);
                });
                return result;
            },
        },
        series:[
          {
              itemStyle:{
                normal:{
                  color:"#22A5F7",
                }
              },
              type: 'line',
              showSymbol: true,
              symbolSize: 1,
              data: liuru,
              label:{
                normal:{
                  show: true,
                  position: 'top',
                  textStyle:{
                    fontSize:15,
                    color:"#FFF",
                  }
                }
              },
          },

        ]
    };

    chart.setOption(option);
  }
  render(){

    return(

                  <div id="zxt" style={{...this.props}} className={styles.zxt}></div>



    )
  }
}
