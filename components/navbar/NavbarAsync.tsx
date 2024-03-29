import Link from 'next/link';
import React from 'react'

const temporalAsync = () => {
  //Funcion "serverside"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Temporal async function');
      resolve("Resuelto!");
    }, 3500);
  });
}


export const Navbar = async () => {

  await temporalAsync();


  return (
    <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"></div>
      <Link href="/about" className="mr-2">About</Link>
      <Link href="/contact" className="mr-2">Contact</Link>
      <Link href="/pricing" className="mr-2">pricing</Link>
    </nav>
  )
}
