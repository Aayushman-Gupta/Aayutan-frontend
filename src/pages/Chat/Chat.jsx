import React from 'react'
import ChatList from '../../components/ChatList'
import Chatroom from '../../components/Chatroom'
import { Stack } from '@mui/material'
import Header from '../../components/Header'


function Chat() {
  return (
    <div>
 
      <Stack direction="row" sx={{ width: "100%", height: "100vh" }}>
        
        <ChatList sx={{ flex: 1 }}/>
        <Chatroom sx={{ flex: 1 }}/>
      </Stack>
      
    </div>
  )
}

export default Chat
