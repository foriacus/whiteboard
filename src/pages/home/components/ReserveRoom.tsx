import React from 'react';
import { history } from 'umi';
import styles from './ReserveRoom.less';

const ReserveRoom = () => {
  return (
    <div>
      <div
        className={styles.card}
        onClick={() => history.push('/handle-reserve-room')}
      >
        <div className={styles.circle}>
          <div>
            <i className="ri-alarm-line"></i>
          </div>
        </div>
        预订房间
      </div>
    </div>
  );
};

export default ReserveRoom;
