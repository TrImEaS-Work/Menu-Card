import { NavLink } from 'react-router-dom'
import img_menu_1 from './assets/demo-img/menu-card.png'
import img_menu_2 from './assets/demo-img/menu-card-2.png'

export default function Home () {
  return (
    <section className="bg-[#111] text-[#fafafa] min-h-screen h-full w-full flex flex-wrap max-sm:flex-col p-5 max-sm:pt-14 sm:pb-[200px] sm:justify-center gap-5">
      <h1 className='flex justify-center items-center font-semibold text-2xl w-full'>Seleccione una carta para ver demo</h1>
    
      <article className="relative flex flex-col border-2 border-[#fafafa] w-3/4 max-sm:w-full max-w-[500px] rounded-sm h-[500px] max-sm:h-[350px]">
        <div className='flex h-full w-full white-shadow-hover bg-[#111] opacity-20 z-10 items-center justify-center hover:opacity-100 duration-300'>
          <NavLink to='/menu-card-1' className='white-shadow-hover duration-300 text-black font-bold text-2xl z-10 cursor-pointer border-2 p-2 px-5 bg-white rounded-lg'>Ver demo</NavLink>
        </div>
        <img src={img_menu_1} className='z-0 object-cover absolute h-full w-full select-none'/>
      </article>

      <article className="relative flex flex-col border-2 border-[#fafafa] w-3/4 max-sm:w-full max-w-[500px] rounded-sm h-[500px] max-sm:h-[350px]">
        <div className='flex h-full w-full white-shadow-hover bg-[#111] opacity-20 z-10 items-center justify-center hover:opacity-100 duration-300'>
          <NavLink to='/menu-card-2' className='white-shadow-hover duration-300 text-black font-bold text-2xl z-10 cursor-pointer border-2 p-2 px-5 bg-white rounded-lg'>Ver demo</NavLink>
        </div>
        <img src={img_menu_2} className='z-0 object-fill absolute h-full w-full select-none'/>
      </article>
    </section>
  )
}