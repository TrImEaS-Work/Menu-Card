import { Routes, Route } from "react-router-dom"
import Menu_card_1 from './Demos/Menu_card_1.jsx'
import Menu_card_2 from './Demos/Menu_card_2.jsx'
import Home from './Home.jsx'

export default function App() {
  return (
    <main className="m-0 p-0 font-body bg-[#fafafa] flex flex-col items-center min-h-screen w-full h-full">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu-card-1" element={<Menu_card_1/>}/>
        <Route path="/menu-card-2" element={<Menu_card_2/>} />
      </Routes>
    </main>
  )
}
