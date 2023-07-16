import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Card, Typography } from '@mui/material'
import CountUp from 'react-countup'

export default function Countdown() {

    var Details = [
        {
            numbers: "2000",
            title: "Happy Patients"

        },
        {
            numbers: "3500",
            title: "Dental Implant"
        },
        {
            numbers: "4000",
            title: "Crown & Bridges"
        },
        {
            numbers: "1500",
            title: " Root Canal"
        },
        {
            numbers: "500",
            title: "Smile designing"
        },
    ]

    return (
        <div>
            <Box sx={{
                boxShadow: 2, pt: {
                    xs: 6,
                    md: 8,
                },
                pb: 14, borderRadius: 4, backgroundColor: '#f8f8f8'
            }}>

                <Container maxWidth="lg">
                    <Typography variant="h1" sx={{
                        fontSize: 40, pb: {
                            xs: 5,
                            md: 5,
                        },
                    }} gutterBottom>
                        Our Sucess In Numbers
                    </Typography>

                    <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
                        {Details.map((item, i) => (
                            <Grid item xs={12} md={2} key={i}>
                                <Card sx={{ textAlign: 'center', mb: { xs: 1, md: 0 }, padding: 3, borderRadius: 5, background: "#127c71" }}>

                                    <Typography
                                        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
                                    >
                                        <CountUp end={item.numbers} duration={5} />+
                                    </Typography>
                                    <Typography color="white" variant="h5">
                                        {item.title}
                                    </Typography>

                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </Box>
        </div>
    )
}
