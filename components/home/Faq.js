import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box } from '@mui/material';

export default function Faq() {
    var Details = [
        {
            quest: 'Do I need to schedule an appointment for a routine check-up?',
            answ: 'Yes, we recommend scheduling an appointment in advance to ensure we can accommodate your visit.'
        },
        {
            quest: 'How often should I have a dental check-up?',
            answ: 'We generally recommend a dental check-up every six months, sometimes we suggest a different schedule based on your oral health.'
        },
        {
            quest: 'What can I expect during a teeth cleaning?',
            answ: 'We remove plaque and tartar, floss your teeth, and polish them for a sparkling clean feel.'
        },
        {
            quest: 'Do you accept dental insurance?',
            answ: 'No. '
        },
        {
            quest: 'What should I do in case of a dental emergency?',
            answ: 'Contact us immediately. We offer same-day emergency appointments to address your needs promptly.'
        }
    ]

    return (
        <div>
            <Box id="faq" sx={{
                py: { xs: 7, md: 7 }, backgroundColor: '#f8f8f8'
            }}>

                <Container maxWidth="lg" >
                    <Typography variant="h1" sx={{
                        fontSize: { xs: 30, md: 35 },
                    }} gutterBottom>
                        Frequently Asked Questions
                    </Typography>
                    <Typography>
                        Here are some common questions our patients ask.

                    </Typography>
                    {Details.map((item, i) => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontWeight='bold'>{item.quest}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.answ}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                    ))}
                </Container>
            </Box>
        </div>


    )
}