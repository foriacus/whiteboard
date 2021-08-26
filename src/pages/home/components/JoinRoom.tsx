import styles from './JoinRoom.less';
import { Modal, Input, Checkbox } from 'antd';
import React, { useState } from 'react';

const carmeraOptions = [
  { label: '开启麦克风', value: 1 },
  { label: '开启摄像头', value: 2 },
];

function JoinRoom() {
  const [visible, setVisible] = useState(false);
  const [roomId, setRoomId] = useState('');

  const showModal = () => {
    setVisible(true);
  };

  const onRoomChange = (e) => {
    setRoomId(e.target.value);
  };

  const onCheckboxChange = (e) => {
    console.log('onCheckboxChange', e);
  };

  // 加入
  const joinRoom = () => {
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
        onCancel={cancelJoin}
      >
        <>
          <div>房间号</div>
          <Input placeholder="请输入房间号" onChange={onRoomChange} />
          <div>加入选项</div>
          <Checkbox.Group
            options={carmeraOptions}
            onChange={onCheckboxChange}
          />
        </>
      </Modal>
    </>
  );
}

export default JoinRoom;
