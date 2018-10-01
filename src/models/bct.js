/**
 * Created by 1263 on 2018/10/1.
 */

import * as bctService from '../services/bct';
export default {
  namespace: 'bct',
  state: {
    bctHeight: 379792,
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  effects: {

    *getDetails(_, { call, put }) {

      const result = yield call(bctService.getBctDetails);//如果使用  {参数}  ，则是一个对象

      //把请求的数据保存起来
      //数据更新会带动页面重新渲染
      yield put({
        type: 'save',  //reducers中的方法名
        payload:{
          data: result.data  //网络返回的要保留的数据
        }
      })
    }
  },
  reducers: {
    save(state, { payload: { data } }) {
      console.log(data);
      return {
        ...state,
        bctHeight: parseInt(data["data"]["seq"]),
      };
    },
  },
}
