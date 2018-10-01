import React from 'react';

import styles from "./tab.less";
import { browserHistory } from 'react-router';
import { Link } from 'dva/router';

import AnimateComponent from '../routes/AnimateComponent';
import Interaction from "../components/component/Modal/Interaction";
const styleBorder={
  color: "#22A5F7",
  border:" 1px solid #22A5F7"
}
export default class TabBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      path:"datas"
    }
  }

handleRedirect(val){
  this.setState({
    path:val
  })
}
componentDidMount(){

}
  render() {
    const PathLists=[
      {
        key:"datas",
        path:"/",
        content:"运营数据"
      },{
        key:"innovation",
        path:"/innovation",
        content:"双创数据"
      },
  ];

    return (
    <div>
    <div className={styles.tab}>
        <span style={{color:"white"}}><img alt="" style={{height:"80%", padding:"0 0 5px 0"}} src={require("../assets/images/logo.svg")}/></span>
        <div  className={styles.bar}>
              <ul>
              {PathLists.map((val)=>{
                return <li key={val.key} onClick={()=>this.handleRedirect(val.key)} style={this.state.path===val.key?styleBorder:null}>
                          <Link to={val.path}>
                          {val.content}
                          </Link>
                        </li>
              })}
              {this.state.path==="datas"?<Interaction/>:<li>互动活动</li>}
              </ul>

        </div>
          <span className={styles.userState} style={{width:"190px"}}>
            <div className={styles.bg}><span> <AnimateComponent value={876}/></span></div>

          </span>
          <span className={styles.userRight}>
            <span>双创中心</span>
            <span></span>
            <span><img alt="" style={{height:"100%"}} src={require("../assets/images/logout.svg")}/></span>
          </span>
    </div>
      <div className={styles.botton}></div>
    </div>
    );
  }
}
