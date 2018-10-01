import React  from 'react';



export default class ClickMap extends  React.Component{


  static defaultProps={
    style:{
      width:"100%",
      height:"100%",

    },
  }
  hello=()=>{
    alert("hello")
  }
  render(){

    return(

          <div id="mainMap" style={{width:"100%",height:"100%",overflow:"hidden"}}>

              
          </div>


    )
  }
}
