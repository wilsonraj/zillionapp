import React from 'react'
import './sidebar.css'
import {Sidebardata}from "./Sidebardata";



function Sidebar() {
    return (
        <div className="sidebar-containter">
            .
            <div className="sidebar-border">
            <ul className="sidebar-data">
                {Sidebardata.map((val,key)=>{
                    return(
                        <li
                        key={key}
                        className="row"
                        id={window.location.pathname==val.link ? "active":""}
                        onClick={()=>{
                            window.location.pathname=val.link
                        }}
                        >
                        <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
           
                  

            </div>
            <div className="logo-containter">
                
            </div>
        
        </div>
    )
    
}

export default Sidebar
