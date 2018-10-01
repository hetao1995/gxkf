import React from 'react';
import styles from './BlockShow.less';
import { NodeDatas } from "../components/component/dataBox/Node";
import ContainerBox from '../components/component/containerBox/container';
import PupleTable from '../components/component/PupleTable/PupleTable';
import { connect } from 'dva';

const DataSourceOne={
  BoxStyle:{
    width:"100%",
    height:"400px"
  },
  leftText:"区块概览",
  showRight:false
}
const DataSourceTwo={
  BoxStyle:{
    width:"1233px",
    height:"530px"
  },
  leftText:"最新区块",
  showRight:false
}
const DataSourceThree={
  BoxStyle:{
    width:"607px",
    height:"530px"
  },
  leftText:"区块信息",
  showRight:false
}
 class BlockShow extends React.Component {
  constructor(props) {
      super(props)
  }
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
    console.log(this.props)
    this.props.dispatch({
      type:"App/redirect",
      payload:val
    })
  }

  componentDidMount(){
    console.log(this)
  }
  render(){
    return(
        <div className={`container ${styles.BlockShow}`}>
            <div>
                  <ContainerBox {...DataSourceOne}>
                        <PupleTable/>
                  </ContainerBox>
            </div>

            <div className={styles.bt}>
                <ContainerBox {...DataSourceTwo}>
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
                <ContainerBox {...DataSourceThree}>
                    <div className={styles.blockInfos}>
                        <ul>
                            <li>所属账号:</li>
                            <li>生成节点:</li>
                            <li>来源:</li>
                            <li>打开位置:</li>

                            <div className={styles.mid}>
                              <li>加密状态:</li>
                              <li>加密算法:</li>
                              <li>公匙体系:</li>
                            </div>

                            <li>区块掉用次数:</li>
                        </ul>
                    </div>
                </ContainerBox>
            </div>
        </div>
    )
  }
}
export default connect()(BlockShow);
