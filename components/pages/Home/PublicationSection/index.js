import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// import style from "../../styles/homePage/style.module.css";
import Router from "next/router";
import { useRouter } from "next/router";
import ArrowForward from "@mui/icons-material/ArrowForward";

import useStyles from "./style";
function convertToPlain(html) {
  if (typeof window === "object") {
      let tempDivElement = document.createElement("div");
      tempDivElement.innerHTML = html;
      let text = tempDivElement.textContent || tempDivElement.innerText || "";
      
      // Split the text into an array of words
      let words = text.trim().split(/\s+/);
      
      // Take the first 150 words and join them back together
      let truncatedText = words.slice(0, 40).join(" ");

      // If the text was truncated, add ellipsis
      if (words.length > 150) {
          truncatedText += " ...";
      }

      return truncatedText;
  }
}
const PublicationSection=({ theme, data }) =>{
  const Router = useRouter();
  console.log("event",data)
  const classes = useStyles({ backgroundImage: data?.items?.image });
  return (     <div className={classes.container}>
    <Grid container direction="column" alignItems="center" paddingBottom={8} textAlign="center">
  <Typography variant="h3" component="h3" gutterBottom marginTop={6} marginBottom={6}>
   {data.detail.title}
  </Typography>

  <Typography variant="body1" color="textSecondary" maxWidth="xl">
  {data.detail.subTitle}
  </Typography>
</Grid>
    <div className={classes.grid}>
      {data.items.map((item, index) => (
        <Card key={index} className={classes.card}>
          <CardMedia
            component="img"
            src={item.image}
            className={classes.media}
            alt=""
          />
          <CardContent className={classes.content}>
            <Typography variant="h6" component="h2" className={classes.title}>
              {item.title}
            </Typography>
            <Typography variant="body2" className={classes.description}>
            
            {  convertToPlain(item.description)}
            </Typography>
            <div className={classes.btnContainer}>
              <Button component="a" href="blog-detail.html" className={classes.btnLink}>
                Read More <i className="uil uil-arrow-right"></i>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>);
}

export default PublicationSection;
