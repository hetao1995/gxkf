import React from 'react';
import styles from './NodeShow.less';
import ContainerBox from '../components/component/containerBox/container';
import WorldMap from "../components/component/WorldMap/WorldMap";
export default class NodeShow extends React.Component{

  getStackInfos(){
    const data=[
      {
        data:430123,
        tag:"区块链节点总量"
      },
      {
        data:430123,
        tag:"区块链高度"
      },
      {
        data:430123,
        tag:"区块24小时增长量"
      },
      {
        data:430123,
        tag:"区块链48小时增长量"
      },
    ]
    return data;
  }

  render(){
    const PublicProperty={
      BoxStyle:{
        width:"450px",
        height:"304px"
      },
      showRight:false
    }
    const DataSourceOne={
      ...PublicProperty,
      leftText:"当前记账节点",
    }
    return(
          <div  className={styles.container}>
            <div>
              <div className={`boxShadow ${styles.TopDetails} `}>
                <ul>
                  {this.getStackInfos().map((val,index)=>{
                return <li key={index}>
                          <div>{val.data}</div>
                          <div>{val.tag}</div>
                      </li>
                  })}
                  </ul>
              </div>
              <div className={`boxShadow ${styles.map}`}>
                <WorldMap/>
              </div>
            </div>

            <div className={styles.fRight}>
                <ContainerBox {...DataSourceOne}>
                  <div>
                    <ol>
                      <li>1</li>
                      <li>1</li>

                    </ol>
                  </div>
                </ContainerBox>
                <ContainerBox {...DataSourceOne}leftText={"同步节点"}>
                  <div>
                    <ol>
                      <li>1</li>
                    </ol>
                  </div>
                </ContainerBox>
                <ContainerBox {...DataSourceOne} leftText={"待同步节点"}>
                  <div>
                    <ol>
                      <li>1</li>
                    </ol>
                  </div>
                </ContainerBox>
            </div>
          </div>
    )
  }
}
