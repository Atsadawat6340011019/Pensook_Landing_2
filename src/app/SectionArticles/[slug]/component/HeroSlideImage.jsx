"use client";

import { Box, IconButton, Typography,  } from "@mui/material";
import React ,{ useState , useEffect} from "react";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { BorderAll } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { useSpring, animated } from '@react-spring/web'
import { useSpringCarousel } from 'react-spring-carousel'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
export default  function HeroSlideImage() {
  const [slidePost , setSlidePost] = useState ();
  const [resultState , setResultState] = useState ([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState([]);

  const Responsive = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 820,
        lg: 1250,
        xl: 1500,
        xxl: 1800,
      },
    },
    typography: {
      fontFamily: "Noto Sans Thai, sans-serif",
    },
  });


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

  const nextPost = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % resultState?.response?.result?.length);
  };

  const prevPost = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + resultState?.response?.result?.length) % resultState?.response?.result?.length);
  };

  const currentItem = resultState?.response?.result?.[currentIndex];

  if (!currentItem) {
    return <div>No items to display</div>;
  }

  return (
    <>
    <ThemeProvider theme={Responsive}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 709,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          
        }}
      >
        
        <Image
          src={require("../../../../assets/HeroImageBackground.png")}
          alt="BackgroundHero"
          style={{width:"100%",height:"100%",objectFit: "cover", }}
          
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(0, 125, 252, 0.36)",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            bgcolor: "#F4F8FB",
            borderRadius: "8px",
            zIndex: 2,
            width: "90vw",
            height: 487,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt:10
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              width: "100%",
            }}
          >

<Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  
                }}
              >
            <Box sx={{ ml: {md:7,lg:5}, cursor: "pointer" }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
                onClick={prevPost} disabled={currentIndex === 0}
             
              >
                <g filter="url(#filter0_b_2828_2121)">
                  <rect
                    width="36"
                    height="36"
                    fill="#fff"
                    fillOpacity="0.9"
                    rx="18"
                    onMouseOver={(e) => (e.target.style.fill = "#CEE6FF")}
                    onMouseOut={(e) => (e.target.style.fill = "#fff")}
                  ></rect>
                  <rect
                    width="35"
                    height="35"
                    x="0.5"
                    y="0.5"
                    stroke="#007DFC"
                    rx="17.5"
                  ></rect>
                  <path
                    stroke="#007DFC"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.67"
                    d="M20.5 23l-5-5 5-5"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_b_2828_2121"
                    width="52"
                    height="52"
                    x="-8"
                    y="-8"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="4"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2828_2121"
                    ></feComposite>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2828_2121"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </Box>
           </Box>


      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          width: "30vw",
          flexDirection: "column",
          height:487,
          py:5,
          px:{md:5,lg:10,xl:15}
        }}
      >
        <Typography sx={{ fontSize: 45, fontWeight: 700, color: "#915BD7" }}>
          {currentItem.label}
        </Typography>
        <Typography sx={{ fontSize: 18, fontWeight: 400, color: "#6F6F6F" }}>
        {currentItem.content}
        </Typography>


        <Box sx={{ display: "flex", justifyContent: "start" ,marginTop:"auto"}}>
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
            {formatDate(currentItem.createTime)}
          </Typography>
        </Box>
        
      </Box>
      <Box>
        {/* <Image
          src={require(`${currentItem.displayImagePath}`)}
          width={472}
          height={416}
        /> */}
      </Box>    
    
      
          </Box>
          <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  width:"100%"
                }}
              >
            <Box sx={{ mr: {md:7,lg:5}, cursor: "pointer" }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
                onClick={nextPost} disabled={currentIndex === resultState?.response?.result?.length - 1}
              >
                <g filter="url(#filter0_b_2828_2118)">
                  <rect
                    width="36"
                    height="36"
                    fill="#fff"
                    fillOpacity="0.9"
                    rx="18"
                    onMouseOver={(e) => (e.target.style.fill = "#CEE6FF")}
                    onMouseOut={(e) => (e.target.style.fill = "#fff")}
                  ></rect>
                  <rect
                    width="35"
                    height="35"
                    x="0.5"
                    y="0.5"
                    stroke="#007DFC"
                    rx="17.5"
                  ></rect>
                  <path
                    stroke="#007DFC"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.67"
                    d="M15.5 23l5-5-5-5"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_b_2828_2118"
                    width="52"
                    height="52"
                    x="-8"
                    y="-8"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="4"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2828_2118"
                    ></feComposite>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2828_2118"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </Box>
            </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            position: "absolute",
            mt: 80,
            zIndex: 5,
          }}
        >
          <FiberManualRecordIcon
            sx={{
              color: currentIndex === 0 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: currentIndex === 1 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: currentIndex === 2 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: currentIndex === 3 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: currentIndex === 4 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: currentIndex === 5 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: currentIndex === 6 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: currentIndex === 7 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
          />
          <FiberManualRecordIcon
            sx={{
              color: currentIndex === 8 ? "#007DFC" : "#CDCDCD",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
      </ThemeProvider>
    </>
  );
}
