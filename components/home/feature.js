import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import StarIcon from '@mui/icons-material/Star'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'


const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))
const HomeFeature = () => {
  return (
    <Box sx={{ py: { xs: 7, md: 7 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3} alignItems='center' justifyContent='center'>
          <Grid item xs={12} sm={5} >

            <Image
              src="/images/dr/dr12.jpg"
              height={100}
              width={100}
              layout='responsive'
              alt="Feature img"
              style={{ borderRadius: '50%', border: '5px  black outset' }}

            >
            </Image>

          </Grid>
          <Grid item xs={12} sm={7} >
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 45 },
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
                  color: '#0b1341',
                  // color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Dr. Akshay <br />
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

            <Typography variant="body1" sx={{ color: 'black', textAlign: "justify", mb: 2, ml: { xs: 0, md: 4 } }}>
              Meet Dr. Akshay, Founder of DentAvenue Dental Clinic in Chembur. He has more then 10 years of experience
              in the field of Dentistry. Dr. Akshay has completed his MDS Prosthodontics ( Crown, Bridge And
              Implantology) from Government Dental College, Mumbai. He is a specialist in Full Mouth Rehabilitation,
              Smile Designing, Implants, Complete and Partial Dentures, Laminates and Veneers. He was also an
              ex-assistant professor at Government Dental College, Mumbai
            </Typography>
            <List sx={{ bgcolor: 'background.paper' }} aria-label="contacts">

              <ListItem sx={{ pb: 0, mb: 0 }}>
                <ListItemButton sx={{ pb: 0, mb: 0 }}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="10+ Years of experience" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ pb: 0, mb: 0 }}>
                <ListItemButton sx={{ pb: 0, mb: 0 }}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Experienced Prosthodontist" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ pb: 0, mb: 0 }}>
                <ListItemButton sx={{ pb: 0, mb: 0 }}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Government Dental College Alumni" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ pb: 0, mb: 0 }}>
                <ListItemButton sx={{ pb: 0, mb: 0 }}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Comprehensive Treatment Solutions" />
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ pb: 0, mb: 0 }}>
                <ListItemButton sx={{ pb: 0, mb: 0 }}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Former Assistant Professor" />
                </ListItemButton>
              </ListItem>
            </List>

            <Box sx={{ '& button': { mr: 2, ml: 4, mt: 3 } }}>
              <ScrollLink to="contactform" spy={true} smooth={true} offset={0} duration={350}>

                <StyledButton color="primary" size="large" variant="contained" >
                  Book An Appointment
                </StyledButton>
              </ScrollLink>

            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default HomeFeature
