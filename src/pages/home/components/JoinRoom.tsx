import React, { useState } from 'react';
import { Form, Modal, Input, Checkbox } from 'antd';
import styles from './JoinRoom.less';

const carmeraOptions = [
  { label: '开启麦克风', value: 1 },
  { label: '开启摄像头', value: 2 },
];

function JoinRoom() {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  // 加入
  const joinRoom = () => {
    form.validateFields().then((values) => {
      console.log('values', values);
    });
    setVisible(false);
  };

  const cancelJoin = () => {
    setVisible(false);
  };

  return (
    <>
      <div className={styles.card} onClick={showModal}>
        <div className={styles.circle}>
          <i className="ri-door-open-fill"></i>
        </div>
        加入房间
      </div>
      <Modal
        visible={visible}
        title="加入房间"
        onOk={joinRoom}
        okText="加入"
        onCancel={cancelJoin}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="房间号"
            name="roomId"
            rules={[
              {
                required: true,
                message: '请输入房间号!',
              },
            ]}
          >
            <Input placeholder="请输入房间号" />
          </Form.Item>
          <Form.Item label="加入选项" name="camera">
            <Checkbox.Group options={carmeraOptions} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default JoinRoom;
