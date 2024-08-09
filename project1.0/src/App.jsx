import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
 
   <Navbar/> 
   <Routes>
<Route path='/' element={<Home/>}/> 
<Route path='/coin/:coinId' element={<Coin/>}/> 
<Route path='/home/:homeId' element={<Home/>}/> 

</Routes>
<Footer/>
   </>
  )
}

export default App
