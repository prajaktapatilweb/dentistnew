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
    <Box
      sx={{
        backgroundImage: `url("/images/heroimg3.webp")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        // width: '100%',
        height: '83vh',

        alignItems: 'center',
        justifyItems: 'center'

        // py: { xs: 7, md: 14 },
      }}
    >
      {/* <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}> */}
      <Container maxWidth="lg">
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={12}>
            <Box>
              <Typography
                component="h2"
                sx={{
                  // width: { md: 850 },
                  position: 'relative',
                  fontSize: { xs: 40, md: 50 },
                  mb: { xs: 3, sm: 0 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.5,
                }}
              >
                {' '}
                Welcome to Family Dental Care


                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    position: 'relative',
                    '& svg': {
                      position: 'absolute',
                      top: -7,
                      right: -20,
                      width: { xs: 22, md: 27 },
                      height: 'auto',
                    },
                  }}
                >

                </Typography>{' '}
                <br />
              </Typography>
            </Box>
            <Hidden smDown>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '80%' } }}>
                <Typography variant='p' sx={{ color: 'white', lineHeight: 1.6, fontSize: 18 }} >
                  {
                    'Creating Healthy Smiles, One Patient at a Time'
                  }
                </Typography>
              </Box>
            </Hidden>
            <Box sx={{ '& button': { mr: 2 } }}>
              <ScrollLink to="contactform" spy={true} smooth={true} offset={0} duration={350} >

                <StyledButton color="primary" size="large" variant="contained" sx={{ mb: { xs: 3, sm: 0, md: 0 }, fontSize: 17, border: "3px solid", borderColor: "secondary.main", backgroundColor: 'secondary.main', color: 'white' }}>
                  Enquire Now
                </StyledButton>
              </ScrollLink>
              {/* <ScrollLink spy={true} smooth={true} offset={0} duration={350}> */}
              {/* <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}> */}
              <StyledButton color="white" size="large" variant="outlined" startIcon={<PlayArrow />} sx={{ mb: { xs: 3, sm: 0, md: 0 }, fontSize: 17, border: "4px solid", borderColor: "secondary.main", color: 'white' }} onClick={() => openInNewTab('https://www.youtube.com/@drakshaysdentavenuegeneral8556')}>
                Watch Video
              </StyledButton>
              {/* </ScrollLink> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default HomeHero