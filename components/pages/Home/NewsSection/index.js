import { useRouter } from "next/router";
import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Params } from "./config";
import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/controller";
import "swiper/css";
import useStyles from "./style";
import CardType3 from "../../../UI/Card/Type3";

const NewsSection = ({ data, theme }) => {
  const Router = useRouter();
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });

  function convertToPlain(html) {
    if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
  
    <Box data-aos="zoom-out" className={classes.root}>
    <Container maxWidth="false" className={classes.innerContainer}>
          <Grid item xs={12} lg={3} className={classes.titlesContainer}>
            <Typography variant="h6" component="h6" className={classes.title}>
              {data.detail.title}
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              {data.detail.subTitle}
            </Typography>
          </Grid>
         
     
          <Swiper
              {...Params}
              dir={Router.locale == "ar" ? "rtl" : "ltr"}
              className={classes.swiperRoot}
              slidesPerView={3}
            >
              {data.items.map((props, idx) => {
                   
                return (
                  <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-2">
                  <SwiperSlide
                    dir={Router.locale == "ar" ? "RTL" : "LTR"}
                    key={idx}
                    className={classes.slider}
                  >
                 
                   <CardType3 key={idx} {...props} />
                 
                  </SwiperSlide>
                  </div>
                );
               
              })}
            </Swiper>
           
      <div className="flex justify-end mt-2">
    <a href="/news" className="">
     <Typography variant="h6" color="blue" className="mb-2 !font-medium">
     See More   <ArrowForward  />
        </Typography>
    </a>
  </div>
  </Container>
  </Box>
  );
};

export default NewsSection;
