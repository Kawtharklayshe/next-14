import Countup from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Container, Typography, Box } from "@mui/material";
import * as FAB from "@fortawesome/free-brands-svg-icons";
import * as FAS from "@fortawesome/free-solid-svg-icons";
import * as FAR from "@fortawesome/free-regular-svg-icons";
import "react-circular-progressbar/dist/styles.css";
import useStyles from "./style";

const StatisticsSection = ({ data }) => {
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });

  const getIcon = (name) => {
    const str = name;
    const newStr = "f" + str?.slice(1);
    return newStr;
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.overlay} />
      <Container maxWidth="false" className={classes.innerContainer}>
        <Grid container className={classes.gridContainer}>
          {data?.items?.map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Box
                className={classes.itemContainer}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
                data-aos-easing="ease-out"
              >
                <FontAwesomeIcon
                  icon={
                    FAB[getIcon(item.icon)] != null
                      ? FAB[getIcon(item.icon)]
                      : FAS[getIcon(item.icon)] != null
                      ? FAS[getIcon(item.icon)]
                      : FAR[getIcon(item.icon)] != null
                      ? FAR[getIcon(item.icon)]
                      : ""
                  }
                  className={classes.itemIcon}
                />
                <Typography variant="body1" className={classes.itemTitle}>
                  {item.title}
                </Typography>
                <Box
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  data-aos-easing="ease-out"
                >
                  <Countup
                    end={item.quantity}
                    duration={1.8}
                    startOnMount={true}
                    className={classes.itemQuantity}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default StatisticsSection;
