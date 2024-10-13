import React, { useEffect } from 'react'
import userContext from './userContext'
import { useState } from 'react'

function Usercontextprovider(props) {

    const [userName,setUserName]=useState("");
    let flag=false
    const loginapi=async(user)=>{
        const response = await fetch(`http://localhost:8000/auth/p/login/`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
           
            body: JSON.stringify(user),
    })
    const res=await response.json();
    if(localStorage.getItem('atoken'))
    {

        setUserName(user.username)
        console.log(userName)
    }
    return res
}

useEffect(() => {
        setUserName(userName) // Logs userName whenever it changes
}, [flag]);

  return (
    
    <div>
        <userContext.Provider value={{userName,loginapi}}>
            {props.children}
        </userContext.Provider>
      
    </div>
  )
}

export default Usercontextprovider


