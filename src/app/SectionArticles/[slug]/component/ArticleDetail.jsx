


import { Box, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";


async function getPostsFromID( slug ) {
  const response = await fetch(`http://203.150.243.197:4000/landingPage/getArticle?articleId=${slug}`);

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options); 
}


export default async function ArticleDetail({params}) {


  const result = await getPostsFromID(params.slug);
  console.log('result ', result.response);


  
  return (
    <>
    

      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: 1763,
          display: "flex",
          justifyContent: "start",

          flexDirection: "column",

          p: 10,
        }}
      >
        <Box sx={{ position: "absolute", left: 10, top: 350 ,display:{xs:"none",xl:"flex"}}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="168"
            height="310"
            fill="none"
            viewBox="0 0 168 310"
          >
            <path
              fill="#E5F8FE"
              fillOpacity="0.74"
              fillRule="evenodd"
              d="M-72.62 50.367c81.373-61.551 157.578-71.203 206.085 0 35.379 51.933 52.185 145.222 7.959 200.041-4.545 5.635-92.503 90.604-183.087 47.125-98.177-47.125-81.395-209.014-30.957-247.166z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Box>
        <Box sx={{ position: "absolute", right: 0, top: 50,display:{xs:"none",xl:"flex"} }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="249"
            height="357"
            fill="none"
            viewBox="0 0 249 357"
          >
            <path
              fill="#E5F8FE"
              fillOpacity="0.74"
              fillRule="evenodd"
              d="M51.302 57.526c103.38-71.031 200.196-82.17 261.823 0 44.948 59.933 66.299 167.591 10.112 230.852-5.775 6.504-117.522 104.561-232.606 54.384-124.73-54.384-103.409-241.208-39.33-285.236z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <CalendarMonthIcon sx={{ color: "#808080", width: 24, height: 24 }} />
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#667085",
              ml: 0.5,
            }}
          >
            {formatDate(result.response.result.createTime)}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: {md:30,lg:35,xl:45,xxl:50}, fontWeight: 700, color: "#007DFC" }}>
        
        {result.response.result.label}
    
        </Typography>

        <Box sx={{ overflow: "auto", width: "100%", height: "100%" ,zIndex:2}}>
          

          <Typography
            sx={{ fontSize: {md:18,lg:20,xl:25,xxl:30}, fontWeight: 400, color: "#686868", mt: "69px" }}
          >
           {result.response.result.content}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
