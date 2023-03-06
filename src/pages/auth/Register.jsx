import React,{useState} from 'react'
import { RiMailLine,RiLockLine,RiEyeLine, RiEyeOffLine,RiUserLine} from "react-icons/ri";
import {Link} from 'react-router-dom'

const Register = () => {
  const [showPass,setShowPass]= useState(false)

  const [name,setName]= useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handelShowPassword=()=>{
      setShowPass(!showPass)
  }

  const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(email," ", password);
  }

  return (
    <div className='bg-white p-8 rounded-lg w-full md:w-96'>
      <div className='mb-10'>
        <h1 className='text-3xl uppercase font-bold text-center'>Registrarse</h1>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>

      <div className='relative '>
          <RiUserLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
          <input type="text" 
          className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
          placeholder='Nombre'
          value={name}
          onChange={(e)=>{setEmail(e.target.value)}}>
          </input>
        </div> 

        <div className='relative '>
          <RiMailLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
          <input type="email" 
          className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
          placeholder='Email'
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}>
          </input>
        </div>

        <div className='relative '>
          <RiLockLine  className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
          <input type={showPass ? "text":"password" }
          className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
          placeholder='Password'
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}>
            
          </input>
          {showPass ? <RiEyeLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
                    : <RiEyeOffLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
        }
        </div>

        <div className='relative '>
          <RiLockLine  className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
          <input type={showPass ? "text":"password" }
          className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
          placeholder='Confirmar Password'
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}>
            
          </input>
          {showPass ? <RiEyeLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
                    : <RiEyeOffLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
        }
        </div>

        <div>
          <button className='bg-sky-600 text-white w-full py-2 px-6 mt-6 rounded-lg hover:scale-105 transition-all'>Crear Cuenta</button>
        </div>
      </form>
      <div className='text-center'>¿ YA tienes una cuenta ? <Link to="/" className='text-sky-600 font-bold hover:underline transition-all'>Login</Link>
      </div>
    </div>
  )
}

export default Register