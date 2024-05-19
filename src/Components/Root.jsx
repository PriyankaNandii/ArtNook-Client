import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet} from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const Root = () => {
    const location = useLocation();
    console.log(location);
   
    useEffect(() =>{
       if (location.pathname === '/'){
           document.title = `ArtNook - Home`
       }else{
           document.title= `ArtNook ${location.pathname.replace("/", "- ")}`
       }if (location.state){
           document.title = location.state
       }
       
    },[location.pathname, location.state])
    return (
        <div>
           <Navbar/> 
           <div className="min-h-screen">
           <Outlet/>
           </div>
           <Footer />
        </div>
    );
};

export default Root;