'use client'

import styles from '@/styles/header.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
]

const Header = () => {

  const pathname = usePathname()

  return (
    <header className={styles.header}>

      <Link
        href='/'
        className={styles.link}
      >
        <p className={styles.logo}>D<span className={styles.slash}>/</span>F</p>
      </Link>

      <nav className={styles.nav}>
        {
          links.map(({ name, href }) => (
            <Link
              key={name}
              className={clsx(styles.link, { [styles.active]: pathname === href })}
              href={href}
            >
              {name}
            </Link>
          ))
        }
      </nav>

    </header>
  )
}

export default Header