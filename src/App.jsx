import { Routes, Route } from "react-router-dom"
import Menu_card_1 from './Demos/Menu_card_1.jsx'
import Menu_card_2 from './Demos/Menu_card_2.jsx'
import Menus from './Components/Menus.jsx'
import Home from './Home.jsx'
import Nav from "./Components/Nav.jsx"
import ErrorPage from "./Components/ErrorPage.jsx"
import Prices from "./Components/Prices.jsx"
import Contact from "./Components/Contact.jsx"

export default function App() {
  return (
    <main className="m-0 p-0 font-body bg-[#fafafa] flex flex-col items-center min-h-screen w-full h-full">
      {/* <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/precios" element={<Prices/>}/>
        <Route path="/menu-card-1" element={<Menu_card_1/>}/>
        <Route path="/menu-card-2" element={<Menu_card_2/>}/>
        <Route path="/menu-card-2/menus" element={<Menus/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes> */}

        <div class="container">
      <header>
        <h1>Propuesta de Desarrollo Web</h1>
        <p><strong>Sistema de Pedidos vía WhatsApp - Básico</strong></p>
      </header>

      <section>
        <h2><i class="fas fa-laptop-code"></i> Características del Sitio</h2>
        <div class="feature-grid">
          <div class="feature-item">
            <i class="fas fa-route"></i>
            <div>
              <strong>Multi-rutas:</strong> Inicio, Menús, Acerca de nosotros,
              Contacto y más.
            </div>
          </div>
          <div class="feature-item">
            <i class="fas fa-paint-brush"></i>
            <div>
              <strong>Diseño Personalizado:</strong> Adaptado a la identidad
              visual de tu marca.
            </div>
          </div>
          <div class="feature-item">
            <i class="fas fa-user-check"></i>
            <div>
              <strong>Memoria de Usuario:</strong> Los datos del cliente se
              guardan para agilizar futuros pedidos.
            </div>
          </div>
          <div class="feature-item">
            <i class="fas fa-map-marked-alt"></i>
            <div>
              <strong>Sección Nosotros:</strong> Información local y mapa
              interactivo de Google Maps.
            </div>
          </div>
          <div class="feature-item">
            <i class="fas fa-print"></i>
            <div>
              <strong>Integración con Ticketera:</strong> Programa de
              comunicación para impresión directa en ticketera.
            </div>
          </div>
          <div class="feature-item">
            <i class="fas fa-shield-alt"></i>
            <div>
              <strong>Seguridad:</strong> Backup de datos semanal y soporte
              técnico incluido.
            </div>
          </div>
        </div>
      </section>

      <section class="admin-panel">
        <h2><i class="fas fa-user-cog"></i> Panel Administrativo</h2>
        <p>Control total sobre tu negocio desde un solo lugar:</p>
        <ul>
          <li>Gestión de <strong>Menús y Banner</strong>.</li>
          <li>
            Edición de <strong>Información General</strong> (Nosotros y
            Contacto).
          </li>
          <li>
            <strong>Métricas:</strong>
            <ul>
              <li>Ventas por fecha (diaria, semanal, mensual).</li>
              <li>Top 10 Menús más pedidos.</li>
              <li>Top 10 Menús más buscados/clicheados.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2><i class="fas fa-tags"></i> Inversión del Proyecto</h2>
        <p>Instalacion + preparativos del programa (Pago único):</p>
        <table class="pricing-table">
          <thead>
            <tr>
              <th>Modalidad</th>
              <th>Inversión Total</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Contado / Transferencia</strong></td>
              <td class="price-tag">$200,000.00</td>
              <td><span class="badge">Mejor Precio</span></td>
            </tr>
            <tr>
              <td><strong>Financiado (Plan A)</strong></td>
              <td class="price-tag">$250,000.00</td>
              <td>1 Adelanto + 1 Cuota ($125,000.00 c/u)</td>
            </tr>
            <tr>
              <td><strong>Financiado (Plan B)</strong></td>
              <td class="price-tag">$315,000.00</td>
              <td>1 Adelanto + 2 Cuotas ($105,000.00 c/u)</td>
            </tr>
          </tbody>
        </table>

        <div class="server-cost">
          Mantenimiento + Alojamiento del Servidor + Dominio (Mensual): $50,000.00
        </div>
      </section>

      <footer>
        <p>Propuesta válida por los próximos 30 días.</p>
        <p>
          <i class="fab fa-whatsapp"></i> Soporte técnico básico vía WhatsApp
          incluido.
        </p>
      </footer>
    </div>
    </main>
  )
}
