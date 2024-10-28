import React, { useEffect } from 'react'
import userContext from './userContext'
import { useState } from 'react'

function Usercontextprovider(props) {

    const [userName,setUserName]=useState("");
    const [chatMember,setChatMember]=useState("")
    
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
    

        await setname(user.username)
        console.log(userName)
    
    return res
}
const setname=async(uname)=>{
  setUserName(uname)
}
const setChatMemberName=async(uname)=>{
  setChatMember(uname)
}



  return (
    
    <div>
        <userContext.Provider value={{userName,loginapi,chatMember,setChatMemberName}}>
            {props.children}
        </userContext.Provider>
      
    </div>
  )
}

export default Usercontextprovider


