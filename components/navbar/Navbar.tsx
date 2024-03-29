import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import React from 'react'
import { ActiveLink } from '@/components';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/pricing', label: 'pricing' },
]

export const Navbar = async () => {

  return (
    <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className='flex items-center'>
        <HomeIcon size={16} className='mr-2'/>
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {
        navItems.map((navItem) => (
          <ActiveLink key={navItem.href} {...navItem} />
        ))
      }

    </nav>
  )
}
