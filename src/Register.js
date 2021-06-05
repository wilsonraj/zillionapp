import React,{useState} from 'react'
import './register.css';
import logo from './image/1.jpg';
import {useHistory}from 'react-router-dom';



function Register() {
    const histroy=useHistory('');
    const [userName,setuserName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [conformpassword,setConformpassword]=useState('');

    
const register=(event)=>{
    event.preventDefault();
    auth.createUserWithPassword(email,password)
    .then((auth)=>{
        if(auth.user){
            auth.user.updateProfile({
                displayName:userName
            }).then((s) =>{
                histroy.push("/")
            }
            )
        }
    })

}
    return (
        <div className="register">
           <p id="ra">Register</p> 
               
           <div className="reg-border">
               <div className="reg-image">
               <img src={logo} alt="logo " id="logo-img"></img>
               </div>
               <div className="reg-details">
                   <p id="reg-welcome"> Way to ZD!</p>
                   <div className="regForm">

                       <p id="reg-text">
                       WELCOME TO JD FAMILY
                       </p>
                       <div className="reg-formcontrol">
                           <input type="text" className="username" onchange={(e)=>setuserName(e.target.value)} placeholder="User Name">  
                           </input>
                           <input type="text" className="password" onchange={(e)=>setEmail(e.target.value)} placeholder="Email iId">  
                           </input>
                           <input type="password" className="username" onchange={(e)=>setPassword(e.target.value)} placeholder="Password">  
                           </input>
                           <input type="password" className="password" onchange={(e)=>setConformpassword(e.target.value)} placeholder="Conform Password">  
                           </input>
                           <button onClick={register}>signup</button>
                       </div>
                       
                   </div>

               </div>
           </div>
        </div>
        
    )
}

export default Register
