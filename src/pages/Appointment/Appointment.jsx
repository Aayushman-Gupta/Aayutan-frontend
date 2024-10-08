import React from 'react';
import { Grid2, Box } from '@mui/material';

export default function AppointmentPage() {
  return (
    <Box sx={{ width: '100%',marginLeft:'8%', p: 2 }}>
      <Grid2 container spacing={2}>
        {/* Left Side - 20% for Images */}
        <Grid2 item xs={12} md={2} sx={{ p: 2,marginRight:'5%' }}>
          {/* Add images here */}
          <img src="image1.jpg" alt="Doctor 1" style={{ width: '100%', marginBottom: '100px' }} />
          <img src="image2.jpg" alt="Doctor 3" style={{ width: '100%', marginBottom: '100px' }} />
          <img src="image2.jpg" alt="Doctor 4" style={{ width: '100%', marginBottom: '100px' }} />
          <img src="image2.jpg" alt="Doctor 5" style={{ width: '100%', marginBottom: '100px' }} />
          <img src="image2.jpg" alt="Doctor 6" style={{ width: '100%', marginBottom: '100px' }} />
          {/* You can add more images */}
        </Grid2>

        {/* Right Side - 80% for Appointment Details */}
        <Grid2 item xs={12} md={10} sx={{ backgroundColor: '#fff', p: 2 }}>
          <Box sx={{ p: 2, backgroundColor: '#fafafa', boxShadow: 1 }}>
            {/* Appointment Content goes here */}
            <h2>Select Disease and Book Appointment</h2>
            {/* Add your filters and other appointment elements here */}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
