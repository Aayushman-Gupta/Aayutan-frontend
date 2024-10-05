import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const card1 = (
  <Card sx={{ flexGrow: 1,
    bgcolor:'#0928A4',
    flexBasis: '30%', 
    maxWidth: '25%',
    color:'white',
    borderRadius: '40px'}}>
  <CardContent>
    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
      Word of the Day
    </Typography>
    <Typography variant="h5" component="div">
      benev
    </Typography>
    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
    <Typography variant="body2">
      well meaning and kindly.
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
);
const card2 = (
  <Card sx={{ flexGrow: 1,
    bgcolor:'#0928A4',
    flexBasis: '30%', 
    maxWidth: '25%',
    color:'white',
    borderRadius: '40px'}}>
  <CardContent>
    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
      Word of the Day
    </Typography>
    <Typography variant="h5" component="div">
      benev
    </Typography>
    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
    <Typography variant="body2">
      well meaning and kindly.
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
);
const card3 = (
  <Card sx={{ flexGrow: 1,
    bgcolor:'#0928A4',
    flexBasis: '30%', 
    maxWidth: '25%',
    color:'white',
    borderRadius: '40px'}}>
  <CardContent>
    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
      Word of the Day
    </Typography>
    <Typography variant="h5" component="div">
      benev
    </Typography>
    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
    <Typography variant="body2">
      well meaning and kindly.
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
  </CardActions>
</Card>
);

export default function Cards() {
  return (
    <Box className="mx-2 my-2" sx={{ borderColor: "red" }}>
    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h3">hellofn v evevevrevevfdm</Typography>
    </div> */}
    <Stack sx={{ justifyContent: "space-between", alignItems: "center",marginTop:'100px' }} direction="row" spacing={2}>
      {card1}
      {card2}
      {card3}
    </Stack>
  </Box>
  
  );
}
