// components/Layout/Footer.js
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contents}>
        <h2 className={styles.title}>
        League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
        </h2>
      </div>
    </footer>
  )
}

export default Footer