/**
 * Created by hetao on 2018/10/5.
 */


export default {
  namespace: 'transaction',
  state: [{
    transactionUser:"联合网络通信",
    totalTransaction:24000,
    alarm:1,
    createTime:0,
  }],
  reducers: {
    'append'(state, { payload: data}) {
      let newState = state;
      newState.concat(data);
      console.log(newState);
      while(newState.length>50){
        newState.shift();
      }
      return newState;
    },
  },
};
