import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { data } from "./feature.data";
import { Card } from "@mui/material";
import Drgallery from "./Drgallery";
import Heading from "./Heading";
import { headList1 } from "../constants/titlefile";

const BorderLinearProgress = styled(LinearProgress, {
    shouldForwardProp: (prop) => prop !== "color",
})(({ theme, order }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        ...(order === 1 && {
            backgroundColor: "#f303ff",
        }),
        ...(order === 2 && {
            backgroundColor: "#26e8bd",
        }),
        ...(order === 3 && {
            backgroundColor: "#0063ff",
        }),
        ...(order === 4 && {
            backgroundColor: "#ffaf35",
        }),
    },
}));
const Clinicinfo = () => {
    return (
        <Box id="aboutus" sx={{ py: { xs: 10, md: 10 }, backgroundColor: "#ffffff" }} >
            <Container>
                <Card sx={{ p: 5, marginTop: -20, zIndex: 1, position: 'relative', borderRadius: 5, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <Heading data={headList1}></Heading>

                    <Grid container spacing={3} alignItems="center" justifyContent="center">


                        <Grid item xs={12} md={5}>
                            <Box sx={{ position: "relative" }}>
                                <Drgallery></Drgallery>

                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>


                            <Typography
                                sx={{
                                    color: "#000000",
                                    textAlign: "justify",
                                    mb: 2,
                                    ml: { xs: 0, md: 4 },
                                }}
                            >

                                Welcome to Family Dental Care, your go-to dental clinic in Dharavi near Sion, Mumbai, where we prioritize your oral health. With experienced and dedicated professionals, Dr. Akshay and Dr. Saudnya Bandewar, our clinic is committed to providing top-notch dental care. If you're in search of a nearby dentist in Dharavi, your search ends at our conveniently located clinic in the heart of the city.
                                <br></br>
                                When it comes to finding a trustworthy dentist in Dharavi, look no further than Family Dental Care. We take pride in being the most reliable dental clinic in the area, offering a comprehensive range of services to address all your dental needs. From routine check-ups and cleanings to specialized procedures like fillings, extractions, root canals, teeth whitening, veneers, braces, dentures, and dental implants, our commitment is to deliver high-quality care.
                                <br></br>
                                Our adept dentists in Dharavi ensure a comfortable and pleasant experience, with a special focus on creating a welcoming environment for children. Conveniently situated, we are your preferred "dental clinic near me," dedicated to meeting the dental requirements of your entire family.
                                <br></br>
                                At Family Dental Care, we go above and beyond standard dental services. Our team comprises experts in various fields, providing specialized care as a teeth doctor, children's teeth specialist, pediatric dentist, orthodontist, endodontist, and dentist surgeon. Additionally, we offer professional teeth cleaning services at competitive rates, ensuring your oral health is entrusted to capable hands.

                                Choose Family Dental Care for a comprehensive and personalized approach to your family's dental well-being. Your mission for healthy and happy smiles starts with us.

                            </Typography>


                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
                                {data.map(({ title, description, icon }, index) => (
                                    <Grid key={String(index)} item xs={12} md={6}>
                                        <Box
                                            sx={{
                                                px: 2,
                                                py: 1.5,
                                                boxShadow: 1,
                                                borderRadius: 4,
                                                border: "1px solid #E0E0E0",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    mr: 1,
                                                    background: "#1b1075",
                                                    // backgroundColor: "primary.main",
                                                    borderRadius: "50%",
                                                    height: 36,
                                                    width: 36,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "primary.contrastText",
                                                    "& svg": {
                                                        fontSize: 20,
                                                    },
                                                }}
                                            >
                                                {icon}
                                            </Box>
                                            <Box
                                                sx={{ display: "flex", flex: 1, flexDirection: "column" }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontSize: "1rem",
                                                        mb: 1,
                                                        color: "secondary.main",
                                                    }}
                                                >
                                                    {title}
                                                </Typography>
                                                <Typography
                                                    // sx={{ lineHeight: 1.3, color: "text.secondary" }}
                                                    sx={{ lineHeight: 1.3, color: "#000000" }}
                                                    variant="subtitle1"
                                                >
                                                    {description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Box>
    );
};
export default Clinicinfo;
