import Chat from "./components/Chat/Chat"
import Main from "./components/Dashboard/Main"
import MainNavigation from "./components/MainNavigation"
import SideNav from "./components/SideNav"
import SideNavigation from "./components/SideNavigation"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import WebContentPage from "./components/WebContent/WebContentPage"
import Counsellor from "./components/Counsellor/Counsellor"
import Course from "./components/Courses/Course"
import Branch from "./components/branches/Branch"
import Enquiry from "./components/Enquiry"
import EnquiryComp from "./components/enquiries/Enquiry"
import Data from "./components/Data/Data"


const App=()=>{


  return (
    <>
   
    <div className="bg-gray-200">
    <BrowserRouter>
    <MainNavigation/>
    
    <div className="max-w-7xl   pt-28  mx-auto flex gap-8 ">       
       <div className=' border border-gray-200  rounded-lg w-2/12   h-fit  '>
       <SideNav/>
       </div>
      
       <div className=" rounded-md  w-5/6">
       <Routes>
       <Route path='/dashboard/' element={ <Main/>}></Route>
       <Route path='/chat/' element={ <Chat/>}></Route>
       <Route path='/content/' element={ <WebContentPage/>}></Route>
       <Route path='/academic-counsellors/' element={ <Counsellor/>}></Route>
       <Route path='/courses/' element={ <Course/>}></Route>
       <Route path='/branches/' element={ <Branch/>}></Route>
       <Route path='/enquiries/' element={ <EnquiryComp/>}></Route>
       <Route path='/company-data/' element={ <Data/>}></Route>
       </Routes>

       </div>
      
  

       </div>
       </BrowserRouter>
       </div>
      


       

    



    
    </>
  )
}

export default App