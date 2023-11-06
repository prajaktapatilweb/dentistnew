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
        <Box
            id="aboutus"
            sx={{ py: { xs: 10, md: 10 }, backgroundColor: "#ffffff" }}
        >
            <Container>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={5}>
                        <Box sx={{ position: "relative" }}>
                            <Image
                                src="/images/dr-akshays-dentavenue-dental-clinic-chembur-mumbai.webp"
                                height={100}
                                width={100}
                                layout="responsive"
                                alt="dr-akshays-dentavenue-dental-clinic-chembur-mumbai"
                            />
                            {/* <Box
                                sx={{
                                    position: "absolute",
                                    top: -39,
                                    right: { xs: 0, md: -35 },
                                    boxShadow: 2,
                                    borderRadius: 1,
                                    px: 2.2,
                                    py: 1.4,
                                    zIndex: 1,
                                    backgroundColor: "background.paper",
                                    width: 190,
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 1 }}>
                                    Why Choose Us:
                                </Typography>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Safety & Sanitation
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        color="inherit"
                                        value={100}
                                        order={1}
                                    />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Quality Care
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        color="inherit"
                                        value={100}
                                        order={2}
                                    />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Patient-Focused Culture
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        color="inherit"
                                        value={100}
                                        order={3}
                                    />
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Experienced Dentist & Team
                                    </Typography>
                                    <BorderLinearProgress
                                        variant="determinate"
                                        color="inherit"
                                        value={100}
                                        order={4}
                                    />
                                </Box>
                            </Box> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography
                            component="h1"
                            sx={{
                                position: "relative",
                                fontSize: { xs: 40, md: 30 },
                                ml: { xs: 0, md: 4 },
                                mt: 0,
                                mb: 3,
                                lineHeight: 1.3,
                                fontWeight: "bold",
                                color: "#0b1341",
                            }}
                        >
                            Dr. Akshay's DentAvenue Dental Clinic, Chembur <br />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { xs: 20, md: 25 },
                                    transform: "rotate(3deg)",
                                    left: 2,
                                    "& img": { width: { xs: 140, md: 140 }, height: "auto" },
                                }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/headline-curve.svg" alt="Headline curve" />
                            </Box>
                            {/* Enjoyable */}
                        </Typography>

                        <Typography
                            sx={{
                                color: "#000000",
                                textAlign: "justify",
                                mb: 2,
                                ml: { xs: 0, md: 4 },
                            }}
                        >



                            We are proud to introduce our affiliated clinic, Dr. Akshay's DentAvenue Dental Clinic, located in the vibrant neighbourhood of Chembur. Led by Dr. Akshay and his dedicated team, this clinic shares our commitment to providing exceptional dental care with a focus on patient-centred service. With cutting-edge technology and a compassionate approach, Dr. Akshay's DentAvenue Dental Clinic ensures that every smile receives the highest standard of care. Explore the excellence of dental services offered at this trusted Chembur location.




                            {/* Welcome to Dr. Akshay's DentAvenue Dental Clinic in Chembur, your
                            premier destination for high-quality dental care. Our experienced
                            team of dentist in Chembur professionals is passionate about
                            improving and maintaining your oral health. We offer a
                            comprehensive range of services, from preventive dentistry to root
                            canal treatment and dental implant clinic procedures, all tailored
                            to meet your unique needs. Using the latest advancements in dental
                            technology, we ensure precise diagnoses and efficient treatments.
                            We pride ourselves on creating a warm and welcoming dental clinic
                            near my location, where our patients feel comfortable and relaxed.
                            Trust us to provide you with exceptional dental care, including
                            full mouth implant solutions, and help you achieve a healthy,
                            beautiful smile that lasts a lifetime. Whether you're in need of a
                            dentist appointment near me, seeking a pediatric dentist in
                            Chembur, or looking for the best dentist in Chembur, we're here to
                            serve you. We also specialize in children's dentistry, ensuring a
                            positive dental experience for the little ones. Plus, with a
                            skilled dental surgeon near me, you can confidently explore a wide
                            range of advanced dental treatments. */}
                        </Typography>

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
                                                background: "#000000",
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
            </Container>
        </Box>
    );
};
export default Clinicinfo;
