import request from '../utils/request';

export async function getTotal(params) {

  return request('/api/total',{
      method:"get",
      data:params
  });


}
