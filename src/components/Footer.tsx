'use client'

import styles from '@/styles/footer.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

const lists = [
  {
    name: 'Quick Links',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' }
    ]
  },
  {
    name: 'Social Links',
    links: [
      { name: 'GitHub', href: 'https://github.com/dentonflake/' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dentonflake/' },
      { name: 'Instagram', href: 'https://www.instagram.com/dentonflake/' },
      { name: 'Facebook', href: 'https://www.facebook.com/dentonflake/' },
    ]
  },
  {
    name: 'Featured Work',
    links: [
      { name: 'Flake Family', href: 'https://dentonflake.github.io/wdd231/final/' },
      { name: 'Hawkins Chamber of Commerce', href: 'https://dentonflake.github.io/wdd231/chamber/' },
      { name: 'The Divine Gift of Forgiveness', href: 'https://school.dentonflake.com/institute' },
    ]
  }
]

const Footer = () => {

  const pathname = usePathname()

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        {lists.map(({ name, links }) => (
          <div key={name} className={styles.list}>
            <h6 className={styles.title}>{name}</h6>
            <ul className={styles.list}>
              {links.map(({ name, href }) => {
                const isInternal = href.startsWith('/')
                return (
                  <li className={styles.item} key={name}>
                    {isInternal
                      ? <Link className={clsx(styles.link, { [styles.active]: pathname === href })} href={href}>{name}</Link>
                      : <a href={href} className={styles.link} target="_blank"> {name}</a>}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </footer>
  )
}

export default Footer