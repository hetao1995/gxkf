import React  from 'react';
import echarts from 'echarts';
import styles from './TablesChart.less';
let TableDatas={
  name:['成都高新科服','成都研究院','联通大数据','成都唯品科技','成都未来之门'],
  data:[900, 470, 760, 850, 349],
  dub:[1,2,3,1,1]
}
let normalcolor='#000' ;
let dubcolor="#ccc";
let warncolor="#FFF";
function cal(){
  var res = [];
  for(let i=0; i<TableDatas.data.length; i++){
    let c=normalcolor;
    if(TableDatas.dub[i]==1){
      c=normalcolor;
    }else if(TableDatas.dub[i]==2){
      c=dubcolor;
    }else {
      c=warncolor;
    }
    res.push({name:TableDatas.name[i], value:TableDatas.data[i], itemStyle:{color:c}});
  }
  return res;
}
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {


        type: 'value',

        boundaryGap: [0, 0.01],
         axisTick: {
            show: false
        },
        splitNumber:3,
        show:false
    },
    yAxis: {
        splitNumber:1,

        interval:0,
           type: 'category',
           axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            },
            axisLabel : {
                        // interval:3,

                        margin:40,
                            textStyle: {
                                color: '#FFFFFF',
                                fontSize: 17,
                            }
                        },
        data:  TableDatas.name
    },
    series: [
        {
            type: 'bar',
            color:"#3dc4fa",
            itemStyle:{
                normal:{

                    label:{
                        show:true,
                        position: 'right',
                        color: '#FFF',
                        textStyle:{
                          fontSize: 17,
                        }
                    }

                }
            },
            barWidth:15,
            data: cal(),
            dimensions: [
              {type: 'number'},
            ]
        },
    ]
};


export default class TablesChart extends  React.Component{
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('tables'));
    myChart.setOption(option)
      let counter=100;

    // setInterval(function(){
    //   TableDatas.name.splice(0,1);
    //   TableDatas.data.splice(0,1);
    //   ++counter;
    //
    //   TableDatas.data.push(counter)
    //   TableDatas.name.push(counter)
    //
    //         myChart.setOption({
    //             yAxis:{
    //                 data:TableDatas.name
    //             },
    //             series:[{
    //                 name:'成交',
    //                 data:TableDatas.data
    //             }]
    //         });
    //     },3000)

  }
  render(){
    return(

          <div id="tables" className={styles.tables}></div>

    )
  }
}
