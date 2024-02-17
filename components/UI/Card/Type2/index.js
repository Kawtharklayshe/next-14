import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";



const CardType2=({
    mediaItems, title, description
}) =>{
    function convertToPlain(html) {
        if (typeof window === "object") {
          let tempDivElement = document.createElement("div");
          tempDivElement.innerHTML = html;
          return tempDivElement.textContent || tempDivElement.innerText || "";
        }
      }
  return (
    <Card shadow={true} className="mb-10">
      <CardHeader>
        <Image
          width={768}
          height={768}
          src={mediaItems[0].thumbnailUrl}
          alt={title}
          className="h-full w-full scale-110 mt-5 object-cover"
        />
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="small" color="blue" className="mb-2 !font-medium">
         test
        </Typography>
        <Typography
          as="a"
          href="#"
          variant="h5"
          color="blue-gray"
          className="mb-2 normal-case transition-colors hover:text-gray-900"
        >
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500">
        {convertToPlain(description)}
        </Typography>
       
      </CardBody>
    </Card>
  );
}


export default CardType2;