"use client";

import Link from 'next/link';
import React from 'react'
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
    href: string;
    label: string;
}

export const ActiveLink = ({ href, label }: Props) => {

  const pathName = usePathname();

  return (
    <Link key={href} href={href} className={`${style.link} ${pathName === href ? style['active-link'] : ""}`} >{label}</Link>
  )
}
