import React, { useEffect, useState,useRef, useContext } from 'react';
import getchatid from './chatapi';
import { AttachFile, Send } from '@mui/icons-material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { IconButton, Stack } from '@mui/material';
import MessageComponent from '../../components/messagecomponent';
import userContext from '../../context/userContext/userContext';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);  // Store the WebSocket connection in state
  const [chatId, setChatId] = useState(null);  // Store the chat ID
  const containerRef = useRef(null);
  const context=useContext(userContext)
  const {userName}=context
  
  // Fetch the chat ID and establish a WebSocket connection
  useEffect(() => {
    const fetchChatIdAndConnect = async () => {
      try {
        const newSocket = new WebSocket(`ws://localhost:8000/ws/chat/${userName}/`);
        setSocket(newSocket);  // Save the WebSocket connection in state

        // Handle incoming messages
        newSocket.onmessage = function (event) {
          const data = JSON.parse(event.data);
          console.log(data)
          setMessages((prevMessages) => [...prevMessages, data]);
        };

        newSocket.onerror = (error) => {
          console.error("WebSocket error:", error);
        };

        // Clean up the WebSocket connection when the component unmounts
        return () => {
          newSocket.close();
        };
      } catch (error) {
        console.error("Error fetching chat ID or establishing WebSocket:", error);
      }
    };

    fetchChatIdAndConnect();
  }, []);  // Only run this effect once, when the component mounts

  

  const scrollToBottom = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (socket && message) {
      socket.send(JSON.stringify({ message,"sender_username":'yash',"receiver_username":"yash2" }));
      setMessage("");  // Clear the message input
    }
  }

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing="border-box"
        padding="1rem"
        spacing="1rem"
        bgcolor="#e4f5f5"
        height="85%"
        sx={{
          overflowX: "hidden",
          overflowY: 'scroll',
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {messages &&
          messages.map((i, index) => (
            <MessageComponent key={index} message_data={i}  />
          ))
        }
        
      </Stack>
      <form
        style={{ height: "12%" }}
        onSubmit={handleSubmit}
      >
        <Stack
          direction="row"
          height="100%"
          padding="1rem"
          alignItems="center"
          position="relative"
        >
          
          {/* <IconButton
            sx={{
              position: "absolute",
              left: "2.75rem",
            }}
            onClick={setIsmenuHandler}
          >
            <AttachFile />
          </IconButton> */}
          {/* <IconButton
            sx={{
              position: "absolute",
              left: "1.25rem",
            }}
            onClick={call}
            
          >
            <VideoCallIcon/>
          </IconButton> */}

          <input
            placeholder='Type your Message....'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              height: "100%",
              width: "100%",
              padding: "0 4rem",
              borderRadius: "1.5rem",
              backgroundColor: "white",
              border: "none",
              outline: "none",
            }}
          />
          <IconButton
            type='submit'
            sx={{
              backgroundColor: "#2a9cc9",
              height: "97%",
              width: "5%",
              marginLeft: "0.5rem",
            }}
          >
            <Send />
          </IconButton>
        </Stack>
      </form>
    </>
  );
};

export default Chat;