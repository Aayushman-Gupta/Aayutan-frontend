import React from 'react';
import { Box, Typography, Button,  Grid2 } from '@mui/material';
import backgroundImage from '../assets/background-overlay.jpg'
import background from '../assets/background_blue.jpg'
import overlayimg from '../assets/image-removebg.png'
import transparentOverlayImg from '../assets/transparentOverlayImg.png'
import { blue } from '@mui/material/colors';

function CentreBody() {
    return (
        <Box
          sx={{
            position: 'relative',
            height: '100vh', // Adjust as needed
            overflow: 'hidden',
          }}
        >
          {/* Background Image */}
          <Box
            component="img"
            src={background}
            alt="Background"
            sx={{
              width: '100%',
              height: '698px',
              objectFit: 'cover',
              position: 'absolute',
              top: '0%',
              left: '50%', // Center it
              transform: 'translateX(-50%)',
              zIndex: 1, // Send to the back
            }}
          />
    
          {/* Overlay Image */}
          <Box
            component="img"
            src={overlayimg}
            alt="Overlay"
            sx={{
              position: 'absolute',
              top: '7%', // Adjust as needed to position upwards
              right: 0, // Adjust as needed to position to the right
              zIndex: 2, // Bring to the front
              width: '648px', // Set desired width
            //   overflowX: 'auto'
            }}
          />
          {/* Second Transparent Overlay Image positioned to the left */}
          <Box
            component="img"
            src={transparentOverlayImg}
            alt="Transparent Overlay"
            sx={{
            position: 'absolute',
            top: '7%', // Align with the first overlay
            right: '0.2%', // Positioned directly to the left of the first overlay
            zIndex: 1, // Same z-index as the first overlay
            width: '970px', // Set desired width
            opacity: 0.3, // Set transparency (0.5 = 50% transparent)
            }}
          />
    
          {/* Typography Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: '20%', // Adjust as needed
              left: '10%', // Adjust as needed
              color: 'black', // Text color
              zIndex: 4, // Bring to the front
            }}
          >
            <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
                '@keyframes slideUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(100px)', // Start below
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)', // Settle at final position
                  },
                },
                animation: 'slideUp 2s ease-in-out', // Same animation for the description
                animationDelay: '0.5s', // Delayed appearance for smooth effect
              }}    >
             <span style={{ fontWeight: '1000',fontSize:'100px',color:'#140444'}}>Your Health,</span><br/>Our Daily Discussions
            </Typography>
            <Typography 
            variant="body1" 
            gutterBottom
            sx={{
                '@keyframes slideUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(100px)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
                animation: 'slideUp 2s ease-in-out', // Same animation for the description
                animationDelay: '0.5s', // Delayed appearance for smooth effect
              }}>
              Some brief description about the doctor or the service that is offered.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Call to Action
            </Button>
          </Box>
        </Box>
      );
}

export default CentreBody