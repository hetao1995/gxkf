/**
 * Created by 1263 on 2018/10/1.
 */
import request from '../utils/request';

var btcAddress = '/bct/api';
export function getBctDetails () {
  return request(btcAddress+'/getDetails') //get方法请求
  /*
   return request(`接口地址`,{
   method: 'post',
   headers: {
   'Content-Type': 'application/json; charset=utf-8'
   },
   body: JSON.stringify({
   参数名：参数
   })
   })
   */

}

