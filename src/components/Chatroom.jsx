import React, { useEffect, useState,useRef, useContext } from 'react';
import { AttachFile, Send } from '@mui/icons-material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { IconButton, Stack } from '@mui/material';
import userContext from '../context/userContext/userContext';
import MessageComponent from './messagecomponent'

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);  // Store the WebSocket connection in state
  const [chatId, setChatId] = useState(null);  // Store the chat ID
  const containerRef = useRef(null);
  const context=useContext(userContext)
  const {userName,chatMember,setChatMemberName}=context

  // Fetch the chat ID and establish a WebSocket connection
  useEffect(() => {
    const fetchChatIdAndConnect = async () => {
      try {
        

        const newSocket = new WebSocket(`ws://localhost:8000/ws/chat/${userName}/`);
        setSocket(newSocket);  // Save the WebSocket connection in state

        newSocket.onopen = function(event) {
          console.log('WebSocket connection established');
      };

        // Handle incoming messages
        newSocket.onmessage = async function (event) {
          const data = JSON.parse(event.data);
        //   console.log(data)
          await setChatMemberName(data.sender_username)
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
      scrollToBottom();
      console.log(chatMember)
      setMessages((prevMessages) => [...prevMessages, {message,sender_username:userName}]);
      socket.send(JSON.stringify({ message,receiver_username: {chatMember} }));
      setMessage("");  // Clear the message input
    }
  }

  return (
    <>
    <Stack 
        direction="column"
        height="100vh" // Full height of the viewport
        width="100vw" // Full width of the viewport
        spacing={0} // No spacing between children
      >
        <Stack
          ref={containerRef}
          flex={1} // Takes available space
          padding="1rem"
          bgcolor="#e4f5f5"
          spacing="20px"
          sx={{
            overflowX: "hidden",
            overflowY: 'auto', // Use 'auto' to show scroll only when needed
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {messages &&
            messages.map((msg, index) => (
              <MessageComponent key={index} message_data={msg} />
            ))}
        </Stack>
        
        <form
          onSubmit={handleSubmit}
          style={{ padding: '1rem', flexShrink: 0 }} // Ensure the form doesn't shrink
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <input
              placeholder='Type your Message....'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                flex: 1, // Take up remaining space
                padding: "0.5rem 1rem",
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
                height: "100%", // Match input height
                width: "48px", // Fixed width for button
              }}
            >
              <Send />
            </IconButton>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default Chatroom;