import React, { useEffect, useState } from 'react';
import getchatid from './chatapi';

const Chat = async () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    let socket;
    const id = await getchatid('yash', 'yash2')
    console.log(id.data.chat_id)

    // Create a new WebSocket connection
    useEffect(() => {
        const PORT = process.env.PORT || 8000;
        socket = new WebSocket(`ws://localhost:${PORT}/ws/chat/${id.data.chat_id}/`);

        // Handle incoming messages
        socket.onmessage = function (event) {
            const data = JSON.parse(event.data);
            setMessages(prevMessages => [...prevMessages, data.message]);
        };

    }, [])
    const sendMessage = () => {
        socket.send(JSON.stringify({ 'message': message }));
        setMessage("");
    }

    return (
        <div>
            <div>
                csdvnjibnfjssv
            </div>
            <div>
                {messages.map((msg, index) => <div key={index}>{msg}</div>)}
            </div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;