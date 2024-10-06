import React from 'react';
import { Box, Typography, Button,  Grid2 } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FAQimage from '../assets/FAQimage.jpg';



export default function FAQ() {
    const faqs = [
        {
            question: 'What is DocMed?',
            answer: 'DocMed is a health management platform where patients can interact with doctors, book appointments, and access health-related services.'
        },
        {
            question: 'How do I schedule an appointment?',
            answer: 'You can schedule an appointment by navigating to the appointment section and selecting a doctor from the available list.'
        },
        {
            question: 'Is there any subscription fee?',
            answer: 'Currently, we are offering free services to users. However, premium features may be added in the future.'
        },
        {
            question: 'How secure is my personal data?',
            answer: 'We prioritize the security and privacy of your data with robust encryption and secure storage.'
        }
    ];

    return (
        <Grid2 className='flex p-4 justify-between'>
          <Box className='p-10 w-3/5'>
            <h1 className="font-bold text-green-800 text-5xl p-8 leading-relaxed pl-16">
              Frequently Asked Questions?
            </h1>
    
            {/* FAQ Section */}
            <Box className='pl-16'>
              {faqs.map((faq, index) => (
                <Accordion key={index} sx={{ mb: 2 ,borderRadius:'25px'}}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))} 
            </Box>
          </Box>
          <img src="src/assets/faq2.jpg" className='rounded-full bg-blue-50 w-1/3 h-70 object-cover' />
        </Grid2>
      )
    }
     