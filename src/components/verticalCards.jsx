import { Box, Typography, Button,  Grid2 } from '@mui/material';
import React from 'react'
import chatcard from '../assets/chatcard.jpg'

function VerticalCards() {
  return (
    <div>  
    <Box sx={{
        display: 'flex',     
        flexDirection: 'row',
        bgcolor:'#AEE1F0',
        padding: '20px',
          // Ensures the content wraps properly
        overflow: 'hidden' // Prevents x-scrolling if content overflows
            }}>
        <Box
        component="img"
        src={chatcard}
        alt="Overlay"
        sx={{
        marginRight: '20px',
        marginLeft: '50px',
        left: '20%',
        width: '300px',
        height:'auto' // Set desired width
        //   overflowX: 'auto'
        }}
        />
        <Box
        sx={{
            maxWidth:'100%',
            height:'auto' 
        }}>       
        <Typography 
             sx={{
                marginTop:'60px',
                fontSize: '15px', // Adjust size as needed
                marginLeft: '500px',
                maxWidth: '100%',
              }}
            variant="h5" 
            // component=""     
            gutterBottom
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro praesentium asperiores dolore provident voluptatum ab quisquam saepe eum magnam. Inventore ea fuga suscipit labore voluptatem? Magni in laudantium voluptatem saepe quod rem illo eveniet, facilis dignissimos doloribus at laboriosam assumenda delectus
        </Typography>
        </Box> 

    </Box>
  </div>
  )
}

export default VerticalCards