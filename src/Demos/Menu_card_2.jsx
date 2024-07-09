import { NavLink } from 'react-router-dom'
import logo from '../assets/restaurant-logo.jpg'
import wave from '../assets/wave.svg'
import menu from '../Data/food.json'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaArrowLeft, FaBars } from 'react-icons/fa'

export default function Menu_card_2 () {
  const menus = menu.comidas
  const categories = ['Entradas', 'Platos Principales', 'Guarniciones', 'Postres'];

  return (
    <section className='flex flex-col gap-5 pt-5 w-full min-h-screen items-center justify-between bg-[#292929]'>
      <nav className="relative bg-[#292929] border-black h-full w-full px-10 gap-y-2 flex items-center justify-center flex-col">
        <section className='flex justify-center items-center w-full'>
          <NavLink to='/' className='absolute top-4 left-4 text-xl font-bold text-yellow-300'><FaArrowLeft/></NavLink>
          <img 
            src={logo} 
            className="w-[160px] border border-yellow-100 z-10 h-[70px] p-4 bg-gray-300 rounded-ee-2xl rounded-tl-2xl rounded-md object-cover"
          />
        </section>
        
        <i className='text-2xl font-bold text-yellow-200'>Nuestros Menus</i>
      </nav>
      
      <h1 className='px-8 text-center max-sm:text-sm font-medium text-white max-w-[600px]'>"La cocina de autor es poner tu personalidad en lo que haces y ese sentimiento la conviene en algo distinto."</h1>

      <section className='flex flex-col h-full w-full gap-3 items-center'>
        <article className='flex justify-center items-center max-w-[600px] w-4/5 h-[70px] py-4 px-6 border rounded-sm bg-[#292929] border-yellow-100' id='menu-1'>
          <NavLink to='/menu-card-2/menus?menu=1' className='flex justify-center items-center border text-white font-bold border-yellow-100 w-full h-full max-w-[430px]'>
            <h2 className='max-sm:text-sm text-yellow-200 bg-slate-600 bg-opacity-50 w-full h-full flex justify-center items-center'>CARTA Y POSTRES</h2>
          </NavLink>
        </article>

        <article className='flex justify-center items-center max-w-[600px] w-4/5 h-[70px] py-4 px-6 border rounded-sm bg-[#292929] border-yellow-100' id='menu-2'>
          <NavLink to='/menu-card-2/menus?menu=2' className='flex justify-center items-center border text-white font-bold border-yellow-100 w-full h-full max-w-[430px]'>
            <h2 className='max-sm:text-sm text-yellow-200 bg-slate-600 bg-opacity-50 w-full h-full flex justify-center items-center'>MENU DEL DIA</h2>
          </NavLink>
        </article>
        
        <article className='flex justify-center items-center max-w-[600px] w-4/5 h-[70px] py-4 px-6 border rounded-sm bg-[#292929] border-yellow-100' id='menu-3'>
          <NavLink to='/menu-card-2/menus?menu=3' className='flex justify-center items-center border text-white font-bold border-yellow-100 w-full h-full max-w-[430px]'>
            <h2 className='max-sm:text-sm text-yellow-200 bg-slate-600 bg-opacity-50 w-full h-full flex justify-center items-center'>MENU DE NOCHE</h2>
          </NavLink>
        </article>

        <article className='flex justify-center items-center max-w-[600px] w-4/5 h-[70px] py-4 px-6 border rounded-sm bg-[#292929] border-yellow-100' id='menu-4'>
          <NavLink to='/menu-card-2/menus?menu=4' className='flex justify-center items-center border text-white font-bold border-yellow-100 w-full h-full max-w-[430px]'>
            <h2 className='max-sm:text-sm text-yellow-200 bg-slate-600 bg-opacity-50 w-full h-full flex justify-center items-center'>MENU SABADO</h2>
          </NavLink>
        </article>

        <article className='flex justify-center items-center max-w-[600px] w-4/5 h-[70px] py-4 px-6 border rounded-sm bg-[#292929] border-yellow-100' id='menu-5'>
          <NavLink to='/menu-card-2/menus?menu=5' className='flex justify-center items-center border text-white font-bold border-yellow-100 w-full h-full max-w-[430px]'>
            <h2 className='max-sm:text-sm text-yellow-200 bg-slate-600 bg-opacity-50 w-full h-full flex justify-center items-center'>MENU DE GRUPO</h2>
          </NavLink>
        </article>

        <article className='flex justify-center items-center max-w-[600px] w-4/5 h-[70px] py-4 px-6 border rounded-sm bg-[#292929] border-yellow-100' id='menu-6'>
          <NavLink to='/menu-card-2/menus?menu=6' className='flex justify-center items-center border text-white font-bold border-yellow-100 w-full h-full max-w-[430px]'>
            <h2 className='max-sm:text-sm text-yellow-200 bg-slate-600 bg-opacity-50 w-full h-full flex justify-center items-center'>TAKE AWAY</h2>
          </NavLink>
        </article>
      </section>

      <footer className="bg-[#222] h-full w-full p-5 flex flex-col gap-y-3 items-center justify-center">
        <i className="text-white text-2xl font-semibold">Nuestras redes</i>
        <ul className="flex gap-x-5 text-2xl">
          <a href="/menu-card-2/#" target="_blank"><FaWhatsapp className="text-yellow-300"/></a>
          <a href="/menu-card-2/#" target="_blank"><FaFacebook className="text-yellow-300"/></a>
          <a href="/menu-card-2/#" target="_blank"><FaInstagram className="text-yellow-300"/></a>
          <a href="/menu-card-2/#" target="_blank"><FaTwitter className="text-yellow-300"/></a>
        </ul>
        <i className="text-white text-center text-[10px] font-semibold">Powered by TrImEaS</i>
      </footer>
    </section>
  )
}