'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数

// 数据持久化   保存在global的全局变量中
let tableListData = {};

if (!global.tableListData) {
  const data = mockjs.mock({
    'data|100': [{
      'id|+1': 1,
      'name': () => {
        return Random.cname();
      },
      'mobile': /1(3[0-9]|4[57]|5[0-35-9]|7[01678]|8[0-9])\d{8}/,
      'avatar': () => {
        return Random.image('125x125');
      },
      'status|1-2': 1,
      'email': () => {
        return Random.email('visiondk.com');
      },
      'isadmin|0-1': 1,
      'created_at': () => {
        return Random.datetime('yyyy-MM-dd HH:mm:ss');
      },
      'updated_at': () => {
        return Random.datetime('yyyy-MM-dd HH:mm:ss');
      },
    }],
    page: {
      total: 100,
      current: 1,
    },
  });
  tableListData = data;
  global.tableListData = tableListData;
} else {
  tableListData = global.tableListData;
}

module.exports = {
  //post请求  /api/users/ 是拦截的地址   方法内部接受 request response对象
  'GET /api/total' (req, res) {
    const data={
      blockNodes:430123,
      blockHeight:150620,
      user:{
        onLine:2153,
        total:10123,
        activeUser:75,   //百分币
        componyUser:65,
        personalUserl:35
      }
    }
    setTimeout(() => {
      res.json({      //将请求json格式返回
        success: true,
        data
      });
    }, 200);
  },
}
