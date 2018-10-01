
import React  from 'react';
import echarts from 'echarts';

const option = {
    xAxis: {
        type: 'category',
        data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        axisTick: {
            show: false
        },
        axisLabel : {
          // interval:3,


              textStyle: {
                fontFamily: "PingFangSC-Regular",
                  opacity:0.4,
                  color: '#FFFFFF'
              }
          },

    },
    yAxis: {
        type: 'value',
        show:false
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        itemStyle:{
                normal:{

                    label:{
                        color:"#FFFFFF",
                        fontSize:"18px",
                        show:true,
                        position: 'top'
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#47D1FC'
                    }, {
                        offset: 1,
                        color: '#22A5F7'
                    }]),

                }
            },
              barWidth:30,
        type: 'bar'
    }]
};



export default class TablesRow extends  React.Component{
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('tablesRow'));
    myChart.setOption(option)
  }
  render(){
    return(

          <div id="tablesRow" style={{width:"100%",height:"460px"}}></div>

    )
  }
}
