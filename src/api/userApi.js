import axios from 'axios'   
const url=' http://localhost:3000/api/v1' 
//all user

export const getUsersReq=async(token)=>{
    try {
        const res = await axios.get("/usuario",{
            eaders:{
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log("API userAPI  getUsersssss-----> 🤐🤐🤐🤐");
        return error.response
    }
}

//one User
export const getUserReq =async (id,token)=>{
    try {
        const res = await axios.get(`/usuario/:${id}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log("API userAPI getUser -----> 🤐🤐🤐🤐");
        return error.response.data
    }
}

//Login 
export const loginReq =async(user)=>{
    
    try {
        const res = await axios.post(url+"/usuario/login",user)
        return res.data
    } catch (error) {
        console.log("API userAPI LOGIN -----> 🤐🤐🤐🤐");
        return error.response.data;
    }
}
//Register
export const createUserReq = async (user)=>{

    console.log("Voy A viajar al back 😉😉😉😉😉",user);
    try {
        const form = new FormData()
        for (let key in user) {
            form.append(key, user[key]);
          }
          console.log(form);
          const res = await axios.post(url+"/usuario",user)
        // const res = await axios.post(url+'/usuario',form,{
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //       }
        // })
        console.log("BACK res",res);
        if (res.status != 200) {
            return res.response.message
        }
        return res.data
    } catch (error) {
        console.log("BACK catch error");
        return error.response.data
    }
}


