import { NavLink, useLocation } from "react-router-dom"
import logo from '../assets/icon.jpg'
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Nav() {
  const path = useLocation().pathname

  return (
    <section className="flex justify-between items-center px-10 w-full h-20 bg-[#292929] border-b">
      <article className="flex h-12 w-12">
        <NavLink to='/'><img src={logo} className="rounded-full object-contain duration-300"/></NavLink>
      </article>

      <article>
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
    </section>
  )
}