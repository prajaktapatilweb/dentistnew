import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from "next/image";

import { FooterNavigation, FooterSocialLinks } from '../footer';
import Link from 'next/link';
const Footer = () => {
  return (<Box component="footer" sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}>
    <Container sx={{ textAlign: { xs: 'center', md: 'left' } }}>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12} md={5}>
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            {/* <img src="/images/logo1.jpg" width="200px" ></img> */}
            <Image src="/images/logo1.jpg" width={230}
              height={130}
            ></Image>
            <br></br>
            {/* <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
              Dr Akshay's
            </Typography> */}
            <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
              Experience exceptional dental care at Dr. Akshay's DentAvenue Dental Clinic. Our passionate team offers personalized treatments, helping you achieve a healthy, beautiful smile that lasts a lifetime.
            </Typography>
            <FooterSocialLinks />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant='h5' sx={{ mb: 1 }}><Link href="#" className='footermenu'>Home</Link></Typography>
          <Typography variant='h5' sx={{ mb: 1 }}><Link href="#aboutus" className='footermenu'>About</Link></Typography>
          <Typography variant='h5' sx={{ mb: 1 }}><Link href="#treatments" className='footermenu'>Treatments</Link></Typography>
          <Typography variant='h5' sx={{ mb: 1 }}><Link href="#testimonials" className='footermenu'>Testimonials</Link></Typography>
          <Typography variant='h5' sx={{ mb: 1 }}><Link href="#gallery" className='footermenu'>Gallery</Link></Typography>
          <Typography variant='h5' sx={{ mb: 1 }}> <Link href="#faq" className='footermenu'>FAQs</Link></Typography>

          {/* <FooterNavigation /> */}
        </Grid>
        <Grid item xs={12} md={5}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15084.267627628198!2d72.8997529!3d19.0607957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c602cf4db0f7%3A0xd4992176e1672533!2sDr.%20Akshay&#39;s%20DentAvenue%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1689430175809!5m2!1sen!2sin" width="100%" height="250px" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
      </Grid>
    </Container>
  </Box>);
};
export default Footer;
