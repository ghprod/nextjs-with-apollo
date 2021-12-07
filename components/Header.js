import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Home (Static)</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/client-side">
              <a>Client</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/server-side">
              <a>Server</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}