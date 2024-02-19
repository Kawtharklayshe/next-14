import React from "react";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { List, ListItem ,Box} from '@mui/material';
import { BookOpen, Clock, Visibility } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import * as moment from "moment";

import HowToReg from '@mui/icons-material/HowToReg';
import AccessAlarm from '@mui/icons-material/AccessAlarm';
import useStyles from "./style";

const CardType2=({ image, slug, title, about, deadline, endDate, acceptance, eventDate }) =>{
  const classes = useStyles();
  function convertToPlain(html) {
    if (typeof window === "object") {
        let tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        let text = tempDivElement.textContent || tempDivElement.innerText || "";
        
        // Split the text into an array of words
        let words = text.trim().split(/\s+/);
        
        // Take the first 150 words and join them back together
        let truncatedText = words.slice(0, 50).join(" ");
  
        // If the text was truncated, add ellipsis
        if (words.length > 80) {
            truncatedText += " ...";
        }
  
        return truncatedText;
    }
  }
  return (
    <Paper className={classes.courseContainer}>
      <Box sx={{ position: "relative" }}>
        <Image
          src={image || "/images/WorkShop1.png"}
          width="400px"
          height="300px"
          onClick={() => Router.push(`/events/event/${slug}`)}
        />
        <Typography
          variant="h6"
          component="h6"
          className={classes.eventDateTitle}
          sx={{
            backgroundColor: "primary.main",
            color: "onPrimary.main",
          }}
        >
          {moment(eventDate).format("DD MMM YYYY")}
        </Typography>
      </Box>
    <div className="p-6 relative">
    <div className={classes.priceContainer}>
        <div >${eventDate}eventDate</div>
      </div>
      <Typography variant="body1" component="a" href="#" className="font-medium block text-indigo-600">{slug}</Typography>
      <Typography variant="h6" className="text-lg font-medium block hover:text-indigo-600 duration-500 ease-in-out mt-2">{title}</Typography>
      <Typography variant="body2" className="text-slate-400 mt-3 mb-4">{convertToPlain(about)}</Typography>
      <List className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <ListItem className="flex items-center">
        <AccessTimeIcon className="text-lg leading-none me-2 text-slate-900 dark:text-white" />
        <Typography variant="body1">{`${deadline} deadline`}</Typography>

        </ListItem>
        <ListItem className="flex items-center">
          <AccessAlarm className="text-lg leading-none me-2 text-slate-900 dark:text-white" />
          <Typography>{endDate}</Typography>
        </ListItem>
        <ListItem className="flex items-center">
          <HowToReg className="text-lg leading-none me-2 text-slate-900 dark:text-white" />
          <Typography>{acceptance} Acceptance</Typography>
        </ListItem>
      </List>
     
    </div>
  </Paper>
  );
}


export default CardType2;