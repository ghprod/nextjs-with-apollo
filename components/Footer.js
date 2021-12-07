import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://github.dev/ghprod/nextjs-with-apollo">GitHub</a>
        </li>
      </ul>
    </footer>
  )
}