'use client'

import styles from '@/styles/header.module.css'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import clsx from 'clsx'

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
]

const Header = () => {

  const pathname = usePathname()

  return (
    <header className={styles.header}>

      <p className={styles.logo}>D<span className={styles.slash}>/</span>F</p>

      <nav className={styles.nav}>
        {links.map(link => (
          <Link
            key={link.name}
            className={clsx(styles.link, { [styles.active]: pathname === link.href })}
            href={link.href}
          >{link.name}</Link>
        ))}
      </nav>

    </header>
  )
}

export default Header