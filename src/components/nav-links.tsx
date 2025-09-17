import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const NavLinks = () => {

  return (
    <nav>
      {
        links.map(link => {

          return (
            <Link
              href={link.href}
            
            >{link.name}</Link>
          )
        })
      }
    </nav>
  )
}