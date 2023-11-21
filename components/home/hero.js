import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button';
import { PlayArrow } from '@mui/icons-material'
import Hidden from '@mui/material/Hidden';


const HomeHero = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <Grid className='section section-lg section-shaped' sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className='shape shape-style-u1 shape-dark'>
        <span className='span-150' />
        <span className='span-75' />
        <span className='span-50' />
        <span className='span-75' />
        <span className='span-200' />
        <span className='span-150' />
      </div>
      <Container>

        <Grid container alignItems='center' justifyContent='center' sx={{ p: 10 }}>
          <Grid item xs={12} md={12} sx={{ zIndex: 1 }}>
            <Box>
              <Typography
                component="h2"
                sx={{
                  // width: { md: 850 },
                  position: 'relative',
                  fontSize: { xs: 40, md: 55 },
                  // mb: { xs: 3, sm: 0 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.5,

                }}
              >

                Welcome to Family Dental Care
              </Typography>
            </Box>
            {/* <Hidden smDown> */}
            <Box sx={{ mb: 4 }}>
              <Typography variant='h4' sx={{ color: '#aed8df', lineHeight: 1.6, fontSize: 20 }} gutterBottom>
                {
                  'Creating Healthy Smiles, One Patient at a Time'
                }
              </Typography>
            </Box>
            {/* </Hidden> */}
            <Box sx={{ '& button': { mr: 2 } }}>

              <StyledButton color="white" size="large" variant="outlined" startIcon={<PlayArrow />} sx={{ mb: { xs: 3, sm: 0, md: 0 }, borderRadius: 0, fontSize: 17, border: "1px solid", borderColor: "#ffffff", color: 'white' }} onClick={() => openInNewTab('https://www.youtube.com/@drakshaysdentavenuegeneral8556')}>
                Enquire Now
              </StyledButton>

            </Box>
          </Grid>
        </Grid>
      </Container>



    </Grid>
  )
}
export default HomeHero