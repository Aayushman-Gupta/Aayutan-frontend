import React from 'react';
import Grid2 from '@mui/material/Grid2';
import { ListItem,Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <Grid2 container direction="column" className='p-6 text-gray-300 bg-footerColor'>
      <Grid2 className='flex gap-8 border-b border-gray-100 m-1'>
        <Stack className='p-2'>
          <h1 className='text-xl mb-4'>Platform</h1>
          <div className='m-1 ml-1 mb-4'>Plans & Pricing</div>
          <div className='m-1 ml-1 mb-4'>Personal AI Manager</div>
          <div className='m-1 ml-1 mb-4'>AI Business Writer</div>
          <div className='m-1 ml-1 mb-4'>AI Data Processing </div>
        </Stack>
        <Stack className='p-2'>
          <h1 className='text-xl mb-4'>Company</h1>
          <div className='m-1 ml-1 mb-4'>About Us</div>
          <div className='m-1 ml-1 mb-4'>Work With Us</div>
          <div className='m-1 ml-1 mb-4'>Blog & News</div>
        </Stack>
        <Stack className='p-2'>
          <h1 className='text-xl mb-4'>Resources</h1>
          <div className='m-1 ml-1 mb-4'>Documentation</div>
          <div className='m-1 ml-1 mb-4'>Free Demo</div>
          <div className='m-1 ml-1 mb-4'>Press Conferences</div>
        </Stack>
        <Stack className='p-2'>
          <h1 className='text-xl mb-4'>Legal</h1>
          <div className='m-1 ml-1 mb-4'>Terms of Services</div>
          <div className='m-1 ml-1 mb-4'>Privacy Policy</div>
          <div className='m-1 ml-1 mb-4'>Cookies Policy</div>
          <div className='m-1 ml-1 mb-4'>Data Processing</div>
        </Stack>
      </Grid2>
      <Grid2 container direction="row" className='m-1'>
        <Grid2 className='w-1/2 p-2' item>
          <span>
            Aayutan
          </span>
        </Grid2>
        <Grid2 className='w-1/2 p-2 flex gap-2' item >
          <InstagramIcon/>
          <YouTubeIcon/>
          <XIcon/>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Footer;