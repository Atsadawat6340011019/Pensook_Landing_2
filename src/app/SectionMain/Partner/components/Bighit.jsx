"use client";

import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function Bighit() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
    <ThemeProvider theme={Responsive}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: 50,
            fontWeight: 600,
            color: "#178A1C",
            borderBottom: "5px solid #178A1C",
            mb: 1,
            width: 550,
          }}
        >
          Big Hit Entertainment
        </Typography>
        <Typography
          sx={{
            fontSize: {md:18,lg:24,xl:windowWidth <= 1700 ? 26 : 30 ,   xxl: 30},
            fontWeight: 400,
            color: "#606875",
            mt: 2,
          }}
        >
            เพราะการแก้ไขปัญหาให้คุณ คือธุรกิจของเรา เราเป็นผู้นำในด้าน         
            การให้บริการ พัฒนาซอฟต์แวร์ แอปพลิเคชัน และโซลูชันด้านไอที        
            แบบครบวงจร (Full-stack) ตั้งแต่การให้คำปรึกษาไปจนถึงการ        
            Maintenance ระบบ เรามีความตั้งใจที่จะเปลี่ยนให้ นวัตกรรม         
            และไอเดีย ระดับโลกของคุณให้กลายเป็นซอฟต์แวร์ที่มีคุณภาพ          
            บริษัทฯ รับพัฒนาซอฟต์แวร์ เขียนโปรแกรม และ แอปพลิเคชัน         
            ตามความต้องการทางธุรกิจคุณได้ ทุกรูปแบบ ทุกประเภท         
            ทุกความต้องการทางธุรกิจ          
        </Typography>
      </Box>
      </ThemeProvider>
    </>
  );
}
