import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";



const CardType3=({
    mediaItems, title, description,subTitle
}) =>{
  function convertToPlain(html) {
    if (typeof window === "object") {
        let tempDivElement = document.createElement("div");
        tempDivElement.innerHTML = html;
        let text = tempDivElement.textContent || tempDivElement.innerText || "";
        
        // Split the text into an array of words
        let words = text.trim().split(/\s+/);
        
        // Take the first 150 words and join them back together
        let truncatedText = words.slice(0, 30).join(" ");

        // If the text was truncated, add ellipsis
        if (words.length > 120) {
            truncatedText += " ...";
        }

        return truncatedText;
    }

      }
  return (
    <Card
    className="relative grid min-h-[40rem] w-100 items-end overflow-hidden rounded-xl"
    color="transparent"
  >
    <Image
      width={400}
      height={400}
      src={mediaItems[0].thumbnailUrl}
      alt="bg"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
     
    <div className="absolute inset-0 bg-black/60" />
    <CardBody className="relative flex flex-col justify-end">
    <Typography variant="h4" color="blue" className="mb-2 !font-medium">
     {title}
        </Typography>
      <Typography  color="white" variant="small">
        {subTitle}
      </Typography>
      <Typography
        variant="paragraph"
        color="white"
        className="my-2 font-normal"
      >
        {convertToPlain(description)}
      </Typography>
    </CardBody>
  </Card>
  );
}


export default CardType3;