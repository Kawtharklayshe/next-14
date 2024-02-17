import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Typography } from "@mui/material";
import CardType2 from "../../../UI/Card/Type2";
import useStyles from "./style";
import ArrowForward from "@mui/icons-material/ArrowForward";

const ProjectsSection = ({ data }) => {
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });
  let { t } = useTranslation("common");
  return (
    <Box data-aos="zoom-out" className={classes.root}>
      <Container maxWidth="false" className={classes.innerContainer}>
        <Typography variant="h6" component="h6" className={classes.title}>
          {data.detail.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subTitle}>
          {data.detail.subTitle}
        </Typography>
        {/* <TailwindCarousel items={data.items} parentTitle={t("projects")} /> */}
      
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.items.map(({ mediaItems, title, description}) => (
          <CardType2
            key={title}
            mediaItems={mediaItems}

            title={title}
            description={description}
        
           
          />
        ))}
      

      </div>
      <div className="flex justify-end mt-2">
      <a href="/projects" className="">
      <Typography variant="h6" color="blue" className="mb-2 !font-medium">
     See More    <ArrowForward  />
        </Typography>
        </a>
  
  </div>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
