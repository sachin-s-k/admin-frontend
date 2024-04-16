import { axiosInstance } from "../../config/http"


export const getCompanyDetails=async()=>{
    try{
        const response= await axiosInstance.get('/company/company-all-data')
          console.log(response,'ressss');
          
        return response
    }
    catch(error){
        throw error
    }   
    
}



