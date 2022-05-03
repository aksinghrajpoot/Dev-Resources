import { useState, } from 'react'
import Link from 'next/link';
import Img from 'next/image';
import Styles from './Header.module.css'


export default function Header() {
  const menu = [
    {id:1, title: "Home", slug: "/" },
    {id:2, title: "About", slug: "/about" },
    {id:3, title: "Gallery", slug: "/gallery" },
    {id:4, title: "Services", slug: "/category" },
  ]
  const [navOpen, setNavOpen] = useState(false);
  const navToggle = () => setNavOpen(!navOpen);
  const navClose = () => setNavOpen(false);
  return <>
    <header className={`${Styles.header} bg-white relative`}>
      <div onClick={navClose} className={`${navOpen ? `${Styles.overlay} ` : ""} md:hidden scrol`}></div>

      <div className='container flex flex-row h-14 md:h-14 items-center justify-between'>

        {/* Hamburger Menu Start*/}
        <div className='left md:hidden'>
          <div onClick={navToggle} className={` ${Styles.menu_bar} `}>
            <span></span><span></span><span></span>
          </div>
        </div>

        {/* Website Logo Start*/}
        <div className='between items-center select-none cursor-pointer'>
          <div>
            <div className='flex items-center bg-gradient-to-b hover:bg-gradient-to-l gd-primary bg-clip-text text-transparent ease-linear duration-100 hover:animate-pulse'>
              <div className='text-3xl tracking-tighter mr-1'>&lt;/&gt;</div>
              <div className='font-bold'>
                <Link href='/'><span className='h-full block leading-4'> DEV <br />RESOURCES</span></Link>
              </div>
            </div>
            {/* <Link href="/"><Img src='/images/site/logo.png' width={120} height={30} /></Link> */}
          </div>
        </div>
        {/* Github Icon Start*/}
        <div className='right md:hidden'>
          <div>
            <a target="_" href="https://github.com/aksinghrajpoot"><Img src='/images/site/github.svg' width={18} height={18} /></a>
          </div>
        </div>

        {/* Responsive Menu for desktop and mobile */}
        <nav className={`${navOpen ? `translate-x-0` : "-translate-x-full"} nav_main`}>

          <ul className={`nav_ul`}>
            <div className='border-b border-beta border-opacity-20 px-4 md:hidden'>
              <Link href="/"><Img src='/images/site/logo.png' width={120} height={30} /></Link>
            </div>
            {menu.map((Links) =>
              <Link key={Links.id} href={Links.slug}><li className='cursor-pointer' onClick={navClose}>{Links.title}</li></Link>
            )}
          </ul>
        </nav>

        {/* Desktop right side */}
        <div className='hidden md:flex'>
          <button className='bg-beta bg-opacity-80 hover:bg-opacity-100 text-light py-1 px-4'>Browse All</button>
        </div>

      </div>
    </header>


  </>
}