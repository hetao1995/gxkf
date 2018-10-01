import React  from 'react';
import echarts from 'echarts';
import { Tooltip } from 'antd';
import styles from "./ClickHotMap.less"
import SvgMap from "../../../assets/images/map-fh.svg";

export default class ClickMap extends  React.Component{
  constructor(props) {
        super(props);
        this.state = {
            translateX: 0,
            translateY: 0,
            idx:0,
            display:"none",
        };
        this.moving = false;
        window.onmousemove = e => this.onMouseMove(e);
    }

    onMouseEnter(e,idx) {
        this.moving = true;
        this.setState({idx:idx, display:""});
    }

    onMouseLeave() {
        this.moving = false;
        this.setState({display:"none"});
    }

    onMouseMove(e) {
        this.moving && this.onMove(e);
    }

    onMove(e) {
      const dx=0, dy=0;
      this.setState({ translateX: e.clientX + dx, translateY: e.clientY + dy });
    }

  getStackInfos(){
    const data=[
      [
        {
          data:3500,
          tag:"孵化器0"
        },
        {
          data:1003,
          tag:"孵化器0"
        },
        {
          data:4762,
          tag:"孵化器0"
        },
        {
          data:984,
          tag:"孵化器0"
        },
        {
          data:984,
          tag:"孵化器0"
        },
        {
          data:984,
          tag:"孵化器0"
        },
      ],
      [
        {
          data:3500,
          tag:"孵化器1"
        },
        {
          data:1003,
          tag:"孵化器1"
        },
        {
          data:4762,
          tag:"孵化器1"
        },
        {
          data:984,
          tag:"孵化器1"
        },
        {
          data:984,
          tag:"孵化器1"
        },
        {
          data:984,
          tag:"孵化器1"
        },
      ],
      [
        {
          data:3500,
          tag:"孵化器2"
        },
        {
          data:1003,
          tag:"孵化器2"
        },
        {
          data:4762,
          tag:"孵化器2"
        },
        {
          data:984,
          tag:"孵化器2"
        },
        {
          data:984,
          tag:"孵化器2"
        },
        {
          data:984,
          tag:"孵化器2"
        },
      ],
      [
        {
          data:3500,
          tag:"腾讯众创空间（天府三街店）"
        },
        {
          data:1003,
          tag:"电子科大科技园（西区）"
        },
        {
          data:4762,
          tag:"成都无线众创空间（成都店）"
        },
        {
          data:984,
          tag:"腾讯众创空间（天府三街店）"
        },
        {
          data:984,
          tag:"腾讯众创空间（天府三街店）"
        },
        {
          data:984,
          tag:"腾讯众创空间（天府三街店）"
        },
        {
          data:3500,
          tag:"腾讯众创空间（天府三街店）"
        },
        
      ],
    ]
    return data[this.state.idx];
  }
  static defaultProps={
    style:{
      width:"100%",
      height:"100%",

    },

  }

  hello=()=>{
    alert("hello ")
  }
  render(){
    let {state} = this.props;
    return(

          <div id="mainMap" style={{width:"100%",height:"100%",overflow:"hidden"}} className={styles.hotmap} >

              <img src={require("../../../assets/images/map-fh.svg")} style={{width:"100%",height:"100%",border:" 1px solid #22a5f7"}} useMap="#fh"/>


              <map name="fh">
                <area shape="circle" coords="248,127,30" alt="Mercury" href="/#/innovation" onMouseEnter={e=>this.onMouseEnter(e,0)} onMouseLeave={e=>this.onMouseLeave(e)} onMouseMove={e=>this.onMouseMove(e)}/>
                <area shape="circle" coords="357,456,30" alt="Mercury" href="/#/innovation" onMouseEnter={e=>this.onMouseEnter(e,1)} onMouseLeave={e=>this.onMouseLeave(e)} onMouseMove={e=>this.onMouseMove(e)}/>
                <area shape="circle" coords="397,506,30" alt="Mercury" href="/#/innovation" onMouseEnter={e=>this.onMouseEnter(e,2)} onMouseLeave={e=>this.onMouseLeave(e)} onMouseMove={e=>this.onMouseMove(e)}/>
                <area shape="circle" coords="436,574,30" alt="Mercury" href="/#/innovation" onMouseEnter={e=>this.onMouseEnter(e,3)} onMouseLeave={e=>this.onMouseLeave(e)} onMouseMove={e=>this.onMouseMove(e)}/>
              </map>
              <div className={styles.content1}>
                <div><span>孵化器数量：</span><span>56</span></div>
                <div><span>企业孵化数量：</span><span>103</span></div>
              </div>
              <div className={styles.content2}>
                <div><span>孵化器数量：</span><span>56</span></div>
                <div><span>企业孵化数量：</span><span>103</span></div>
              </div>
              <div className={styles.content3}>
                <div><span>孵化器数量：</span><span>56</span></div>
                <div><span>企业孵化数量：</span><span>103</span></div>
              </div>
              <div className={styles.content4}>
                <div><span>孵化器数量：</span><span>56</span></div>
                <div><span>企业孵化数量：</span><span>103</span></div>
              </div>

              <div className={styles.info} style={{transform: `translateX(${this.state.translateX}px)translateY(${this.state.translateY}px)`, display:this.state.display}}>
                <div></div>
                <div>
                  <div style={{color:"#FFF600", fontSize:"18px",paddingBottom:"5px"}}>孵化器</div>
                  <ul style={{marginTop:"-5px"}}>
                    {this.getStackInfos().map((val,index)=>{
                      return <li key={index}>
                                <div style={{color:"#FFF"}}>{val.tag}</div>
                            </li>
                    })}
                    </ul>
                </div>
                <div>
                  <div style={{color:"#FFF600", fontSize:"18px",paddingBottom:"5px"}}>企业数量</div>
                  <ul style={{marginTop:"-5px"}}>
                    {this.getStackInfos().map((val,index)=>{
                      return <li key={index}>
                                <div style={{color:"#FFF"}}>{val.data}</div>
                            </li>
                    })}
                    </ul>
                </div>
              </div>

          </div>


    )
  }
}
