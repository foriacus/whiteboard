import Header from './Header';
import 'remixicon/fonts/remixicon.css';
import styles from './index.less';

function SimpleLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default SimpleLayout;
