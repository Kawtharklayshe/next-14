import { useRouter } from "next/router";
import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Params } from "./config";
import { Box, Container, Typography ,Grid} from "@mui/material";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css";
import useStyles from "./style";

const GallerySection = ({ data }) => {
  const Router = useRouter();
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });
  SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);
  return (
    <Box data-aos="fade-up" className={classes.root}>
      <Container maxWidth="false" className={classes.innerContainer}>
      <Grid container direction="column" alignItems="center" paddingBottom={8} textAlign="center">
  <Typography variant="h3" component="h3" gutterBottom marginTop={6} marginBottom={6}>
   {data.detail.title}
  </Typography>

  <Typography variant="body1" color="textSecondary" maxWidth="xl">
  {data.detail.subTitle}
  </Typography>
</Grid>
        <Swiper
          {...Params}
          dir={Router.locale == "ar" ? "rtl" : "ltr"}
          className={classes.swiperRoot}
        >
          {data?.items.map((image, index) => {
            return (
              <SwiperSlide
                dir={Router.locale == "ar" ? "RTL" : "LTR"}
                key={index}
                className={classes.slider}
              >
                <img
                  className={classes.sliderImage}
                  src={image.thumbnailUrl}
                  alt="galleryImage"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default GallerySection;
