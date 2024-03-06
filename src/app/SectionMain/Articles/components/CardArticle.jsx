"use client"

import { Box, Typography } from "@mui/material";
import React , { useState , useEffect} from "react";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from 'next/link';

async function getPostsData() {
  const response = await fetch("http://203.150.243.197:4000/landingPage/getArticleList");

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


export default  function CardArticle() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [resultState , setResultState] = useState ([]);

   const initResult = async () =>{
    try{
      const result = await getPostsData ()
      setResultState(result)
    } catch (error){}
  }
  useEffect(()=> {
    initResult()

  },[])
  console.log(resultState)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const sortedPosts = resultState?.response?.result?.sort((a, b) => a.position - b.position);
  return (
    <>
    {resultState?.response?.result?.map((post, index) => (
      <Link href={`/SectionArticles/${post._id}` } style={{ textDecoration: 'none' }}>
      <Paper
        key={index}
        elevation={3}
        sx={{
          width: {xs:"90vw" ,md: 692,lg:506},
          height: {xs: "70vh",md: 580,lg:580},
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          mr: {xs:0,md:3},
          mt: 5,
          cursor: "pointer",
          "&.MuiPaper-root": {
            border: "1px solid #E5E9EB !important",
            borderRadius: "0px !important",
            boxShadow: [
              "0px 12px 16px -4px rgba(16, 24, 40, 0.1) !important",
              "0px 12px 16px -2px rgba(16, 24, 40, 0.1) !important",
            ],
          },
          "&:hover" :{
            backgroundColor:"#EEEEEE"
          }
        }}
      >
        <Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              ml: 0.5,
              width: {md:644,lg:458},
              height: 240,
            }}
          >
            <Image
              src={require("../../../../assets/ExImgCard.png")}
              layout="fill"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              pt: 4,
            }}
          >
            
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, color: "#6941C6", }}
            >
              นวัตกรรมด้านการแพทย์
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: {md:644,lg:458},
                pt: 1,
              }}
            >
              
              <Typography
                sx={{ fontSize: 24, fontWeight: 600, color: "#007DFC", }}
                
              >
                {post.label} บริษัท
              </Typography>
              
              <ArrowOutwardIcon
                sx={{ width: 28, height: 28, color: "#007DFC", mt: 0.5 }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 400,
                color: "#667085",
                mt: 1,
                
              }}
            >
              {post.content}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "start" }}>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <rect
              width="18"
              height="15"
              x="3"
              y="6"
              stroke="gray"
              strokeWidth="2"
              rx="2"
            ></rect>
            <path
              fill="gray"
              d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10H3z"
            ></path>
            <path
              stroke="gray"
              strokeLinecap="round"
              strokeWidth="2"
              d="M7 3v3M17 3v3"
            ></path>
            <rect width="4" height="2" x="7" y="12" fill="gray" rx="0.5"></rect>
            <rect width="4" height="2" x="7" y="16" fill="gray" rx="0.5"></rect>
            <rect
              width="4"
              height="2"
              x="13"
              y="12"
              fill="gray"
              rx="0.5"
            ></rect>
            <rect
              width="4"
              height="2"
              x="13"
              y="16"
              fill="gray"
              rx="0.5"
            ></rect>
          </svg>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: "#667085",
              ml: 1.5,
              
            }}
          >
            {formatDate(post.createTime)}
          </Typography>
        </Box>
      </Paper>
    </Link>
      ))}
    </>
  );
}
