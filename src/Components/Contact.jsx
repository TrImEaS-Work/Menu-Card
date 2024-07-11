import { useEffect, useState } from 'react'

export default function Contact() {
  return (
    <section className='w-full min-h-screen text-gray-50 bg-[#111] flex justify-center items-center p-4'>
      <form 
        method="POST" 
        action="https://getform.io/f/3ca3d9db-d6ea-445b-863d-1d78e596c2c2"
        className='flex flex-col max-w-[600px] h-full w-full'>
      <div className='pb-8'>
        <p className='text-4xl inline border-b-4 text-gray-50 border-white'>
          Contacto
        </p>
        <p className='py-4'>
          // Completa el siguiente formulario o enviame un mail a: trimeas@hotamil.com
        </p>
      </div>
      <div className='flex flex-col gap-3'>
        <input 
          className='outline-none white-shadow-focus duration-300 placeholder:text-[#666] text-black bg-[#ccd6f6] p-2 rounded-md' 
          type="text" 
          placeholder='Nombre completo'
          name='name'/>
        <input 
          className='outline-none white-shadow-focus duration-300 placeholder:text-[#666] text-black dy-4 p-2 bg-[#ccd6f6] rounded-md' 
          type="email" 
          placeholder='Email'
          name='email'/>
        <textarea 
          className='outline-none white-shadow-focus duration-300 placeholder:text-[#666] text-black bg-[#ccd6f6] p-2 rounded-md' 
          name="message" 
          rows="10"
          placeholder='Escribe tu mensaje aqui'
        />
      </div>
      <button className='border-2 white-shadow-hover border-white hover:text-black hover:bg-white duration-300 px-4 py-2 my-8 mx-auto flex items-center rounded-lg'>
        Enviar
      </button>
      </form>
    </section>
  )
}