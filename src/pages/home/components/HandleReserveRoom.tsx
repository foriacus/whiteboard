import React, { useState } from 'react';
import {
  Space,
  Radio,
  Form,
  Input,
  Checkbox,
  DatePicker,
  TimePicker,
  Button,
  Select,
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import moment from 'moment';
import SimpleLayout from '../../../layout/simple-layout/SimpleLayout';
import styles from './HandlereserveRoom.less';

const carmeraOptions = [{ label: '周期性房间', value: 1 }];
const dateFormat = 'YYYY-MM-DD';
const format = 'HH:mm';
const { Option } = Select;

const selectAfter = (
  <Select defaultValue="" className="select-after">
    <Option value="1">1</Option>
    <Option value="2">2</Option>
    <Option value="3">3</Option>
  </Select>
);

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

const HandleReserveRoom = (props) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
    console.log(values);
  };

  const submit = () => {
    form.submit();
  };

  return (
    <div>
      <SimpleLayout>
        <div className={styles.container}>
          <div className={styles.wrap}>
            <Form
              form={form}
              layout="vertical"
              hideRequiredMark="true"
              onFinish={onFinish}
            >
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
                <Input addonAfter={selectAfter} />
              </Form.Item>
              <Form.Item label="类型" name="type">
                <CustomCheckbox />
              </Form.Item>
              <Form.Item label="开始时间" name="start">
                <DatePicker
                  defaultValue={moment('2015/01/01', dateFormat)}
                  format={dateFormat}
                  className={styles.dateInput}
                />
                <TimePicker
                  defaultValue={moment('12:08', format)}
                  format={format}
                  className={styles.timeInput}
                />
              </Form.Item>
              <Form.Item label="结束时间" name="end">
                <DatePicker
                  defaultValue={moment('2015/01/01', dateFormat)}
                  format={dateFormat}
                  className={styles.dateInput}
                />
                <TimePicker
                  defaultValue={moment('12:08', format)}
                  format={format}
                  className={styles.timeInput}
                />
              </Form.Item>
              <Form.Item name="period">
                <Checkbox.Group options={carmeraOptions} />
              </Form.Item>
            </Form>
            <Form.Item name>
              <div className={styles.btn}>
                <Space>
                  <Button
                    onClick={() => {
                      props.history.goBack();
                    }}
                  >
                    取消
                  </Button>
                  <Button htmlType="submit" onClick={submit}>
                    预订
                  </Button>
                </Space>
              </div>
            </Form.Item>
          </div>
        </div>
      </SimpleLayout>
    </div>
  );
};

export default HandleReserveRoom;
