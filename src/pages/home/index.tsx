import styles from './index.less';
import SimpleLayout from '@/layout/simple-layout/SimpleLayout';
import JoinRoom from './components/JoinRoom';

export default function IndexPage() {
  return (
    <SimpleLayout>
      <div className={styles.container}>
        <div className={styles.btnGroup}>
          <JoinRoom />
        </div>
      </div>
    </SimpleLayout>
  );
}
