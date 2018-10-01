import styles from './Img.less';
import { Rate } from 'antd';

import { connect } from 'dva';
function Img({Datas,props}){
  console.log(Datas)
  return (
    <div className={styles.imgA}>
      <img src={require('../assets/img.jpg')}/>
      <div className={styles.Datas}>
          <div>{Datas.tardeId}</div>
          <div className={styles.buyer}>
            <span>{Datas.buyer.name}</span>
            <span><Rate disabled defaultValue={Datas.buyer.creditLevel}/></span>
          </div>
          <div className={styles.seller}>
            <span>{Datas.seller.name}</span>
            <span><Rate disabled defaultValue={Datas.seller.creditLevel}/></span>
          </div>
          <div className={styles.tardeNumber}>{Datas.tardeNumber}</div>
          <div className={styles.servicesName}>{Datas.serviceName}</div>
          <div className={styles.tardeDate}>{Datas.tardeDate}</div>
          <div className={styles.serviceCount}>{Datas.serviceCount}</div>
      </div>
    </div>
  )
}

export default connect(({ App }) => ({
  Datas:App.imgDatas
}))(Img);
