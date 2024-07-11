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
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/precios" element={<Prices/>}/>
        <Route path="/menu-card-1" element={<Menu_card_1/>}/>
        <Route path="/menu-card-2" element={<Menu_card_2/>}/>
        <Route path="/menu-card-2/menus" element={<Menus/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </main>
  )
}
