import React from 'react';
import styles from './nonContainer.less';
import { Select } from 'antd';
const { Option } = Select;

export default class box extends React.Component {
  constructor(props){
    super(props)
  }
  static defaultProps={
    BoxStyle:{
      width:"920px",
      height:"530px"
    }
  }
  handleChange(value){
      // console.log(this.props.HandleChangeType(value))
  }
  componentDidMount(){

  }
  render(){

    let {BoxStyle,leftText,showRight,rightText,RightStyle,InnerStyle}=this.props;

    return(
      <div style={BoxStyle} className={`${styles.marginTop} boxShadow`}>
        <div style={{height:"48px"}}>
          <span style={{height:"auto"}}>{leftText}</span>
          {showRight?
              <span>

                <div className={`${styles.rightDiv}`} style={RightStyle}>{rightText}</div>

              </span>
            :<span></span>
          }

        </div>
        <div style={InnerStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
