import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { StyledButton } from "../styled-button";
import { Button } from "@mui/material";

export default function Drsudnya() {
    return (
        <div>
            <Box id="feature" sx={{ backgroundColor: "background.paper" }}>
                <Container>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item xs={12} sm={7} sx={{ mb: 4 }}>
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
                                        color: 'secondary.main',
                                        fontSize: "inherit",
                                        fontWeight: "inherit",
                                        backgroundColor: "unset",
                                    }}
                                >
                                    Dr. Saudnya Rudrawar<br />

                                </Typography>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: "black", textAlign: 'justify', mb: 2, ml: { xs: 0, md: 4 } }}
                            >
                                Meet Dr. Saudnya, the Co-founder of Dr. Akshay's DentAvenue Dental Clinic in Chembur. She is an expert female dentist in Chembur specializing in Root Canals, Crowns, Bridges, Cosmetic Dentistry, Dentures, and other dental treatments. For the past 8 years, Dr. Saudnya has been providing her patients with the finest dental care, helping them achieve the perfect smile they deserve.
                            </Typography>
                            <List sx={{ bgcolor: "background.paper" }} aria-label="contacts">
                                <ListItem sx={{ pb: 0, mb: 0 }}>
                                    <ListItemButton sx={{ pb: 0, mb: 0 }}>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="8+ Years of experience" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ pb: 0, mb: 0 }}>
                                    <ListItemButton sx={{ pb: 0, mb: 0 }}>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Skilled General Dentist" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ pb: 0, mb: 0 }}>
                                    <ListItemButton sx={{ pb: 0, mb: 0 }}>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Exceptional Dental Care" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ pb: 0, mb: 0 }}>
                                    <ListItemButton sx={{ pb: 0, mb: 0 }}>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Co-founder of DentAvenue Dental Clinic" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ pb: 0, mb: 0 }}>
                                    <ListItemButton sx={{ pb: 0, mb: 0 }}>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary=" RCT and Pediatric Dental Treatment" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem sx={{ pb: 0, mb: 0 }}>
                                    <ListItemButton sx={{ pb: 0, mb: 0 }}>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Commitment to Continuous Improvement" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem sx={{ pb: 0, mb: 0 }}>
                                    <ListItemButton sx={{ pb: 0, mb: 0 }}>
                                        <ListItemIcon>
                                            <StarIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Paediatric Course" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            <Box sx={{ "& button": { mr: 2, ml: 4, mt: 3 } }}>
                                {/* <ScrollLink
                                    to="contactform"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={350}
                                > */}
                                <Button color="primary" size="large" variant='contained' sx={{ background: "linear-gradient(to right, #3e2bce 0%, #2dd3aa 100%, #2dd3aa 100%, #2dd3aa 100%);" }} >
                                    <a href="https://www.practo.com/mumbai/doctor/saudnya-rudrawar-dentist" style={{ color: 'white', textDecoration: 'none' }}>Book An Appointment</a>
                                </Button>
                                {/* </ScrollLink> */}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5}>

                            <Image
                                src="/images/dr/dr11.jpg"
                                width={100}
                                height={100}
                                layout="responsive"
                                quality={97}
                                alt="Feature img"
                                style={{ borderRadius: "50%", border: '5px  black outset' }}
                            ></Image>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}
