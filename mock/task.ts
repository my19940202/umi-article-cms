// import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/task/list': [
    {
      key: '1',
      name: 'jojo',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Jostan',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Job Delyn',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]
};
