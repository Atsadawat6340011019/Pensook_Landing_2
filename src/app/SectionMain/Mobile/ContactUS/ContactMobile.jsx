"use client";

import { AppBar, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactFormMobile from "./ContactFormMobile";
export default function ContactMobile() {

   const router = useRouter();
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   useEffect(() => {
       const handleResize = () => {
         setWindowWidth(window.innerWidth);
       };
   
       window.addEventListener("resize", handleResize);
   
       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);
   const redirectToPensookFacebook = () => {
     window.location.href = "https://www.facebook.com/pensookcare"; 
   };

   const redirectToPensookLine = () => {
     window.location.href = "https://line.me/R/ti/p/@217rhsxg"; 
   };

  return (
    <>
    <Box id="Contact-section" sx={{marginTop:"auto" ,height:"80px", }}></Box>
      <Box
        
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100%",
          background: "linear-gradient(to bottom, #FFFFFF, #B6DAFF)",
          overflow:"hidden",
        }}
      >
        <Typography
          sx={{ fontSize: 24, fontWeight: 700, color: "#007DFC", mt: 5 }}
        >
          CONTACT US
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", zIndex: 1, right: 590, top: -50 }}>
            <Image src={require("../../../../assets/shape_contactTop.png")} />
          </Box>
        </Box>

        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", zIndex: 1, left: 650, top: 400 }}>
            <Image src={require("../../../../assets/shape_contactBottom.png")} />
          </Box>
        </Box>

        <Grid
          container
          
          sx={{
            display: "flex",
            pl: windowWidth < 575 ? 5 : 10,
            pr: windowWidth < 575 ? 5 : 10,
            pt: 10,
            pb: 10,
            justifyContent:"center",
            alignItems: "center",
          }}
        >
          

          


          <Grid
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              zIndex: 2,
              flexDirection: "column",
              alignItems:"center"
            }}
          >
            <Box sx={{width:"100%",display: "flex",
              justifyContent: "start",flexDirection: "column",}}>
              <Typography
                sx={{ fontSize: 24, fontWeight: 400, color: "#915BD7" }}
              >
                บริษัท เป็นสุข เฮลท์แคร์ เทคโนโลยี จำกัด
              </Typography>
              <Typography
                sx={{ fontSize: 18, fontWeight: 400, color: "#5D6169" }}
              >
                PENSOOK HEALTH CARE TECHNOLOGY CO., LTD.
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "start", pt: "70px" ,}}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: 50,
                    bgcolor: "#007DFC",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoLocationSharp
                    style={{ width: "21px", height: "21px", color: "#FFFFFF" }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#3D3F43",
                    ml: 2,
                    
                  }}
                >
                  95/1 หมู่ที่ 3 ตำบลคลองจิก อำเภอบางปะอิน จังหวัดพระนครศรีอยุธยา 13160
                </Typography>
              </Box>
              </Box>


            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                flexDirection: "column",
              }}
            >
              
              
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems:"center",
                  width: "100%",
                  pt: "80px",
                  px:17,
                  pb:"75px"
                }}
              >
                <Button
                  variant="contained"
                  startIcon={
                    <FaFacebook
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#007DFC",
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    mb:5,
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookFacebook}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}
                  >
                    Facebook PENSOOK
                  </Typography>
                </Button>



                <Button
                  variant="contained"
                  startIcon={
                    <FaLine
                      style={{
                        width: "36px",
                        height: "36px",
                        color: "#06C755",
                      }}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    bgcolor: "#FFFFFF",
                    width: 230,
                    height: 65,
                    "&.MuiButton-root": {
                      borderRadius: "8px !important",
                      boxShadow: [
                        "-3px 8px 20px  rgba(0,0,0, 0.25) !important",
                      ],
                    },
                    "&: hover": {
                      bgcolor: "#CEE6FF",
                      "&.MuiButton-root": {
                        boxShadow: [
                          "-3px 8px 20px 0px rgba(0, 125, 252, 0.9) !important",
                        ],
                      },
                    },
                  }}
                  onClick={redirectToPensookLine}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#007DFC",
                      textTransform: "none",
                    }}
                  >
                    Line PENSOOK
                  </Typography>
                </Button>
              </Box>
            </Box>




            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                
                p: windowWidth < 420 ? 1.5 : 5,
                maxWidth: 700,
                backgroundColor: "rgba(248, 248, 248, 0.5)",
                borderRadius: 4,
                position: "relative",
                boxShadow: "0px 8px 10px  rgba(0, 0, 0, 0.5)",
                border: "1px solid white",
              }}
            >
              <ContactFormMobile
                sx={{
                  position: "absolute",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>


        </Grid>
        <AppBar
          position="static"
          sx={{
            marginTop: "auto",
            height: "80px",
            bgcolor: "#FFFFFF",
            px: windowWidth < 800 ? 5 : 15,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <Box sx={{width:windowWidth < 600 ? 96 : 172,height:windowWidth < 600 ? 24 : 43}}>
            <Image
              src={require("../../../../assets/LogoPensook_Bottom.png")}
             style={{width:"100%",height:"100%"}}
              alt="Picture of the author"
            />
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                sx={{ color: "#222222", fontSize: 16, fontWeight: 400 }}
              >
                ชีวิตดี ๆ เริ่มต้นที่
              </Typography>
              <Typography
                sx={{
                  color: "#007DFC",
                  ml: 0.5,
                  fontSize: 16,
                  fontWeight: 400,
                  
                }}
              >
                เป็นสุข
              </Typography>
            </Box>
          </Box>
        </AppBar>
      </Box>
    </>
  );
}
