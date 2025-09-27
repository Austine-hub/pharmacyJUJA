import { useState } from 'react'
import Navbar from './components/navbar'
import Topbar from './components/Topbar'
import Products1 from './pages/Products1'
import Footer from './components/Footer'
import TopProducts from './pages/TopProducts'
import Brands from './pages/Brands'
import Brands1 from './brands/Brands1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Topbar/>
      <Navbar/>
      <TopProducts/>
      <Brands1/>
      <Products1/>
      <Brands/>
      <Footer/>
    </>
  )
}

export default App
