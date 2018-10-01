import {getTotal} from '../services/DashBord';
import { routerRedux } from 'dva/router';
export default {

  namespace: 'App',

  state: {
    a:1,
    imgDatas:{
      buyer:{
        name:"bda1dd7f343d4fa1cb7974fe300e2c3a7a9be046e81e8a204310c146d429d828",
        creditLevel:3
      },
      seller:{
        name:"ssssssssssssss",
        creditLevel:4
      },
      tardeId:"bda1dd7f343d4fa1cb7974fe300e2c3a7a9be046e81e8a204310c146d429d828",
      tardeNumber:"ad546546546465",
      tardeDate:"2018-09-07 15:45:02",
      serviceName:"科服晕服务",
      serviceCount:"77.00"
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line

    },
  },

  effects: {
    *getTotal({ payload }, { call, put }) {  // eslint-disable-line
      const response=yield call(getTotal,payload);

      yield put({ type: 'save',payload:response});
    },
    *redirect({payload},{put}){

      yield put(routerRedux.push("/detail",{datas:payload}))
    }
  },

  reducers: {
    save(state, action) {
      console.log({ ...state, ...action.payload })
      return { ...state, ...action.payload };
    },
  },

};
