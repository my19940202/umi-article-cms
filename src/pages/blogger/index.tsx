import React from 'react';
import {
  Card, Table, Button, Icon,
  Pagination, Divider, Alert,
  Radio, Input
} from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

interface articleInterface {
  pageIdx: number;
  pageSize: number;
  tableData: any[];
  total: number;
}
/*
任务编号
定制账号需求(定制信息)
定制标题
发布要求
接单单价
总订单数量
订单状态
操作
*/
const columns = [
  {
      title: '任务编号',
      dataIndex: 'id',
      key: 'name',
      render: text => <a>{text}</a>,
  },
  {
      title: '定制账号需求(定制信息)',
      dataIndex: 'age',
      key: 'age',
  },
  {
      title: '定制标题',
      dataIndex: 'address',
      key: 'address',
  },
  {
      title: '发布要求',
      key: 'tags',
      dataIndex: 'tags'
  },
  {
    title: '接单单价',
    key: 'tags1',
    dataIndex: 'tags1'
  },
  {
    title: '总订单数量',
    key: 'tags2',
    dataIndex: 'tags2'
  },
  {
    title: '订单状态',
    key: 'tags3',
    dataIndex: 'tags3'
  },
  {
      title: '操作',
      key: 'action',
      render: (text, record) => (
          <span>
          <a>查看</a>
          <Divider type="vertical" />
          <Icon type="delete" />
          <Divider type="vertical" />
          <Icon type="like" />
          </span>
      ),
  }
];

export class BloggerTable extends React.Component<{}, articleInterface> {
  constructor(props: any) {
      super(props);
      this.state = {
          pageIdx: 1,
          pageSize: 10,
          tableData: [],
          total: 0
      }
  }

  componentWillMount() {
      this.updateTable();
  }

  tablePagination = (pageIdx) => {
      this.updateTable(pageIdx);
  }

  updateTable = (pageIdx?: number) => {
      pageIdx = pageIdx || this.state.pageIdx;
      let pageSize = this.state.pageSize;
      let url = `/api/table/articles?pageIdx=${pageIdx}&pageSize=${pageSize}`;
      fetch(url, {
          method: 'GET',
          headers: {'Content-Type': 'application/json; charset=utf-8'}
      })
      .then((res: any) => res.json())
      .then((data: any) => {
          this.setState({
              tableData: data.data,
              total: data.total
          })
      });
  }

  render() {
      let category = [
        '医美', '医药', '摄影', '母婴', '美妆护肤', '居家生活', '时尚搭配',
        '美食探店', '运动', '影音', '运动健身', '旅行', '读书', '数码',
        '时尚男士', '动漫'
      ];
      let district = [
        '北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林',
        '黑龙江', '上海', '江苏', '浙江', '安徽', '福建','江西',
        '山东','河南','湖北','湖南','广东','广西','海南','重庆',
        '四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏',
        '新疆'
      ];
      let price = [
        '100以下',
        '200,500',
        '500到1千',
        '1千到2千',
        '2千到5千',
        '5千到1万',
        '1万到5万',
        '5万到10万',
        '10万以上'
      ]
      let fans = [
        '1万以下',
        '1万-5万',
        '5万到10万',
        '10万到15万',
        '15万到20万',
        '20万到25万',
        '25万到50万',
        '50万到100万',
        '100万以上',
      ]
      const rowSelection = {
      };
      return (
          <>
          {/* 筛选项 */}
          <div className="table-filter-wrapper" style={{margin: '10px 0'}}>
          <span>账户名称: </span><Input style={{width: 300}} placeholder="账户名称" />
          </div>
          <div className="table-filter-wrapper" style={{margin: '10px 0'}}>
            <span>常见分类: </span>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              {
                category.map(item =>
                  <Radio.Button value={item}>{item}</Radio.Button>
                )
              }
            </Radio.Group>
          </div>
          <div className="table-filter-wrapper" style={{margin: '10px 0'}}>
            <span>地方资源: </span>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              {
                district.map(item =>
                  <Radio.Button value={item}>{item}</Radio.Button>
                )
              }
            </Radio.Group>
          </div>
          <div className="table-filter-wrapper" style={{margin: '10px 0'}}>
            <span>图文价格: </span>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              {
                price.map(item =>
                  <Radio.Button value={item}>{item}</Radio.Button>
                )
              }
            </Radio.Group>
          </div>
          <div className="table-filter-wrapper" style={{margin: '10px 0'}}>
            <span>粉丝数量: </span>
            <Radio.Group defaultValue="a" buttonStyle="solid">
              {
                fans.map(item =>
                  <Radio.Button value={item}>{item}</Radio.Button>
                )
              }
            </Radio.Group>
          </div>
          {/* 表格 */}
          <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={this.state.tableData}
          />
          <Pagination onChange={this.tablePagination} total={this.state.total} />
          </>
      )
  }
}

const intro = (
  <Alert message={<div>
    <h3>接单说明:</h3>
    如果订单篇数只有一篇输只能一个人接单<br/>
    如果有多个订单,需要点击订单,输入接单篇数。（直接在任务大厅接单，不需要输入手机号）<br/>
    如果用接单页面接单 需要输入篇数，电话号码(必须是媒介共享注册的手机号)<br/>
    </div>} type="warning"
  />
);
const tips = (
  <Alert message={<div>
    <h3>小红书接单发文注意事项:</h3>
    1.代发不能偷懒 必须给文字分段+很多小表情，让笔记看的更生动 ，好看<br/>
    2.发给你的图文，一定要按照要求选择美观的产品正面图！！不要瞎选<br/>
    3.有在笔记下面评论的，一定记得做评论维护，不能不管。<br/>
    4.每篇代发直接，间隔30分钟再发，除非你是两个设备（比如两个手机），否则对账号怕又影响<br/>
    5.代发成功之后自己不能删除，否则禁止接单。<br/>
    6.具体根据客户要求，切记按照要求去发布，@品牌合作人，都@下，不要不按要求发布，都认真点，没安要求发布的，系统会直接退单，不结算。<br/>
    7.不要接单之后不安排，不能按照完成的就不要接单，经常逃单的，会限制接单，甚者封号。<br/>
    8.关于结算：在订单完成7天之后，登陆后台，在个人中心-提现-申请提现，财务会在每周二安排统一打款，如果有问题请加QQ1174796596沟通。
  </div>
  } type="error" />
);

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <BloggerTable />
    </Card>
  </PageHeaderWrapper>
);
