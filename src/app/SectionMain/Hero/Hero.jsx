"use client";

import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import Image from "next/image";
import ParticleAnimation from "./ParticleAnimation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function Hero() {
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

  return (
    <>
      <ThemeProvider theme={Responsive}>
        <Box
          id="Hero-section"
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100vw",
            height: { xs:400,md: 500, lg: 827 },
            
          }}
        >
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Image
              src={require("../../../assets/HeroImageBackground.png")}
              layout="fill"
              objectFit="cover"
              alt="BackgroundHero"
            />
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <Image
              src={require("../../../assets/HeroImageTablet.png")}
              layout="fill"
              alt="BackgroundHero"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "rgba(0, 125, 252, 0.26)",
              zIndex: 1,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <ParticleAnimation />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",

                  zIndex: 2,
                  top: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs:20,sm:30,md: 40, lg: 50, xl: 60, xxl: 70 },
                    fontWeight: 700,
                    color: "#FFFFFF",
                    opacity: 1,
                    pb: 3.5,
                  }}
                >
                  MAKE THE WORLD A BETTER PLACE
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:14,sm:20,md: 25, lg: 30, xl: 35, xxl: 40 },
                    fontWeight: 500,
                    color: "#FFFFFF",
                    opacity: 1,
                  }}
                >
                  “ เมื่อเรามีจุดมุ่งหมายที่ร่วมกัน
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:14,sm:20,md: 25, lg: 30, xl: 35, xxl: 40 },
                    fontWeight: 500,
                    color: "#FFFFFF",
                    opacity: 1,
                  }}
                >
                  เราสามารถเปลี่ยนแปลงโลกใบนี้ให้เป็นสถานที่ที่สวยงามยิ่งขึ้นทั้งสำหรับ
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs:16,sm:20,md: 25, lg: 30, xl: 35, xxl: 40 },
                    fontWeight: 500,
                    color: "#FFFFFF",
                    opacity: 1,
                  }}
                >
                  เราและลูกหลานของเรา ”
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
