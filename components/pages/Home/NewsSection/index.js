import { useRouter } from "next/router";
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Params } from "./config";
import { Box, Container, Grid, Typography } from "@mui/material";
import NewsCard from "../../News/Cards/Type1";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css";
import useStyles from "./style";

const NewsSection = ({ data, theme }) => {
  const Router = useRouter();
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <Box data-aos="zoom-in" className={classes.root}>
      <Container maxWidth="false" className={classes.innerContainer}>
        <Grid container>
          <Grid item xs={12} lg={3} className={classes.titlesContainer}>
            <Typography variant="h6" component="h6" className={classes.title}>
              {data.detail.title}
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              {data.detail.subTitle}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Swiper
              {...Params}
              dir={Router.locale == "ar" ? "rtl" : "ltr"}
              className={classes.swiperRoot}
            >
              {data.items.map((newsItem, index) => {
                return (
                  <SwiperSlide
                    dir={Router.locale == "ar" ? "RTL" : "LTR"}
                    key={index}
                    className={classes.slider}
                  >
                    <NewsCard
                      data={newsItem}
                      theme={theme}
                      parentPageTitle="News"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsSection;
