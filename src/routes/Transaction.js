import React from 'react';
import { connect } from 'dva';

import styles from './Transaction.less';
import { NodeDatas } from "../components/component/dataBox/Node";
import ContainerBox from '../components/component/containerBox/container';
import ZxT from "../components/component/zxt/zxt";
import ReactBubbleChart from "react-d3-bubbles";
const data =  [
    {
      index: 0,
      name: 'A',
      value: '0',
      tooltip: 'A',
      color: '#f48fb1',
      radius: 56
    },
    {
      index: 1,
      name: 'B',
      value: '1',
      tooltip: 'B',
      color: '#ffab91',
      radius: 34
    },
    {
      index: 2,
      name: 'C',
      value: 2,
      tooltip: 'C',
      color: '#b87fe9',
      radius: 32
    },
    {
      index: 3,
      name: 'D',
      value: 3,
      tooltip: 'D',
      color: '#64b5f6',
      radius: 32
    },
    {
      index: 4,
      name: 'E',
      value: 4,
      tooltip: 'E',
      color: '#4dd0e1',
      radius: 31.5
    },
    {
      index: 5,
      name: 'F',
      value: 5,
      tooltip: 'F',
      color: '#f48fb1',
      radius: 31
    },
    {
      index: 6,
      name: 'G',
      value: 6,
      tooltip: 'G',
      color: '#81c784',
      radius: 28
    },
    {
      index: 7,
      name: 'H',
      value: 7,
      tooltip: 'H',
      color: '#f48fb1',
      radius: 24
    },
    {
      index: 8,
      name: 'I',
      value: 8,
      tooltip: 'I',
      color: '#64b5f6',
      radius: 32
    }
  ];


class Transaction extends  React.Component {
  constructor(props) {
      super(props);
  }
  //str.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  tradeInfos(){
    const datas=[];
    for (let i = 0; i < 18; i++) {
      datas.push({
        time:"2018/08/31",
        company:"bibibib",
        tradeID:"asdadasdazx",
        detailsTrade:"12320",
        id:new Date().getTime()
      })
    }
    return datas;
  }
  handToCheck(val){
    console.log(val)
  }
  handleC(){
    console.log("paratre")
  }
  render(){

    const childPropsOne={
      BoxStyle:{
        width:"98。5%",
        height:"400px"
      },
      leftText:"交易趋势",
      showRight:true,
    }
    const childPropsTwo={
      leftText:"交易关系图",
      showRight:false,
      BoxStyle:{
          width:"920px",
          height:"530px",
      },
    }
    const childPropsThree={
      leftText:"最新交易信息",
      showRight:false,
      BoxStyle:{
          width:"920px",
          height:"530px",
          marginLeft:"20px"
      },
    }
    return(
      <div style={{ maxWidth: "1860px",margin: "20px auto",marginTop:"0px"}}>
      <div style={{display:"flex"}}>
          <div className={styles.detailDatas}>
            <ul>
              <li>
                <NodeDatas />
              </li>
              <li>
                <div className={`boxShadow ${styles.historyCount}`}>
                    <div className={styles.historyDatas}>
                        <span>262651</span>
                        <div>历史交易数量</div>
                    </div>
                  <div></div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.transationTable}>
            <ContainerBox {...childPropsOne} HandleChangeType={(val)=>this.handleC(val)}>
              <div>
                <ZxT width={"100%"} height={"280px"}/>
              </div>
            </ContainerBox>
          </div>
      </div>

      <div className={styles.eTables}>
        <div>
            <ContainerBox {...childPropsTwo} >
              <div>  <ReactBubbleChart data={data} width={"918px"} height={"480px"} center={{ x: 400, y: 250 }}/></div>
            </ContainerBox>
        </div>

        <div>
            <ContainerBox {...childPropsThree}>
              <div className={styles.tradeTable}>
                <div>
                  <ul>
                    <li>区块高度</li>
                    <li>交易企业</li>
                    <li>交易ID</li>
                    <li>单笔交易量</li>
                    <li>操作</li>
                  </ul>
                </div>
                <div className={`${styles.datas} scrollbar`}>
                  {this.tradeInfos().map((val,index)=>{
                    return <div className={styles.tradeInfos} key={index}>
                                <div>{val.time}</div>
                                <div>{val.company}</div>
                                <div>{val.tradeID}</div>
                                <div>{val.detailsTrade}</div>
                                <div onClick={()=>this.handToCheck(val.id)}>查看</div>
                          </div>
                  })}
                </div>
              </div>
            </ContainerBox>
        </div>
      </div>

      </div>
    )
  }
}


Transaction.propTypes = {
};

export default connect()(Transaction);
