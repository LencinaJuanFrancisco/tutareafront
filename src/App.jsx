
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthLayouts from './layouts/auth/AuthLayouts'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from '../src/pages/dashboard/Dashboard'
import Error404 from './pages/404'
import './App.css'
import { UsersProvaider } from './context/userContex'


function App() {


  return (
    <BrowserRouter>
    <UsersProvaider>

      <Routes>
        <Route path='/' element={<AuthLayouts/>}>
          <Route index element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    
    </UsersProvaider>
    </BrowserRouter>
  )
}

export default App
