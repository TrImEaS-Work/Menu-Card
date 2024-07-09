import { FaArrowLeft, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from '../assets/restaurant-logo.jpg'
import menuData from '../Data/food-2.json'

export default function Menus() {
  const location = useLocation()
  const navigate = useNavigate()
  const menuQuery = new URLSearchParams(location.search).get('menu')

  const categoriesMap = {
    '1': 'Platos Principales',
    '2': 'Entradas',
    '3': 'Platos Principales',
    '4': 'Platos Principales',
    '5': 'Platos Principales',
    '6': 'Guarniciones'
  }

  const renderMenuContent = (menuCategory) => {
    const category = categoriesMap[menuCategory]
    
    if (!menuData || !menuData.comidas) {
      return <div className="text-white">Error: No se pudieron cargar los datos del menú.</div>
    }
  
    const filteredItems = menuData.comidas.filter(item => item.categoria === category)

    return (
      <div>
        {filteredItems.map((item, index) => (
          <div key={index} className={`${index === 0 ? 'border-t' : ''} flex justify-between border-b p-5 max-sm:px-2 gap-x-2 max-sm:text-sm text-[#fafafa]`}>
            <div className="flex flex-col gap-y-3">
              <h3 className="text-start text-yellow-100">{item.nombre}</h3>
              <p className="text-start">{item.descripcion}</p>
              <p className="text-start pt-4 text-yellow-100">${item.precio}</p>
            </div>
            <img src={item.img} alt={item.nombre} className="w-[200px] h-[200px] max-sm:w-[130px] max-sm:h-[130px] rounded-xl object-cover" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className='flex flex-col gap-5 pt-5 w-full min-h-screen items-center justify-between bg-[#292929]'>
      <nav className="relative bg-[#292929] border-black h-full w-full px-10 gap-y-2 flex items-center justify-center flex-col">
        <section className='flex justify-center items-center w-full'>
          <NavLink to='/menu-card-2' className='absolute top-4 left-4 text-xl font-bold text-yellow-300'><FaArrowLeft/></NavLink>
          <img 
            src={logo} 
            className="w-[160px] border border-yellow-100 z-10 h-[70px] p-4 bg-gray-300 rounded-ee-2xl rounded-tl-2xl rounded-md object-cover"
          />
        </section>
        
        <i className='text-2xl font-bold text-yellow-200'>Nuestros Menus</i>
      </nav>

      <div className="flex flex-col items-center gap-5 text-center">
        {renderMenuContent(menuQuery)}
      </div>

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
