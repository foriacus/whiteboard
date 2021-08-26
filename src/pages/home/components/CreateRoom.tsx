import React, { useState } from 'react';
import { Space, Radio, Form, Modal, Input, Checkbox } from 'antd';
import styles from './CreateRoom.less';

const carmeraOptions = [{ label: '开启摄像头', value: 2 }];

function CustomCheckbox(props) {
  const { value, onChange } = props;
  const [selectedType, setSelectedType] = useState(value || 1);

  const onTypeChange = (value) => {
    setSelectedType(value);
    onChange(value);
  };

  return (
    <Space>
      <div
        className={selectedType === 1 ? styles.activeBox : styles.box}
        onClick={() => onTypeChange(1)}
      >
        <div>大班课</div>
        <div>面向大量学生</div>
        <Radio checked={selectedType === 1} />
      </div>
      <div
        className={selectedType === 2 ? styles.activeBox : styles.box}
        onClick={(e) => onTypeChange(2)}
      >
        <div>小班课</div>
        <div>最多16位学生</div>
        <Radio checked={selectedType === 2} />
      </div>
      <div
        className={selectedType === 3 ? styles.activeBox : styles.box}
        onClick={(e) => onTypeChange(3)}
      >
        <div>一对一</div>
        <div>面向1位学生</div>
        <Radio checked={selectedType === 3} />
      </div>
    </Space>
  );
}

function CreateRoom() {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  // 加入
  const createRoom = () => {
    form.validateFields().then((values) => {
      console.log('values', values);
    });
    setVisible(false);
  };

  const cancelCreate = () => {
    setVisible(false);
  };

  return (
    <>
      <div className={styles.card} onClick={showModal}>
        <div className={styles.circle}>
          <i className="ri-add-fill"></i>
        </div>
        创建房间
      </div>
      <Modal
        visible={visible}
        title="创建房间"
        onOk={createRoom}
        okText="创建"
        onCancel={cancelCreate}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="主题"
            name="topic"
            rules={[
              {
                required: true,
                message: '请输入房间主题',
              },
            ]}
          >
            <Input placeholder="请输入房间主题" />
          </Form.Item>
          <Form.Item label="类型" name="type">
            <CustomCheckbox />
          </Form.Item>
          <Form.Item label="加入选项" name="camera">
            <Checkbox.Group options={carmeraOptions} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default CreateRoom;
