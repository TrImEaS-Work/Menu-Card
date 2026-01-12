import { Routes, Route } from "react-router-dom"
// Importa tus componentes aquí...

export default function App() {
  return (
    <main className="m-0 p-0 font-sans bg-[#fafafa] flex flex-col items-center min-h-screen w-full">
      {/* <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/precios" element={<Prices/>}/>
        ...
      </Routes> 
      */}

      <div className="w-full max-w-4xl bg-white my-4 md:my-10 p-6 md:p-12 rounded-xl shadow-lg border border-gray-100">
        
        {/* Header */}
        <header className="text-center border-b-2 border-green-500 pb-6 mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800">Propuesta de Desarrollo Web</h1>
          <p className="text-lg text-green-600 font-semibold mt-2">Sistema de Pedidos vía WhatsApp - Básico</p>
        </header>

        {/* Características */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-700 border-l-4 border-green-500 pl-4 mb-6">
            <i className="fas fa-laptop-code mr-2"></i> Características del Sitio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <i className="fas fa-route text-green-500 mt-1 mr-4"></i>
              <p className="text-sm md:text-base text-gray-700"><strong>Multi-rutas:</strong> Inicio, Menús, Acerca de nosotros, Contacto y más.</p>
            </div>
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <i className="fas fa-paint-brush text-green-500 mt-1 mr-4"></i>
              <p className="text-sm md:text-base text-gray-700"><strong>Diseño Personalizado:</strong> Adaptado a la identidad visual de tu marca.</p>
            </div>
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <i className="fas fa-user-check text-green-500 mt-1 mr-4"></i>
              <p className="text-sm md:text-base text-gray-700"><strong>Memoria de Usuario:</strong> Datos guardados para agilizar pedidos futuros.</p>
            </div>
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <i className="fas fa-map-marked-alt text-green-500 mt-1 mr-4"></i>
              <p className="text-sm md:text-base text-gray-700"><strong>Sección Nosotros:</strong> Info local y Google Maps interactivo.</p>
            </div>
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <i className="fas fa-print text-green-500 mt-1 mr-4"></i>
              <p className="text-sm md:text-base text-gray-700"><strong>Integración Ticketera:</strong> Impresión directa de pedidos.</p>
            </div>
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <i className="fas fa-shield-alt text-green-500 mt-1 mr-4"></i>
              <p className="text-sm md:text-base text-gray-700"><strong>Seguridad:</strong> Backup semanal y soporte técnico incluido.</p>
            </div>
          </div>
        </section>

        {/* Panel Administrativo */}
        <section className="mb-10 bg-green-50 p-6 rounded-xl border border-green-100">
          <h2 className="text-xl font-bold text-slate-700 mb-4">
            <i className="fas fa-user-cog mr-2"></i> Panel Administrativo
          </h2>
          <p className="text-gray-700 mb-4">Control total sobre tu negocio:</p>
          <ul className="space-y-2 text-gray-700 ml-2">
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Gestión de Menús y Banner.</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Edición de Información General.</li>
            <li className="mt-4">
              <strong className="text-green-700 font-bold block mb-1">Métricas de Negocio:</strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pl-4">
                <span>• Ventas por fecha (Diaria/Semanal/Mensual)</span>
                <span>• Top 10 Menús más pedidos</span>
                <span>• Top 10 Menús más buscados</span>
              </div>
            </li>
          </ul>
        </section>

        {/* Precios - Responsive Table/Cards */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-700 border-l-4 border-green-500 pl-4 mb-6">
            <i className="fas fa-tags mr-2"></i> Inversión del Proyecto
          </h2>
          <p className="text-gray-600 mb-4 italic text-sm">Costo del programa (Pago único):</p>
          
          {/* Vista para Tablet/Desktop */}
          <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="p-4">Modalidad</th>
                  <th className="p-4">Inversión Total</th>
                  <th className="p-4">Detalle</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4 font-semibold">Contado / Transferencia</td>
                  <td className="p-4 text-green-600 font-bold text-lg">$400,000.00</td>
                  <td className="p-4"><span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full uppercase">Mejor Precio</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Financiado (Plan A)</td>
                  <td className="p-4 text-green-600 font-bold text-lg">$480,000.00</td>
                  <td className="p-4 text-sm">1 Adelanto + 2 Cuotas de $160,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Financiado (Plan B)</td>
                  <td className="p-4 text-green-600 font-bold text-lg">$550,000.00</td>
                  <td className="p-4 text-sm">1 Adelanto + 5 Cuotas de $91,666</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Vista para Celular */}
          <div className="md:hidden space-y-4 text-center">
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <div className="text-xs uppercase text-green-600 font-bold">Contado</div>
              <div className="text-2xl font-bold text-slate-800">$400,000.00</div>
              <div className="text-sm text-gray-500">Transferencia o Efectivo</div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-xs uppercase text-gray-400 font-bold">Plan A</div>
              <div className="text-2xl font-bold text-slate-800">$480,000.00</div>
              <div className="text-sm text-gray-500 italic">1 Adelanto + 2 cuotas de $160,000</div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-xs uppercase text-gray-400 font-bold">Plan B</div>
              <div className="text-2xl font-bold text-slate-800">$550,000.00</div>
              <div className="text-sm text-gray-500 italic">1 Adelanto + 5 cuotas de $91,666</div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-center text-yellow-800 font-semibold">
            Mantenimiento y Alojamiento del Servidor (Mensual): $30,000.00
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm border-t pt-6">
          <p>Propuesta válida por los próximos 30 días.</p>
          <p className="flex justify-center items-center gap-2 mt-2 text-green-600 font-medium">
            <i className="fab fa-whatsapp"></i> Soporte técnico básico incluido
          </p>
        </footer>
      </div>
    </main>
  )
}