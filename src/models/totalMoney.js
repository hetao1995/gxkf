
export default {
  namespace: 'totalMoney',
  state: 200,
  reducers: {
    'add'(state, { payload: total }) {
      return state+total/10000;
    },
  },
};
