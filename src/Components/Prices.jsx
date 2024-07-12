import { FaCheck } from 'react-icons/fa'

export default function Prices() {
  return (
    <section className='w-full gap-12 flex-wrap min-h-[883px] text-gray-50 bg-[#111] flex justify-center py-[50px] p-10'>
      <article className="new-shadow-cyan hover:scale-105 flex flex-col gap-5 new-shadow-cyan-hover duration-300 w-[400px] h-[400px] p-[28px] border rounded-xl">
        <p className='flex w-full justify-between'>
          <span className='font-bold text-2xl text-cyan-100'>Carta Basica</span>
          <span className='font-medium text-2xl text-cyan-100'>USD119.99</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Instalacion gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Mantenimiento por 1 mes gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Backup de datos por 1 mes gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Y mas cosas...</span>
        </p>
        <div className='h-[170px] pt-3 w-full flex items-end'>
          <a 
            href='https://wa.me/541135790133?text=Hola me comunico para consultar acerca del paquete de carta basica, mi nombre es .' 
            className='font-bold px-3 py-2 rounded-xl new-shadow-cyan-hover hover:scale-105 duration-300 border w-fit h-fit text-cyan-100 border-cyan-100'>Contratar</a>
        </div>
      </article>

      <article className="new-shadow-cyan hover:scale-105 flex flex-col gap-5 new-shadow-cyan-hover duration-300 w-[400px] h-[400px] p-[28px] border rounded-xl">
        <p className='flex w-full justify-between'>
          <span className='font-bold text-2xl text-cyan-100'>Carta Avanzada</span>
          <span className='font-medium text-2xl text-cyan-100'>USD189.99</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Instalacion gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Mantenimiento por 2 meses gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Backup de datos por 2 meses gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Y mas cosas...</span>
        </p>
        <div className='h-[170px] pt-3 w-full flex items-end'>
          <a 
            href='https://wa.me/541135790133?text=Hola me comunico para consultar acerca del paquete de carta avanzada, mi nombre es .' 
            className='font-bold px-3 py-2 rounded-xl new-shadow-cyan-hover hover:scale-105 duration-300 border w-fit h-fit text-cyan-100 border-cyan-100'>Contratar</a>
        </div>
      </article>

      <article className="new-shadow-cyan hover:scale-105 flex flex-col gap-5 new-shadow-cyan-hover duration-300 w-[400px] h-[400px] p-[28px] border rounded-xl">
        <p className='flex w-full justify-between'>
          <span className='font-bold text-2xl text-cyan-100'>Personalizada</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Instalacion con descuento</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Mantenimiento con descuento</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Posibilidad de diseño totalmente personalizado</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Posibilidad de financiacion de pago</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span>Y mas cosas...</span>
        </p>
        <div className='h-[70px] w-full flex items-end'>
          <a 
            href='https://wa.me/541135790133?text=Hola me comunico para consultar acerca de el paquete personalizado para cartas digitales, mi nombre es ' 
            className='font-bold px-3 py-2 rounded-xl new-shadow-cyan-hover hover:scale-105 duration-300 border w-fit h-fit text-cyan-100 border-cyan-100'>Contratar</a>
        </div>
      </article>
    </section>
  )
}