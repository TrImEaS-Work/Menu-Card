import { FaCheck } from 'react-icons/fa'

export default function Prices() {
  return (
    <section className='w-full gap-12 flex-wrap min-h-screen sm:pt-22 text-gray-50 bg-[#111] flex justify-center py-[80px] px-5'>
      <article className="new-shadow-cyan hover:scale-105 flex flex-col gap-5 new-shadow-cyan-hover duration-300 max-w-[400px] min-w-[250px] w-full h-[400px] p-[28px] relative border rounded-xl">
        <p className='flex max-sm:flex-col w-full justify-between'>
          <span className='font-bold text-2xl text-cyan-100 w-full max-sm:pt-8'>Carta Basica</span>
          <span className='font-bold text-2xl text-cyan-100 max-sm:absolute max-sm:right-5 max-sm:top-5 max-sm:text-lg'>USD119.99</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Instalacion gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Mantenimiento por 1 mes gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Backup de datos por 1 mes gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Y mas cosas...</span>
        </p>
        <div className='h-[70px] absolute bottom-5 w-full flex items-end'>
          <a 
            href='https://wa.me/541135790133?text=Hola me comunico para consultar acerca del paquete de carta basica, mi nombre es .' 
            className='font-bold px-3 py-2 rounded-xl new-shadow-cyan-hover hover:scale-105 duration-300 border w-fit h-fit text-cyan-100 border-cyan-100'>Contratar</a>
        </div>
      </article>

      <article className="new-shadow-cyan hover:scale-105 flex flex-col gap-5 new-shadow-cyan-hover duration-300 max-w-[400px] min-w-[250px] w-full h-[400px] p-[28px] relative border rounded-xl">
        <p className='flex max-sm:flex-col w-full justify-between'>
          <span className='font-bold text-2xl text-cyan-100 w-full max-sm:pt-8'>Carta Avanzada</span>
          <span className='font-bold text-2xl text-cyan-100 max-sm:absolute max-sm:right-5 max-sm:top-5 max-sm:text-lg'>USD189.99</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Instalacion gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Mantenimiento por 2 meses gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Backup de datos por 2 meses gratis</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Y mas cosas...</span>
        </p>
        <div className='h-[70px] absolute bottom-5 w-full flex items-end'>
          <a 
            href='https://wa.me/541135790133?text=Hola me comunico para consultar acerca del paquete de carta avanzada, mi nombre es .' 
            className='font-bold px-3 py-2 rounded-xl new-shadow-cyan-hover hover:scale-105 duration-300 border w-fit h-fit text-cyan-100 border-cyan-100'>Contratar</a>
        </div>
      </article>

      <article className="new-shadow-cyan hover:scale-105 flex flex-col gap-5 new-shadow-cyan-hover duration-300 max-w-[400px] min-w-[250px] w-full h-[400px] p-[28px] relative border rounded-xl">
        <p className='flex w-full justify-between'>
          <span className='font-bold text-2xl text-cyan-100 w-full max-sm:pt-4'>Personalizada</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Mantenimiento con descuento</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Posibilidad de diseño totalmente personalizado</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Posibilidad de financiacion de pago</span>
        </p>
        <p className='flex items-center gap-x-2'>
          <FaCheck className='text-cyan-200'/>
          <span className='max-sm:text-sm'>Y mas cosas...</span>
        </p>
        <div className='h-[70px] absolute bottom-5 w-full flex items-end'>
          <a 
            href='https://wa.me/541135790133?text=Hola me comunico para consultar acerca de el paquete personalizado para cartas digitales, mi nombre es ' 
            className='font-bold px-3 py-2 rounded-xl new-shadow-cyan-hover hover:scale-105 duration-300 border w-fit h-fit text-cyan-100 border-cyan-100'>Contratar</a>
        </div>
      </article>
    </section>
  )
}