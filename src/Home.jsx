import { NavLink } from 'react-router-dom'
import img_menu_1 from './assets/demo-img/menu-card.png'
import img_menu_2 from './assets/demo-img/menu-card-2.png'

export default function Home () {
  return (
    <section className="bg-gray-800 text-[#fafafa] min-h-screen w-full flex flex-col justify-center items-center p-10 gap-10">
      <h1 className='font-semibold text-xl w-full'>Seleccione una carta para ver demo</h1>
      <article className="relative flex flex-col border-2 border-[#fafafa] w-3/4 max-sm:w-full max-w-[400px] rounded-lg h-[400px] max-sm:h-[300px]">
        <div className='flex h-full w-full bg-[#111] opacity-20 z-10 items-center justify-center hover:opacity-100 duration-300'>
          <NavLink to='/menu-card-1' className='text-black font-bold text-2xl z-10 cursor-pointer border-2 p-2 px-5 bg-white rounded-lg'>Ver demo</NavLink>
        </div>
        <img src={img_menu_1} className='z-0 object-cover absolute h-full w-full select-none'/>
      </article>

      <article className="relative flex flex-col border-2 border-[#fafafa] w-3/4 max-sm:w-full max-w-[400px] rounded-lg h-[400px] max-sm:h-[300px]">
        <div className='flex h-full w-full bg-[#111] opacity-20 z-10 items-center justify-center hover:opacity-100 duration-300'>
          <NavLink to='/menu-card-2' className='text-black font-bold text-2xl z-10 cursor-pointer border-2 p-2 px-5 bg-white rounded-lg'>Ver demo</NavLink>
        </div>
        <img src={img_menu_2} className='z-0 object-fill bg-bottom absolute h-full w-full select-none'/>
      </article>
    </section>
  )
}