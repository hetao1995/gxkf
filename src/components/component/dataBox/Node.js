import React from 'react';
import styles from './Node.less';
export class NodeDatas extends React.Component {
  constructor(props) {
    super(props)
  }
  static defaultProps={
    Left:{
      color:"white",
      data:"26,500",
      text:"区块链节点数量"
    },
    Right:{
      color:"white",
      data:"26,500",
      text:"区块链节点数量"
    }
  }

  render(){
      let {Left,Right}=this.props;

    return(
      <div>
        <div className={styles.node}>
            <div className={styles.container}>

                <span style={{color:Left.color}}>{Left.data}</span>
                <span>{Left.text}</span>
            </div>
              <div className={styles.middleLine}></div>
            <div className={styles.container}>
              <span style={{color:Right.color}}>{Right.data}</span>
              <span>{Right.text}</span>
            </div>

        </div>
      </div>
    )
  }
}
