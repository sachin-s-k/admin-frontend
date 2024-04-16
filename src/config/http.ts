import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:'http://localhost:3000/admin'
})

axiosInstance.interceptors.request.use(
    (config)=>{
    console.log('hellllo');
    
        // const accessToken:string=JSON.parse(localStorage.getItem("adminToken"))
        // if(accessToken){
        //     if(config.headers){
        //         config.headers.token=accessToken
        //     }
        // }
return config
    }  
    ,
   (error)=>{
    return Promise.reject(error)

   }
)

axiosInstance.interceptors.response.use(
    function(response){
        return response
    },
    function(error){
        return Promise.reject(error)
    }
)