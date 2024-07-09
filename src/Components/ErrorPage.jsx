import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import error_img from '../assets/error-img.jpg'

export default function ErrorPage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = `No se ha encontrado la ruta | Technology Line`
  }, [location.search, navigate])

  return (
    <div className='flex relative flex-col min-h-[520px] justify-between gap-2 py-7 px-3'>
      <img 
        src={error_img}
        className='absolute bottom-5 left-[-13px] w-full h-[450px] object-contain'
      />

      <div className='z-20 flex flex-col gap-2'>
        <h1 className='text-4xl font-bold'>Error 404</h1>
        <span className='text-xl'>
          Lo sentimos, no hemos encontrado la ruta que estas buscando...
        </span>
      </div>

      <div className='flex items-center justify-center z-20'>
        <button 
          onClick={() => navigate('/')}
          className='border border-black py-2 px-4 rounded-lg hover:bg-black hover:text-white duration-500 font-bold'>
          Volver a home
        </button>
      </div>
    </div>
  )
}