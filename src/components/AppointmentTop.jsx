import React,{useState} from 'react';
import { Box, Card, CardContent, Typography, Avatar, Grid2,Button, Link,MenuItem,TextField} from '@mui/material';
import heathcare from '../assets/healthcare-nobg.png'
import '../components/CustomButton.css'

function AppointmentTop() {
  const doctors = [
    {
      name: 'Dr. John Doe',
      address: '123 Medical Street, City',
      experience: '10 years',
      specialty: 'Cardiologist',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Dr. Janela Smith',
      address: '456 Health Ave, Town',
      experience: '8 years',
      specialty: 'Dermatologist',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Dr. Amose Delike',
      address: '13 cokle , City',
      experience: '10 years',
      specialty: 'Cardiologist',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Dr. Allena Walker',
      address: '14 Xeona Street, City',
      experience: '10 years',
      specialty: 'Neurologist',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
    },

    // Add more doctor profiles as needed
  ];  const diseaseList = [
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'dermatology', label: 'Dermatology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'orthopedics', label: 'Orthopedics' },
    // Add more diseases as needed
  ];
  const [selectedDisease, setSelectedDisease] = useState('');

  const handleFilterChange = (event) => {
    setSelectedDisease(event.target.value);
  };


  return (
    <Box className='flex-row ' sx={{height:'1000px',backgroundColor:'white'}}>
      <Box display="flex" justifyContent="center" alignItems="center" padding="8px" bgcolor="lightblue"  boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)" marginBottom="16px">
        <TextField
          select
          label="Select Disease"
          value={selectedDisease}
          onChange={handleFilterChange}
          variant="outlined"
          style={{ width: '300px' }}
        >
          {diseaseList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" color="primary" style={{ padding: '10px 20px',marginLeft:'100px' }}>
          Search
        </Button>
      </Box>

      <Box display="flex" marginLeft="2%" marginTop="2%">
        {/* Left Division: Leave as it is */}
        <Box
         component="img"
         src={heathcare}
         alt="loading Healthcare-img"
         sx={{ maxWidth: '30%',
          paddingRight: '10px',
           paddingLeft: '20px', 
          //  borderRight: '4px solid gray',
           marginRight:'38px' }}>
           
        </Box>

        {/* Right Division */}
        <Box sx={{
            maxWidth: '100%',
            height: '800px', // Height for the scrollable container
            overflowY: 'auto', // Enables scrolling inside the container
            paddingTop:'10px',
            paddingBottom:'10px',
            paddingLeft: '16px',
            paddingRight: '16px',
            '&::-webkit-scrollbar': { display: 'none' },
            borderRadius: '8px',
            marginRight:'0%',
            border: '1px solid lightgray', 
            backgroundColor:'white'}}>
          <Grid2 container spacing={2} direction="column">
            {doctors.map((doctor, index) => (
              <Grid2 item xs={12} key={index}>
                <Card sx={{ display: 'flex', alignItems: 'center', padding: '16px',width:"960px",bgcolor:'#white ',borderRadius:'30px' }}>
                  <Avatar
                    alt={doctor.name}
                    src={doctor.image}
                    sx={{ width: 100, height: 100, marginRight: '16px' }}
                  />
                  <CardContent>
                    <Typography variant="h6">{doctor.name}</Typography>
                    <Typography variant="body1">Address: {doctor.address}</Typography>
                    <Typography variant="body2">Experience: {doctor.experience}</Typography>
                    <Typography variant="body2">Specialty: {doctor.specialty}</Typography>
                    <Link to='/#'>
                    <Button  className='custom-mui-btn' sx={{bgcolor:'#1B116A',color:'white'}}>View Available Appointments</Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}

export default AppointmentTop;
