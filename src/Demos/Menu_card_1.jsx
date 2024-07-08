import { NavLink } from 'react-router-dom'
import logo from '../assets/restaurant-logo.jpg'
import wave from '../assets/wave.svg'
import menu from '../Data/food.json'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaArrowLeft } from 'react-icons/fa'

export default function Menu_card_1 () {
  const menus = menu.comidas
  const categories = ['Entradas', 'Platos Principales', 'Guarniciones', 'Postres'];

  return(
    <>
      <header className="relative h-full w-full py-3 bg-[#fafafa] flex items-center justify-center">
        <NavLink to='/' className='absolute top-4 left-4 text-xl font-bold'><FaArrowLeft/></NavLink>
        <img 
          src={logo} 
          className="w-[200px] z-10 h-[200px] border-4 border-orange-300 rounded-full object-contain"
        />
      </header>

      <section className="flex flex-col items-center min-h-screen w-full py-5 bg-[#111] gap-y-10 eliptical-top rounded-t-xl mt-12">
        {categories.map((category) => (
          <article key={category} className="flex flex-col gap-y-5 items-center w-full px-5">
            <h2 className="text-2xl text-orange-200 ">
              {category}
            </h2>

            <div className="flex flex-col gap-y-3 w-4/5 max-sm:w-full">
              {menus
                .filter((menu) => menu.categoria === category)
                .map((menu) => 
                (
                  <div key={menu.nombre} className="flex flex-col gap-y-2 p-4 rounded-lg w-full">
                    <p className="flex justify-between gap-x-3 items-center">
                      <span className="text-orange-400 text-lg sm:text-xl">
                        {menu.nombre}
                      </span>
                      <span className="flex text-orange-400 font-bold sm:text-lg">
                        ${menu.precio}
                      </span>
                    </p>

                    <p className="text-orange-100 sm:text-lg">
                      {menu.descripcion}
                    </p>
                  </div>
                ))
              }
            </div>
            
            {/* <span className="w-full h-1 bg-orange-500"></span> */}
            <img src={wave} alt="" />
          </article>
        ))}

        <footer className="bg-[#111] h-full w-full px-5 flex flex-col gap-y-3 items-center justify-center">
          <span className="text-white text-2xl">Nuestras redes</span>
          <ul className="flex gap-x-5 text-3xl">
            <a href="#" target="_blank"><FaWhatsapp className="text-orange-400"/></a>
            <a href="#" target="_blank"><FaFacebook className="text-orange-400"/></a>
            <a href="#" target="_blank"><FaInstagram className="text-orange-400"/></a>
            <a href="#" target="_blank"><FaTwitter className="text-orange-400"/></a>
          </ul>
          <span className="text-white text-center text-[10px]">Powered by TrImEaS</span>
        </footer>
      </section>
    </>
  )
}