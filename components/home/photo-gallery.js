import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme, styled } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { data } from "./photo-gallery.data";
import PhotoCardItem from "../course/photo-card-item";
import Heading from "./Heading";
import { headList9 } from "../constants/titlefile";
const SliderArrow = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
      sx={{
        backgroundColor: "background.paper",
        color: "primary.main",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        },
        bottom: { xs: "-70px !important", md: "-28px !important" },
        left: "unset !important",
        right: type === "prev" ? "60px !important" : "0 !important",
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === "next" ? (
        <IconArrowForward sx={{ fontSize: 22 }} />
      ) : (
        <IconArrowBack sx={{ fontSize: 22 }} />
      )}
    </IconButton>
  );
};
const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "absolute",
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: "left",
    "& li": {
      marginRight: theme.spacing(2),
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));
const Photogallery = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const sliderConfig = {
    infinite: true,
    autoplay: true,
    adaptiveheight: false,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box
        sx={{
          height: 8,
          width: 30,
          backgroundColor: "divider",
          display: "flex",
          borderRadius: 4,
        }}
      />
    ),
  };
  return (
    <section className="events1">
      {/* <section className='section' style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.7)" }}> */}
      <section className='section' style={{ backgroundImage: "linear-gradient(to right, rgba(61,51,204,0.7), rgba(154,219,206,0.7)" }}>
        <Box
          id="gallery"
          sx={{
            py: { xs: 7, md: 10 },

          }}
        >
          <Container maxWidth="lg" sx={{ textAlign: 'justify' }}>
            <Heading data={headList9}></Heading>
            <Typography variant="p" sx={{ color: "black", fontSize: 18, fontWeight: 500 }} >

              We are proud to introduce our affiliated clinic, Dr. Akshay's DentAvenue
              Dental Clinic, located in the vibrant neighbourhood of Chembur. Led by
              Dr. Akshay and his dedicated team, this clinic shares our commitment to
              providing exceptional dental care with a focus on patient-centred
              service. With cutting-edge technology and a compassionate approach, Dr.
              Akshay's DentAvenue Dental Clinic ensures that every smile receives the
              highest standard of care. Explore the excellence of dental services
              offered at this trusted Chembur location.
            </Typography>
            {/* <Slider {...sliderConfig}>
          {/* {data.map((item) => (<PhotoCardItem key={String(item.id)} item={item} />))} *
          {[...Array(17)].slice(0).map((e, i) => (
            <PhotoCardItem key={i} item={i + 1} />
          ))}
        </Slider> */}
          </Container>
        </Box>
      </section>
    </section>

  );
};
export default Photogallery;
