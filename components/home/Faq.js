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
            quest: 'How often should I visit the dentist for a regular check-up and cleaning?',
            answ: 'It is generally recommended to visit the dentist for a regular check-up and cleaning every 4 months. However, the frequency may vary depending on your oral health needs. Your dentist will provide a personalized recommendation based on your specific dental condition.'
        },
        {
            quest: 'Can you provide options for replacing missing teeth, such as dental implants or dentures?',
            answ: 'Absolutely. We specialize in dental implants and offer various options for replacing missing teeth, including dental implants, dentures, and dental bridges.'
        },
        {
            quest: 'Do you offer cosmetic dentistry services such as teeth whitening or veneers?',
            answ: ' Yes, we offer cosmetic dentistry services such as teeth whitening and veneers.'
        },
        {
            quest: 'What payment options do you accept, and do you offer any dental financing or insurance options?',
            answ: 'We accept various payment options, including cash, credit cards, debit cards, and UPI.'
        },

    ]
    return (
        <div>
            <Box id="faq" sx={{
                py: { xs: 7, md: 7 }, backgroundColor: '#f8f8f8'
            }}>

                <Container maxWidth="lg" >
                    <Typography variant="h1" sx={{
                        fontSize: { xs: 30, md: 35 }, pb: {
                            xs: 2,
                            md: 2,
                        },
                    }} gutterBottom>
                        FAQs
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