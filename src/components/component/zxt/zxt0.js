import React  from 'react';
import echarts from 'echarts';
import styles from "./zxt.less";
function randomData() {
    return {
        value: [
            Math.round(Math.random()*1000)
        ]
    }
}
let data=[];
for (var i = 0; i < 11; i++) {
  data.push(Math.round(Math.random()*1000))
}
const option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        // formatter: function (params) {
        //     params = params[0];
        //     var date = new Date(params.name);
        //     let s="<div>"+ params.value[1]+"</div>";
        //     return s;
        // },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {

        type: 'category',
        data: ['00:00','02:00','04:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
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
            axisLabel: {
                       show: true,
                       textStyle: {
                           color: '#FFFFFF'
                       }
                   }
    },
    yAxis: {
        show:false,
        axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [
      {
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        itemStyle:{
                normal:{
                    color:"#22A5F7",
                    label:{
                        show:true,
                        position: 'right'
                    }

                }
            },
        data: data
    }]
};


export default class TablesChart extends  React.Component{
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('zxt'));
    myChart.setOption(option);
    // setInterval(function () {
    //
    //     for (var i = 0; i < 5; i++) {
    //       console.log(data.shift())
    //         data.push(randomData());
    //     }
    //
    //     myChart.setOption({
    //         series: [{
    //             data: data
    //         }]
    //     });
    // }, 1000000);
  }
  render(){

    return(

                  <div id="zxt" style={{...this.props}} className={styles.zxt}></div>



    )
  }
}
