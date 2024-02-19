import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Box, Container, Typography } from "@mui/material";
import { Grid, IconButton } from '@mui/material';
import CardType2 from "../../../UI/Card/Type2";
import useStyles from "./style";
import ArrowForward from "@mui/icons-material/ArrowForward";

const ProjectsSection = ({ data }) => {
  const classes = useStyles({ backgroundImage: data.detail.backgroundImage });
  let { t } = useTranslation("common");
  return (
    <div className={classes.container}>
    <Grid container direction="column" alignItems="center" paddingBottom={8} textAlign="center">
  <Typography variant="h3" component="h3" gutterBottom marginTop={6} marginBottom={6}>
   {data.detail.title}
  </Typography>

  <Typography variant="body1" color="textSecondary" maxWidth="xl">
  {data.detail.subTitle}
  </Typography>
</Grid>
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
      <div className="flex justify-end mt-10">
      <a href="/projects" className={classes.buttonClass}>
      <Typography variant="h6" className="mb-2 !font-medium">
     See More    <ArrowForward  />
        </Typography>

        </a>
  
  </div>
    </div>
  );
};

export default ProjectsSection;
