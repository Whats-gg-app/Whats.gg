import styles from './Header.module.css'

// components/Layout/Header.js

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <nav className={styles.nav}>
          <ul>
            <li><a className={styles.menuLink} href='#'>홈</a></li>
            <li><a className={styles.menuLink} href='#'>멀티서치</a></li>
            <li><a className={styles.menuLink} href='#'>듀오</a></li>
            <li><a className={styles.menuLink} href='#'>커뮤니티</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header