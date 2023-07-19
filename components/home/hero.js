import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button';
import { PlayArrow } from '@mui/icons-material'
import ModalVideo from 'react-modal-video'


const HomeHero = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <Box
      sx={{
        backgroundImage: `url("/images/mainsmile2.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',

        py: { xs: 7, md: 14 },
      }}
    >
      {/* <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}> */}
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box>
              <Typography
                component="h2"
                sx={{
                  width: { md: 850 },
                  position: 'relative',
                  fontSize: { xs: 40, md: 50 },
                  letterSpacing: 1.5,
                  fontWeight: 'bold',

                  lineHeight: 1.3,
                }}
              >
                {' '}
                Unleash your best
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
                  &nbsp;Smile{' '}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: { xs: 24, md: 34 },
                      left: 2,
                      transform: 'rotate(3deg)',
                      '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                    }}
                  >
                    {/* eslint-disable-next-line */}
                    <img src="/images/headline-curve.svg" alt="Headline curve" />
                  </Box>
                </Typography>
                with our expert team of dental professionals.
                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    position: 'relative',
                    '& svg': {
                      position: 'absolute',
                      top: -16,
                      right: -21,
                      width: { xs: 22, md: 30 },
                      height: 'auto',
                    },
                  }}
                >
                  <svg version="1.1" viewBox="0 0 3183 3072">
                    <g id="Layer_x0020_1">
                      <path
                        fill="#127C71"
                        d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                      />
                      <path
                        fill="#127C71"
                        d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                      />
                      <path
                        fill="#127C71"
                        d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                      />
                    </g>
                  </svg>
                </Typography>{' '}
                <br />
              </Typography>
            </Box>
            <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                {
                  'Your smile is unique, and so is our approach to dental care. With a compassionate team and state-of-the-art techniques, we are dedicated to helping you achieve a smile that lights up every room.'
                }
              </Typography>
            </Box>
            <Box sx={{ '& button': { mr: 2 } }}>
              <ScrollLink to="contactform" spy={true} smooth={true} offset={0} duration={350} >

                <StyledButton color="primary" size="large" variant="contained" sx={{ mb: { xs: 3, sm: 0, md: 0 } }}>
                  Enquire Now
                </StyledButton>
              </ScrollLink>
              <ScrollLink spy={true} smooth={true} offset={0} duration={350}>
                {/* <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}> */}
                <StyledButton color="primary" size="large" variant="outlined" startIcon={<PlayArrow />} sx={{ mb: { xs: 3, sm: 0, md: 0 } }} onClick={() => openInNewTab('https://www.youtube.com/@drakshaysdentavenuegeneral8556')}>
                  Watch Video
                </StyledButton>
              </ScrollLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default HomeHero