import React,{useState} from 'react'
import { RiMailLine,RiLockLine,RiEyeLine, RiEyeOffLine,RiUserLine} from "react-icons/ri";
import { Link,useParams,useNavigate } from "react-router-dom";
import { Formik, Form, Field,ErrorMessage } from "formik"; //, ErrorMessage
import * as Yup from "yup";
import { useUsers } from '../../context/userContex';

const Register = () => {

  const {register} = useUsers()

  const [showPass,setShowPass]= useState(false)

  const [name,setName]= useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")

  const [user, setUser] = useState({
    name: "",
    email: "",
    password:""
    
  });

  const handelShowPassword=()=>{
      setShowPass(!showPass)
  }

 

  return (
    <div className='bg-white p-8 rounded-lg w-full md:w-96'>
      <div className='mb-10'>
        <h1 className='text-3xl uppercase font-bold text-center'>Registrarse</h1>
      </div>
      <Formik
      initialValues={user}
      validationSchema={
        Yup.object({
          name: Yup.string().required("el nombre es requerido")
                            .min(3,"el nombre debe contener como minimo 3 caracteres")
                            .max(90,"el nombre debe contener un maximo de 90 caracteres"),
          email: Yup.string().email("debe ser un tipo de email valido")
                            .required('el campo es requerido'),
          password: Yup.string().required('el campo es requerido')
                            .min(6,"debe contener al menos 6 caracteres")
                            .max(15,"no debe super un maximo de 15 caracteres"),
        })
      }
      onSubmit={async (values) => {
       if (password === confirmPassword) {
          console.log("llegue al values",values);
         await register(values)
       }else{

         console.log("las pass no son iguales");
       }
      
      }}
        //esta funcio es de formik, y se utiliza para cargar los datos en el fomulario, es decir, formik carga inicialmete los datos vacios que se encuentran en el initialValue(),
          //luego cuando queremos editar y cargar con los datos que recogemos con el params, devemos recargar el formulario con los datos obtenido, enableReinitialize 
      enableReinitialize={true}
      >
        {({ handleSubmit }) => (
      <Form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-6'>

      <div className='relative '>
          <RiUserLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
          <Field 
          type="text"
          name="name" 
          className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
          placeholder='Nombre'
         />
          <ErrorMessage 
                  component="p"
                  className="text-red-600 text-sm"
                  name= "name"
                />
          
        </div> 

        <div className='relative '>
          <RiMailLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
          <Field 
          type="text"
          name="email" 
          className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
          placeholder='Email'
          />
           <ErrorMessage 
                  component="p"
                  className="text-red-600 text-sm"
                  name= "email"
                />
          
        </div>

        <div className='relative '>
          <RiLockLine  className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
          <Field 
          type={showPass ? "text":"password" }
          name="password"
          className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
          placeholder='Password'
          />
           <ErrorMessage 
                  component="p"
                  className="text-red-600 text-sm"
                  name= "password"
                />
         
          {showPass ? <RiEyeLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
                    : <RiEyeOffLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
                  }
        </div>

        {/* <div className='relative '>
          <RiLockLine  className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'/>
          <Field 
          type={showPass ? "text":"password" }
          name="confirmPassword"
          className='border border-gray-200 outline-none py-2 px-8 rounded-lg w-full ' 
          placeholder='Confirmar Password'
          />
            
          
          {showPass ? <RiEyeLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
                    : <RiEyeOffLine onClick={handelShowPassword} className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer'/>
                  }
        </div> */}

        <div>
          <button 
          type='submit'
          className='bg-sky-600 text-white w-full py-2 px-6 mt-6 rounded-lg hover:scale-105 transition-all'>Crear Cuenta</button>
        </div>
      </Form>
      )}
    </Formik>
      <div className='text-center'>¿ YA tienes una cuenta ? <Link to="/" className='text-sky-600 font-bold hover:underline transition-all'>Login</Link>
      </div>
    </div>
  )
}

export default Register