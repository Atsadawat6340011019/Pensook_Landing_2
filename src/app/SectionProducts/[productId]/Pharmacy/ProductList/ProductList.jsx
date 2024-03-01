"use client";


import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import CardProductList from "./components/CardProductList";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";


export default function ProductList3() {

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
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          pt:{md:10,lg:0}
        }}
      >
        <Typography
          sx={{ color: "#0A5D87", fontSize: 40, fontWeight: 500, mt: 10 }}
        >
          ผลิตภัณฑ์อื่น ๆ ที่แนะนำ
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            flexDirection:{md:"column",lg:"row"},
            mt: 10,
          }}
        >
          <CardProductList />
      
        
        </Box>
        <AppBar
          position="static"
          sx={{
            marginTop: "auto",
            height: "80px",
            bgcolor: "#FFFFFF",
            px: 15,
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
            <Image
              src={require("../../../../../assets/Logopensook_Bottom.png")}
              width={172}
              height={43}
              alt="Picture of the author"
            />
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
      </ThemeProvider>
    </>
  );
}
