
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthLayouts from './layouts/auth/AuthLayouts'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Error404 from './pages/404'
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayouts/>}>
          <Route index element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
