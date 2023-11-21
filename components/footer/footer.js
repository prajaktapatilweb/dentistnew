import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { FooterSocialLinks } from "../footer";
import Link from "next/link";
import Whatsappnew from "./Whatsappnew";
import CallIcon from '@mui/icons-material/Call';
const Footer = () => {
  const contactno1 = "+917045050650";

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        py: { xs: 6, md: 7 },
        color: "primary.contrastText",
      }}
    >
      <Container sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: { xl: 1300 } }}>
        <Grid container spacing={2} alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
              {/* <img src="/images/logo1.jpg" width="200px" ></img> */}
              {/* <Image src="/images/logo1.jpg" width={180} height={100}></Image>
              <br></br> */}
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                Family Dental Care
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Experience exceptional dental care at Family Dental Care, situated in Dharavi near Sion. Our skilled team, led by dedicated professionals, is committed to delivering personalized treatments for a lasting, healthy smile. Whether you're in search of a nearby dental clinic or specifically in Dharavi near Sion, Family Dental Care is here to meet all your dental needs.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2
                }}
              >
                <Image
                  src="/images/phone1.png"
                  width={20}
                  height={20}
                  sx={{
                    overflow: "hidden",
                  }}
                ></Image>{" "}
                &nbsp;&nbsp;
                <Link
                  href={`tel:${contactno1}`}
                  target="_blank"
                  className="footermenu"
                  style={{ textDecoration: "underline", display: "inline-block" }}
                >
                  {contactno1}
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2
                }}
              >
                <Image
                  src="/images/email.png"
                  width={20}
                  height={20}
                  sx={{
                    overflow: "hidden",
                  }}
                ></Image> &nbsp;&nbsp;
                <Link
                  href={`mailto:${'dentavenuemumbai@gmail.com'}`}
                  target="_blank"
                  className="footermenu"
                  style={{ textDecoration: "underline", display: "inline-block" }}
                >
                  dentavenuemumbai@gmail.com
                </Link>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Site Links
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#" className="footermenu">
                Home
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#aboutus" className="footermenu">
                About
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#treatments" className="footermenu">
                Treatments
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#testimonials" className="footermenu">
                Testimonials
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              <Link href="/#gallery" className="footermenu">
                Gallery
              </Link>
            </Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {" "}
              <Link href="/#faq" className="footermenu">
                FAQs
              </Link>
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Working Hours
            </Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>
              Mon-Sat : 10am – 9pm<br></br>
              Sun : 10am – 4pm
            </Typography>

            {/* <FooterNavigation /> */}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Treatments
            </Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Root Canal</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Dental Implants</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Full Mouth Reconstruction</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Braces & Aligners</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Crown & Bridges</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Wisdom Teeth Extraction</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Dental X-Rays​</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Teeth Whitening​</Typography>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: '300' }}>Cosmetic Dentistry</Typography>

          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" sx={{ fontWeight: "400" }} gutterBottom>
              Get In Touch
            </Typography>
            <a href="https://maps.app.goo.gl/WuvPzWyBPAS2LFSf8" target="blank" style={{ color: 'white' }}>
              Plot no, 109/112, New Nehru Nagar Co-Op housing society, 27, 90 Feet Rd, opposite to hindusthan co-operative bank, Dharavi, Mumbai, Maharashtra 400017
            </a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15085.636020985994!2d72.8594862!3d19.0457467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d6aa3b217d%3A0xbe542701e50439f1!2sFamily%20Dental%20Care!5e0!3m2!1sen!2sin!4v1698059531158!5m2!1sen!2sin" width="100%"
              height="200px"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ marginBottom: 3, marginTop: 3 }}></iframe>



            <FooterSocialLinks />

          </Grid>

          <Box>
            <div style={{ position: 'fixed', right: '40px', bottom: '110px', zIndex: 996, background: 'black', borderRadius: 5 }}>
              <Link
                href={`tel:${contactno1}`}
                target="_blank"
                className="footermenu"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >

                <Image src="/images/telephone.png" width={45} height={45} style={{ padding: 5 }} alt="phone" />
              </Link>
            </div>

          </Box>


          <Whatsappnew />
          <Grid item xs={12} sx={{ textAlign: 'center' }}>

            {/* Designed by <b>Prajakta Bhushankumar Patil</b> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
