import React from 'react';
import styles from './AccountInfos.less';
import { NodeDatas } from "../components/component/dataBox/Node";
import ContainerBox from '../components/component/containerBox/container';
import TablesRow from '../components/component/TablesRow/TablesRow';
const DataSourceOne={
  BoxStyle:{
    width:"606px",
    height:"360px"
  },
  leftText:"账户公开信息",
  showRight:false
}
const DataSourceTwo={
  BoxStyle:{
    width:"100%",
    height:"520px"
  },
  leftText:"账户信息区块记录变化历史",
  showRight:true
}
export default class AccountInfos extends React.Component {
  constructor(props) {
      super(props)
  }
  render(){
    return(
        <div className={`container ${styles.accountInfos}`}>
            <div className={styles.serachBox}>
              <input placeholder="请输入账号ID查询账户信息" trye="text"></input>
            </div>
            <div className={styles.threeBox}>

              <ContainerBox {...DataSourceOne}>
                  <div className={styles.blockInfos}>
                      <ul>
                          <li>账户ID:</li>
                          <li>账户数据:</li>


                          <div className={styles.mid}>
                            <li>公匙信息:</li>
                            <li>数据变化次数:</li>

                          </div>

                          <li>履约次数:</li>
                          <li>违约次数:</li>
                      </ul>
                  </div>
              </ContainerBox>

              <ContainerBox {...DataSourceOne} leftText="可选公开信息">
                  <div className={styles.blockInfos}>
                      <ul>
                          <li>所属账号:</li>
                          <li>生成节点:</li>
                          <li>来源:</li>

                      </ul>
                  </div>
              </ContainerBox>

              <ContainerBox {...DataSourceOne} leftText="账户异常信息">
                  <div className={styles.blockInfos}>
                      <ol>
                          <li>异常信息:</li>
                      </ol>
                  </div>
              </ContainerBox>
            </div>

            <div className={styles.footer}>
              <ContainerBox {...DataSourceTwo}>
                <TablesRow />
              </ContainerBox>
            </div>

        </div>
    )
  }
}
