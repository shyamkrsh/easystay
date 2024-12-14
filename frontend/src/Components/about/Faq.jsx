import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='md:mt-20 px-[5%] md:w-[50%]'>
      <h1 className='text-xl md:text-2xl font-semibold my-3 text-center md:text-left text-white'>Frequently Asked Questions</h1>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
              '& .MuiAccordion-region': {
                height: 'auto',
              },
              '& .MuiAccordionDetails-root': {
                display: 'block',
              },
            }
            : {
              '& .MuiAccordion-region': {
                height: 0,
              },
              '& .MuiAccordionDetails-root': {
                display: 'none',
              },
            },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{backgroundColor: '#141d30', color: 'white'}}
        >
          <Typography >1. What is EasyStay ?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#141d30', color: 'white'}}>
          <Typography >
            EasyStay is To-let service web application. Here person can search for
            the room, and can book the rooms, hostel, hotels,resturants, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{backgroundColor: '#141d30', color: 'white'}}
        >
          <Typography>2. Is this website relaible ?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#141d30', color: 'white'}}>
          <Typography>
            Yes, This is 100% relaible, secure, and easy to use application.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{backgroundColor: '#141d30', color: 'white'}}
        >
          <Typography>3. Is this web application secure ?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#141d30', color: 'white'}}>
          <Typography>
            Yes, this application is 100% secure.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{backgroundColor: '#141d30', color: 'white'}}
        >
          <Typography>4. Is Payment Gateway works perfectly ?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#141d30', color: 'white'}}>
          <Typography>
            Yes, Payment Gateway works properly, but after payment money will received in Database Administrator then the will send to the Items owner.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{backgroundColor: '#141d30', color: 'white'}}
        >
          <Typography>5. How to use this website ?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#141d30', color: 'white'}}>
          <Typography>
            For using this application properly, you can simply signup and login to this website. and follow this video

            <a href="https://www.youtube.com" className='text-blue-800 ms-3 underline'>https://www.youtube.com</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{backgroundColor: '#141d30', color: 'white'}}
        >
          <Typography>5. Is Dashboard Updates data automatically ?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: '#141d30', color: 'white'}}>
          <Typography>
            Yes, Is any changes will happen then it will be automatically updated on Dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
