import React from 'react';
import { Grid, Typography, Button,Card, CardMedia, CardContent  } from '@mui/material';

const PublicationSection = ({ theme, data }) => {
  return (
    <>
      {/* First Grid */}
      <Grid container direction="column" alignItems="center" paddingBottom={8} textAlign="center">
  <Typography variant="h3" component="h3" gutterBottom marginTop={6} marginBottom={6}>
   {data.detail.title} Explore Latest Publication
  </Typography>

  <Typography variant="body1" color="textSecondary" maxWidth="xl">
  {data.detail.subTitle} test
  </Typography>
</Grid>

      {/* Second Grid */}
      <Grid container spacing={4} className="mt-4" id="grid">
      {data.items.map((item, index) => (
        <Grid item lg={4} sm={6} className="lg:w-1/3 sm:w-1/2 picture-item p-4 rounded-md">
        <Card>
      <div className="relative">
        <div className="shadow dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
          <CardMedia
            component="img"
            image={item.mediaItems[0].url}
            className="rounded-t-md shadow"
            alt=""
          />
        </div>
      </div>

      <CardContent className="pt-4 px-3">
        <Typography variant="h5" component="h5" className="mb-1 font-semibold text-lg">
          <a href=    {item.link} target="_blank" className="hover:text-indigo-600 transition-all duration-500 ease-in-out">    {item.title}</a>
        </Typography>
        <Typography variant="body2" className="text-slate-400">{item.publishingDate}</Typography>
      </CardContent>
    </Card>
        </Grid>
      ))}
      </Grid>
    </>
  );
}

export default PublicationSection;
