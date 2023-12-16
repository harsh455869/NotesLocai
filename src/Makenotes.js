import React,{useState,useEffect} from 'react'
import './Makenotes.css'
import Nav from './Nav'

export default function Makenotes() {
  
    const [not, setnot] = useState({title:"",description:"",tag:""})
    
    
     
      
       
    

    return (
        <div>
            <Nav/>
           
            <div id="main">
               
                <form>
                <div className="dat">Title</div>
                <center>
                <input type="text" name="title" id="title" />
                </center>
                <div className="dat"  >Description</div>
                <center>
                <textarea name="description" id="description" cols="30" rows="10" ></textarea>
                </center>
                <div className="dat" >Tag</div>
                <center>
                <input type="text" id="tag" name="tag" /></center>
                <center>
                <div id="btnp">
                <button type="submit" className="noteb" >Submit</button>
                <button type="reset" className="noteb">Reset</button></div>
                </center>
                </form>
               
            </div>
           
        </div>
    )
}
