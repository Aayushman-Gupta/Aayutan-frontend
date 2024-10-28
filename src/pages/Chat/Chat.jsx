import React from 'react'
import ChatList from '../../components/ChatList'
import Chatroom from '../../components/Chatroom'
import { Stack } from '@mui/material'
import Header from '../../components/Header'


function Chat() {
  return (
    <div>
 
      <Stack direction="row">
        
        <ChatList/>
        <Chatroom/>
      </Stack>
      
    </div>
  )
}

export default Chat
