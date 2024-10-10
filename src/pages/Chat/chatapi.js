const getchatid=async (username1,username2)=>{

    const chatid = await fetch("http://localhost:8000/chat/create-chat-session/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4NjU0Mzk3LCJpYXQiOjE3Mjg1Njc5OTcsImp0aSI6IjFkYzIwZmZlN2Y3MjQwMDZiOTUxYzM2MTM2ZmYxZTMwIiwidXNlcl9pZCI6MX0.ku4ktjR78rzocHEHqG66ju8BYES71mff97UhKD_fiHA',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({username1,username2}), // body data type must match "Content-Type" header
      });
      const cid= await chatid.json();
      return cid
}
export default getchatid;