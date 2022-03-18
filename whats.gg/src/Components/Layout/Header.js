import styles from './Header.module.css'
import { BrowserRouter, Link } from 'react-router-dom'

// components/Layout/Header.js

const Header = () => {
  return (
    
    <header className={styles.header}>
      <div>
        <nav className={styles.nav}>
          <ul>
            <li><a className={styles.menuLink} href='/'>홈</a></li>
            <li><a className={styles.menuLink} href='multisearch'>멀티서치</a></li>
            <li><a className={styles.menuLink} href='duo'>듀오</a></li>
            <li><a className={styles.menuLink} href='community'>커뮤니티</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
  )
}

export default Header