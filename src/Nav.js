
import './Nav.css'
import logo from './logo.svg';
import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



export default function Nav() {
   
    const Location=useLocation();
    useEffect(() => {
      
      
    }, [Location])
    return (
        <div>
              
            <div className="jk">
            <div id="img">
                <img src={logo} alt="news"/>
            </div>
            <div id="title">
                RealNotes
            </div>
            <div id="category">
                <ul>
                        <li><Link to="/Home"style= {(Location.pathname==="/Home")?{"color":"white"}:{"color":"rgb(161, 161, 161)"}}>Home</Link></li>
                <li><Link to="/About" key="Business" style= {(Location.pathname==="/About")?{"color":"white"}:{"color":"rgb(161, 161, 161)"}}>About</Link></li>
                <li><Link to="/SignIn" key="Sport" style= {(Location.pathname==="/SignIn")?{"color":"white"}:{"color":"rgb(161, 161, 161)"}}>SignIn</Link></li>
                <li><Link  to="/ContactUs" key="Technology" style= {(Location.pathname==="/ContactUs")?{"color":"white"}:{"color":"rgb(161, 161, 161)"}}>ContactUs</Link></li>
                <li><Link  to="/Status" key="Science" style= {(Location.pathname==="/Status")?{"color":"white"}:{"color":"rgb(161, 161, 161)"}}>Status</Link></li>
               
                </ul>
                
              
            </div>
         
           
        </div>
            
        </div>
    )
}


