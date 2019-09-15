import React from 'react';
import { Card, Steps } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
const { Step } = Steps;

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <h3 style={{ textAlign: 'left', marginTop: 18 }}>
        平台介绍
      </h3>
      <article>
        this is 平台介绍this is 平台介绍this is 平台介绍this is 平台介绍this is 平台介绍
        this is 平台介绍this is 平台介绍this is 平台介绍this is 平台介绍this is 平台介绍
        this is 平台介绍this is 平台介绍this is 平台介绍this is 平台介绍this is 平台介绍
      </article>
    </Card>
    <Card>
      <Steps direction="vertical" current={1}>
        <Step title="注册账号" description="填写账号、密码、联系方式，点击[提交]完成注册" />
        <Step title="添加资源" description="点击[我的资源-添加]按照要求填写自有媒体资源信息 提交等待审" />
        <Step title="查看订单" description="点击[我的订单]然后开始执行订单完成 按要求操作回链 退稿" />
        <Step title="申请提现" description="订单完成7天之后可在后[个人中心-提现 ]申请款项" />
        <Step title="充值发稿" description="登陆后台，点击[个人在线-我要充值]，选择您的支付方式充值，充值发布文章费用" />
        <Step title="开始发稿" description="点击[我要发稿- 文章发布]，选择您要发布的媒体，点击[下一步]，填写标题、内容，点击[提交]完成发布" />
        <Step title="查看文章" description="点击[文章管理- 发稿列表]，查看文章发布状态，文章发布成功后后台会显示链接，发布时间一般在24小时" />
        <Step title="售后服务" description="如果您的文章发布没有发布成功不收费，如您有任何疑问有，可以通过后台显示的QQ联系我们" />
      </Steps>
    </Card>
  </PageHeaderWrapper>
);
