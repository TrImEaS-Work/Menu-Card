import { NavLink, useLocation } from "react-router-dom"
import logo from '../assets/icon.jpg'
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"

export default function Nav() {
  const path = useLocation().pathname
  const [mobileMenu, setMobileMenu] = useState(true)

  return (
    <section className="flex justify-between items-center px-10 w-full h-20 bg-[#292929] border-b">
      <article className="flex h-12 w-12">
        <NavLink to='/'><img src={logo} className="rounded-full object-contain duration-300"/></NavLink>
      </article>

      <article className="max-sm:hidden block">
        <ul className="flex w-fit px-2 h-full gap-x-10 justify-center items-center text-[#fafafa]">
          <li><NavLink to='/' className={`${path === '/' ? 'isActive' : ''} border-b-2 border-transparent white-shadow-hover duration-300`}>Home</NavLink></li>
          <li><NavLink to='/precios' className={`${path === '/precios' ? 'isActive' : ''} border-b-2 border-transparent white-shadow-hover duration-300`}>Precios</NavLink></li>
          <li><NavLink to='/contacto' className={`${path === '/contacto' ? 'isActive' : ''} border-b-2 border-transparent white-shadow-hover duration-300`}>Contacto</NavLink></li>
          <ul className="flex gap-x-5 text-3xl">
            <a href={`https://wa.me/541133690584?text=Hola me comunico para consultar acerca de las cartas digitales, mi nombre es .`} target="_blank"><FaWhatsapp className="text-white white-shadow-hover duration-300"/></a>
            <a href="https://www.instagram.com/_trimeas_/" target="_blank"><FaInstagram className="text-white white-shadow-hover duration-300"/></a>
          </ul>
        </ul>
      </article>
      
      <article className='hidden relative text-white text-3xl max-sm:flex'>
        <FaBars onClick={()=> setMobileMenu(!mobileMenu)}/>

        <ul className={`${mobileMenu ? 'left-20 hidden' : 'left-[-110px]'} flex bg-[#292929] absolute flex-col text-2xl w-[180px] px-2 h-[50vh] top-[-25px] gap-10 justify-center items-center text-[#fafafa] z-20 rounded-md border duration-300`}>
          <li><NavLink onClick={()=> setMobileMenu(!mobileMenu)} to='/' className={`${path === '/' ? 'isActive' : ''} border-b-2 border-transparent white-shadow-hover duration-300`}>Home</NavLink></li>
          <li><NavLink onClick={()=> setMobileMenu(!mobileMenu)} to='/precios' className={`${path === '/precios' ? 'isActive' : ''} border-b-2 border-transparent white-shadow-hover duration-300`}>Precios</NavLink></li>
          <li><NavLink onClick={()=> setMobileMenu(!mobileMenu)} to='/contacto' className={`${path === '/contacto' ? 'isActive' : ''} border-b-2 border-transparent white-shadow-hover duration-300`}>Contacto</NavLink></li>
          <ul className="flex gap-x-5 text-3xl">
            <a onClick={()=> setMobileMenu(!mobileMenu)} href={`https://wa.me/541133690584?text=Hola me comunico para consultar acerca de las cartas digitales, mi nombre es .`} target="_blank"><FaWhatsapp className="text-white white-shadow-hover duration-300"/></a>
            <a onClick={()=> setMobileMenu(!mobileMenu)} href="https://www.instagram.com/_trimeas_/" target="_blank"><FaInstagram className="text-white white-shadow-hover duration-300"/></a>
          </ul>
        </ul>
      </article>

      <FaTimes onClick={()=> setMobileMenu(!mobileMenu)} className={`${mobileMenu ? 'hidden' : 'block'} text-white text-3xl absolute right-3 top-3 z-20`}/>
      
    </section>
  )
}