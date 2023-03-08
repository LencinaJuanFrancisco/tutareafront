import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    
  } from "react";
  import { useNavigate } from "react-router-dom";

  import {loginReq,createUserReq} from '../api/userApi'

  const userContex = createContext()

  export const useUsers = () => {
    const context = useContext(userContex);
    return context;
  };

  export const UsersProvaider = ({children}) =>{
     
    const navigate = useNavigate()
    //const navigate = useNavigate()

    //pongo los datos del usuario loguedado
    const [userLogued, setUserLogued] = useState([]);
    //creo este estado asi, una ves registrodo lo redirecciono al login y cargo los datos sel usuario sin volver a solicitarlos 
    const [userRegister, setUserRegiste] = useState(""); 


    const login = async (userLog)=>{
        try {
            console.log("ENYTRA AL MENOS AL LOGIN LPM");
            const res = await loginReq(userLog)
            console.log("loginREQ-----",res);
            if (res.status === 200) {
                setUserLogued(res)
                console.log("Usuario Logueado 😎😎😎😎😎");
                navigate("dashboard")
            }
           
        } catch (error) {
            console.log("error en el contex de usuario LOGIN");
            return error.message
        }
    }
    const register = async (userReg)=>{
        try {
            console.log("que llega aca", userReg);
            const res = await createUserReq(userReg)
            console.log("respuesta de context userContex RGISTER" , res);
        } catch (error) {
            console.log("error de context usercontex catch error", error);
        }
    }

    return (
        <userContex.Provider 
        value={{
            login,
            setUserLogued,
            setUserRegiste,
            register,
            userLogued,
            userRegister
            }}>
            {children}
        </userContex.Provider>
    )

  }