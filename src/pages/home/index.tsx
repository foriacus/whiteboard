import styles from './index.less';
import SimpleLayout from '@/layout/simple-layout/SimpleLayout';
import JoinRoom from './components/JoinRoom';
import CreateRoom from './components/CreateRoom';
import ReserveRoom from './components/ReserveRoom';
import { Space } from 'antd';

export default function IndexPage() {
  return (
    <SimpleLayout>
      <div className={styles.container}>
        <div className={styles.btnGroup}>
          <Space>
            <JoinRoom />
            <CreateRoom />
            <ReserveRoom />
          </Space>
        </div>
      </div>
    </SimpleLayout>
  );
}
