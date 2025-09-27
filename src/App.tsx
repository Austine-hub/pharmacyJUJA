import { useState } from 'react'
import Navbar from './components/navbar'
import Topbar from './components/Topbar'
import Products1 from './pages/Products1'
import Footer from './components/Footer'
import TopProducts from './pages/TopProducts'
import HealthConditionCarousel from './pages/HealthConditions'
import Products2 from './pages/Products2'
import Products3 from './pages/Products3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Topbar/>
      <Navbar/>
      <HealthConditionCarousel/>
      <TopProducts/>
      <Products2/>
      <Products1/>
      <Products3/>
      <Footer/>
    </>
  )
}

export default App
