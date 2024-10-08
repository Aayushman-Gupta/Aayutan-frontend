const getchatid=async (username1,username2)=>{

    const chatid = await fetch("http://localhost:8000/chat/create-chat-session/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4Mzk2MjI4LCJpYXQiOjE3MjgzMDk4MjgsImp0aSI6IjJiYzg3ZjVkMDcyYTQ2MWFiYjU4YjRlNTU3MzliYjlkIiwidXNlcl9pZCI6Mn0.WOkh747jT3LjN2pHznPSH2pU79pmOGmWfxiZBm27FtU',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({username1,username2}), // body data type must match "Content-Type" header
      });
      const cid= await chatid.json();
      return cid
}
export default getchatid;