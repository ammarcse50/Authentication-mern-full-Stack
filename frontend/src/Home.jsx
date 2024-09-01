import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

 axios.defaults.withCredentials = true
const Home = () => {


     const navigate = useNavigate()
     const [token, setToken] = useState(null);

     useEffect(() => {
         const token = getCookie('userToken');
         setToken(token);
     }, []);
 
     const getCookie = (name) => {
         const value = `; ${document.cookie}`;
         const parts = value.split(`; ${name}=`);
         if (parts.length === 2) return parts.pop().split(';').shift();
     }
 console.log(token);
 

    return (
        <div>
            <NavLink to="/" className="bg-orange-500 p-3 rounded">Home</NavLink>
           <NavLink   className="bg-orange-500 p-3 rounded">Sign Out</NavLink> 
           <NavLink  className="bg-orange-500 p-3 rounded" to="/login">Sign in</NavLink>
            <NavLink  className="bg-orange-500 p-3 rounded" to="/signup">Sign Up</NavLink>
        </div>
    );
};

export default Home;