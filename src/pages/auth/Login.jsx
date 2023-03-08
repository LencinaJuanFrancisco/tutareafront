import React,{useState} from 'react'
import { RiMailLine,RiLockLine,RiEyeLine, RiEyeOffLine} from "react-icons/ri";
import {Link} from 'react-router-dom'
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik"; //, ErrorMessage
import {useUsers} from './../../context/userContex'


const Login = () => {
  
  const [showPass,setShowPass]= useState(false)

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handelShowPassword=()=>{
      setShowPass(!showPass)
  }
  const {login}=useUsers()
 

  return (
    <div className='bg-white p-8 rounded-lg w-full md:w-96'>
      <div className='mb-10'>
        <h1 className='text-3xl uppercase font-bold text-center'>Iniciar sesión</h1>
      </div>
      <Formik
        initialValues={{email: "",password:""}}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("debe ser un tipo de email valido")
            .required("el campo es requerido"),
          password: Yup.string()
            .required("el campo es requerido"),
        })}
        onSubmit={async(values)=>{
          console.log(values);
          setEmail(values.email);
          setPassword(values.password);
            await login(values);
        }}
      >
        {({handleSubmit})=>(

          <Form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>
            
            <div className='relative'>
              <RiMailLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
              <Field 
              component="input"
              name="email" 
              type="name"
              className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
              placeholder='Email'
              // value={email}
              // onChange={(e)=>{setEmail(e.target.value)}}
              />
              <ErrorMessage
                  component="p"
                  className="text-red-600 text-sm"
                  name="email"
                  />
              
            </div>

            <div className='relative'>
              <RiLockLine  className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
              <Field type={showPass ? "text":"password" }
              className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
              placeholder='Password'
              name="password"
              autoComplete="on"
              // value={password}
              // onChange={(e)=>{setPassword(e.target.value)}}
              />
              <ErrorMessage
                  component="p"
                  className="text-red-600 text-sm"
                  name="password"
                />
             
              {showPass ? <RiEyeLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
              : <RiEyeOffLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
            }
          </div>

            <div>
              <button className='bg-sky-600 text-white w-full py-2 px-6 mt-6 rounded-lg hover:scale-105 transition-all'
              onClick={(e)=>{e.stopPropagation()}}
              type="submit"
              >
                Login
              </button>
            </div>
          </Form>
          )

        }
      </Formik>
      <div className='text-center'>¿ NO tienes una cuenta ? <Link to="register" className='text-sky-600 font-bold hover:underline transition-all'>Registrate</Link>
      </div>
    </div>
  )
}

export default Login