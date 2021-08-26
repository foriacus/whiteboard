import styles from './index.less';

function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.left}>
        <li>首页</li>
        <li>云盘</li>
      </ul>
      <div className={styles.right}>
        <div>设置</div>
        <div className={styles.profile}></div>
      </div>
    </div>
  );
}

export default Header;
