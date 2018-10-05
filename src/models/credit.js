/**
 * Created by hetao on 2018/10/5.
 */

export default {
  namespace: 'credit',
  state: {
    found:200,
    amount:669,
    used:629,
    cashed:629
  },
  reducers: {
    'refresh'(state, { payload: {found, amount, used, cashed}}) {
      return {
        ...state,
        found:found,
        amount:amount,
        used:used,
        cashed:cashed
      }
    },
  },
};
