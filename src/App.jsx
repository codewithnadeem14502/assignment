import Dashboard from './components/pages/Dashboard'
import PieChart from './components/charts/PieChart'
import LineChart from "./components/charts/LineChart"

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Transaction from './components/pages/Transaction'
import User from './components/pages/User'
import Schedule from './components/pages/Schedule'
import Setting from './components/pages/Setting'
import Contact from './components/pages/Contact'
import Help from './components/pages/Help'
import './index.css'
import Sidebar from './components/Sidebar'
function App() {

  return (
    <>
        <BrowserRouter>
        <div className='flex'>

        <Sidebar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/transaction' element={<Transaction/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='/setting' element={<Setting/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/help' element={<Help/>}/>
          </Routes>
        </div>
        </BrowserRouter>
         
    </>
  )
}

export default App
