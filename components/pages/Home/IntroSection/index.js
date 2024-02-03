import React from "react";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import IntroVideo from "./IntroVideo";
import useStyles from "./style";

const IntroSection = ({ data }) => {
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });
  return (
    <Box data-aos="zoom-in" className={classes.root}>
      <Container maxWidth="false" className={classes.innerContainer}>
        <Typography variant="h6" component="h6" className={classes.title}>
          {data.detail.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          {data.detail.subTitle}
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="ease-out"
            >
              <IntroVideo
                video={data?.items?.video}
                image={data?.items?.image}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={classes.detailsContainer}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            data-aos-easing="ease-out"
          >
            <Typography variant="h4" className={classes.detailsTitle}>
              {data?.items?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.detailsSubTitle}
            >
              {data?.items?.subTitle}
            </Typography>
            <Button
              className={classes.detailsButton}
              onClick={() => window.open(data?.items?.buttonUrl, "_blank")}
            >
              {data?.items?.button}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntroSection;
