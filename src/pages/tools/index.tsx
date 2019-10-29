import React from 'react';
import { Card, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import styles from './style.less';

export class Tools extends React.Component<{}, { replaceState: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      replaceState: BraftEditor.createEditorState(null),
    };
  }

  componentWillMount() {}

  handleEditorChange = state => {
    const replaceHTML = state.toText().replace(/(\d+)/gm, '<span style="color:red;">$1</span>');
    const tmp = BraftEditor.createEditorState(replaceHTML);
    this.setState({ replaceState: tmp });
  };

  render() {
    return (
      <>
        <h3>工具页面</h3>
        <Row>
          <Col span={12}>
            <BraftEditor
              className={styles.editor}
              placeholder="在此粘贴文案,按动上方按钮后，根据文稿长短，请您耐心等待5-45秒"
              controls={[]}
              onChange={this.handleEditorChange}
            />
          </Col>
          <Col span={12}>
            <BraftEditor
              readOnly={true}
              className={styles.validator}
              controls={[]}
              value={this.state.replaceState}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <Tools />
    </Card>
  </PageHeaderWrapper>
);
