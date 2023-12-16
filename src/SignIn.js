import React from 'react'
import Nav from './Nav'
import './SignIn.css'
export default function SignIn() {


  
   

    return (
        <div>
            <Nav/>
           
            <form className="formp">
                {/* <div>UserName</div>
                <center>
                <input type="text" name="name" id="name"  onChange={onchange}/>
                </center> */}
                <div>Email</div>
                <center>
                <input type="email" name="email" id="email" />
                </center>
                <div>Password</div>
                <center>
                <input type="password"  name="password" id="password" />
               
                <button type="submit" >SignIn</button>
                </center>
                

            </form>
           
        </div>
    )
}
