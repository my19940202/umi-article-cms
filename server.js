/**
 * xishengbo
 * express 入口文件
 */

const express = require('express');
var compression = require('compression');
const path = require('path');
const app = express();
const port = 8822;
const mockData = require('./mockData');
app.use(compression());

app.use(express.static(path.join(__dirname, 'dist')));
// 调整 get /* /api/*的相关顺序 解决了刷新其他路由 not found的问题
app.get('/api/*', (req, res) => {
  if (req.path === '/api/currentUser') {
    res.json(mockData.loginData);
  }
  else if (req.path === '/api/tasklist') {
    res.json(mockData.tasklistData);
  }
  else {
    res.json({
      status: 'ok',
      data: [],
      total: 100
    });
  }
});
app.post('/api/*', (req, res) => {
  res.json({
      status: 'ok',
      data: [],
      total: 100
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`server is listening on port ${port}!`));
