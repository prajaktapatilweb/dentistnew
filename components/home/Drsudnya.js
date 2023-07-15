import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import StarIcon from '@mui/icons-material/Star'

export default function Drsudnya() {
    return (
        <div>
            <Box id="feature" sx={{ py: { xs: 1, md: 1 }, backgroundColor: 'background.paper' }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7}>
                            <Typography
                                component="h2"
                                sx={{
                                    position: 'relative',
                                    fontSize: { xs: 40, md: 50 },
                                    ml: { xs: 0, md: 4 },
                                    mt: 2,
                                    mb: 3,
                                    lineHeight: 1,
                                    fontWeight: 'bold',
                                }}
                            >
                                Meet{' '}
                                <Typography
                                    component="mark"
                                    sx={{
                                        position: 'relative',
                                        color: 'primary.main',
                                        fontSize: 'inherit',
                                        fontWeight: 'inherit',
                                        backgroundColor: 'unset',
                                    }}
                                >
                                    Dr. Saudnya <br />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: { xs: 20, md: 28 },
                                            transform: 'rotate(3deg)',
                                            left: 2,
                                            '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                                        }}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/images/headline-curve.svg" alt="Headline curve" ></img>
                                    </Box>
                                </Typography>
                            </Typography>

                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
                                Meet Dr. Saudnya, the Co- founder of DentAvenue Dental Clinic in Chembur. She is an expert in Root Canals, Crown, Bridges, Cosmetic Dentistry, Dentures and other dental treatments. Dr. Saudnya has been providing her patients with the finest dental care and giving them the perfect smile they deserve for the past 8 years.
                            </Typography>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts">
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="8+ Years of experience" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Highly Equipped Clinic" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Good quality care & service" />
                                    </ListItemButton>
                                </ListItem>
                            </List>

                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ position: 'relative' }}>
                                <Image
                                    src="/images/dr/dr1.jpg"
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                    quality={97}
                                    alt="Feature img"
                                    style={{ borderRadius: '50%' }}
                                >
                                </Image>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </div>
    )
}
