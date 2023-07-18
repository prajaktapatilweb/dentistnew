import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box } from '@mui/material';

export default function Faq() {

    return (
        <div>
            <Box id="faq" sx={{
                boxShadow: 2, pt: {
                    xs: 6,
                    md: 8,
                },
                pb: 14, borderRadius: 4, backgroundColor: '#f8f8f8'
            }}>

                <Container maxWidth="lg" >
                    <Typography variant="h1" sx={{
                        fontSize: 40, pb: {
                            xs: 5,
                            md: 5,
                        },
                    }} gutterBottom>
                        FAQs :
                    </Typography>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography fontWeight='bold'> How often should I visit the dentist for a regular check-up and cleaning?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                It is generally recommended to visit the dentist for a regular check-up and cleaning every 4 months. However, the frequency may vary depending on your oral health needs. Your dentist will provide a personalized recommendation based on your specific dental condition.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography fontWeight='bold'> Can you provide options for replacing missing teeth, such as dental implants or dentures?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Absolutely. We specialize in dental implants and offer various options for replacing missing teeth, including dental implants, dentures, and dental bridges.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography fontWeight='bold'>  Do you offer cosmetic dentistry services such as teeth whitening or veneers?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, we offer cosmetic dentistry services such as teeth whitening and veneers.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography fontWeight='bold'>What payment options do you accept, and do you offer any dental financing or insurance options?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                We accept various payment options, including cash, credit cards, debit cards, and UPI.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </Container>
            </Box>
        </div>


    )
}