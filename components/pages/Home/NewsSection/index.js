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
           
            <div className="flex justify-end mt-10">
      <a href="/news" className={classes.buttonClass}>
      <Typography variant="h6" className="mb-2 !font-medium">
     See More    <ArrowForward  />
        </Typography>

        </a>
  
  </div>
  </Container>
  </Box>
  );
};

export default NewsSection;
