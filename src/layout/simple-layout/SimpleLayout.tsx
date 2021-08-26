import Header from './Header';
import 'remixicon/fonts/remixicon.css';
import styles from './index.less';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

function SimpleLayout({ children }) {
  return (
    <ConfigProvider locale={zhCN}>
      <Header />
      <div className={styles.content}>{children}</div>
    </ConfigProvider>
  );
}

export default SimpleLayout;
