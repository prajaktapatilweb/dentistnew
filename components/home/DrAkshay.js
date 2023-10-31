import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import StarIcon from "@mui/icons-material/Star";
import { StyledButton } from "../styled-button";
import { motion } from "framer-motion";

const DrAkshay = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };
  const Lists = motion(List);
  const ListItems = motion(ListItem);
  const explist = [
    "10+ Years of experience dfd er",
    "Experienced Prosthodontist",
    "Government Dental College Alumni",
    "Comprehensive Treatment Solutions",
    "Specialized in Implants and FMR",
    "Former Assistant Professor",
  ];
  return (
    <Box sx={{ py: { xs: 7, md: 7 }, backgroundColor: "background.paper" }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={5}>
            <Image
              src="/images/dr/dr12.jpg"
              height={100}
              width={100}
              layout="responsive"
              alt="Feature img"
              style={{ borderRadius: "50%", border: "5px  black outset" }}
            ></Image>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Typography
              component="h2"
              sx={{
                position: "relative",
                fontSize: { xs: 40, md: 45 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: "bold",
              }}
            >
              Meet{" "}
              <Typography
                component="mark"
                sx={{
                  position: "relative",
                  color: "#0b1341",
                  // color: 'primary.main',
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  backgroundColor: "unset",
                }}
              >
                Dr. Akshay Bandewar <br />
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 20, md: 28 },
                    transform: "rotate(3deg)",
                    left: 2,
                    "& img": { width: { xs: 140, md: 175 }, height: "auto" },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/headline-curve.svg"
                    alt="Headline curve"
                  ></img>
                </Box>
              </Typography>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "black",
                textAlign: "justify",
                mb: 2,
                ml: { xs: 0, md: 4 },
              }}
            >
              Meet Dr. Akshay, the Founder of Dr. Akshay's DentAvenue Dental
              Clinic in Chembur. With more than 10 years of experience in the
              field of Dentistry, Dr. Akshay has completed his MDS in
              Prosthodontics (Crown, Bridge, and Implantology) from Government
              Dental College, Mumbai. He specializes in Full Mouth
              Rehabilitation, Smile Designing, Implants, Complete and Partial
              Dentures, Laminates, and Veneers. If you're looking for a skilled
              dentist near me, Dr. Akshay is your go-to expert. He also served
              as an ex-assistant professor at Government Dental College, Mumbai.
            </Typography>

            <Lists initial="hidden" animate="visible" variants={variants}>
              {explist.map((item, i) => (
                <ListItems
                  variants={variants}
                  key={item}
                  custom={i}
                  sx={{ marginLeft: 3 }}
                >
                  <StarIcon sx={{ fontSize: 15, marginRight: 2 }} />
                  {item}
                </ListItems>
              ))}
            </Lists>

            <Box sx={{ "& button": { mr: 2, ml: 4, mt: 3 } }}>
              {/* <ScrollLink to="contactform" spy={true} smooth={true} offset={0} duration={350}> */}

              <StyledButton color="primary" size="large" variant="contained">
                <a
                  href="https://www.practo.com/mumbai/doctor/akshay-bandewar-dentist-2"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  Book An Appointment{" "}
                </a>
              </StyledButton>
              {/* </ScrollLink> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default DrAkshay;
