import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-2 border-b-black'>
      <Link href='/'>
        <Image src={Logo} alt='Logo' className='w-28 object-contain' />
      </Link>
      <Link
        href='/create-post'
        className='font-inter font-medium border-black border-2 text-black px-4 py-2 rounded-md hover:bg-black hover:text-white'>
        Create
      </Link>
    </header>
  )
}

export default Header
