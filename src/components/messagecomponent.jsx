// import { Typography } from '@mui/material';
// import React, { memo } from 'react';
// import moment from 'moment';
// const MessageComponent = ({ message, user }) => {
//   if (!message) return null; // Return null if message is undefined

//   const { sender, content, attachments = [], createdAt } = message;
//   const sameSender = sender?._id === user?._id;

//   const timeAgo =moment(createdAt)
//    .fromNow();

//   return (
//     <div
//       style={{
//         alignSelf: sameSender ? 'flex-end' : 'flex-start',
//         backgroundColor:sameSender ? 'white' : '#daf0df',
//         color:"black",
//         borderRadius:"5px",
//         padding:"0.3rem",
//         width:"fit-content",
//       }}
//     >
//      {/* {
//         !sameSender &&(
//             <Typography color={"#3446e3"} fontWeight={"600"} variant='caption'>{sender.name}</Typography>
//         )
//      } */}
//       {
//         content && (
//           <Typography>{content}</Typography>
//         )
//       }
      
//         {/* attachments */}
//       <Typography variant='caption' color={"text.secondary"}>{timeAgo}</Typography>
//     </div>
//   );
// };

// export default memo(MessageComponent);


import { Box, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import userContext from '../context/userContext/userContext';

const MessageComponent = ({ message_data }) => {
  if (!message_data) return null; // Return null if message is undefined
  const context= useContext(userContext)
  const {userName}=context

  

  const { message,sender_username, reciever_username } = message_data;
  console.log(message,sender_username,userName)
  
  const sameSender = sender_username === userName;
  

  //console.log(sender?._id,user?.id);

  //const timeAgo = moment(createdAt).fromNow();
  //const timeAgo = moment(createdAt).format('HH:mm, MMM DD, YYYY');
//   const messageDate = moment(message.createdAt);
//   const today = moment().startOf('day');
//   const timeAgo= messageDate.isSame(today, 'day')
//   ? messageDate.format('hh:mm A')
//   : messageDate.isSame(today, 'year')
//   ? messageDate.format('hh:mm A, MMM DD')
//   : messageDate.format('hh:mm A, MMM DD, YYYY');
  return (
    <div
      style={{
        alignSelf: sameSender ? 'flex-end' : 'flex-start',
        backgroundColor: sameSender ? 'white' : '#daf0df',
        color: 'black',
        borderRadius: '5px',
        padding: '0.2rem',
        width: 'fit-content',
        maxWidth: '80%',
        marginBottom: '0rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {/* Sender's Name */}
      {
        !sameSender && (
          <Typography
            color={"#3446e3"}
            fontWeight={"600"}
            variant='caption'
            style={{
              marginBottom: '0rem',
              alignSelf: 'flex-start'
            }}
          >
            {/* {sender.name} */}
          </Typography>
        )
      }

      {/* Message Content */}
      {message && (
        <Typography>{message}</Typography>
      )}

      {/* Attachments */}
      {/* {attachements.length > 0 &&
        attachements.map((attachement, index) => {
          if (!attachement || !attachement.url) return null; // Check for undefined or malformed attachments
          const Url = attachement.url;
          const file = fileFormat(Url);
          return (
            <Box key={index} style={{ marginTop: '0.3rem' }}>
              <a href={Url} target="_blank" rel="noopener noreferrer" download style={{ color: "black" }}>
               
              </a>
            </Box>
          );
        })
      } */}

      {/* Time Ago */}
      {/* <Typography
        variant='caption'
        color={"text.secondary"}
        style={{
          marginTop: '0rem',
          alignSelf: 'flex-end',
          fontWeigh:"10"
        }}
      >
        {timeAgo}
      </Typography> */}
    </div>
  );
};

export default (MessageComponent);
