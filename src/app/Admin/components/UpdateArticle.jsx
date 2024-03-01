"use client";

import { Box, Typography } from "@mui/material";
import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CardArticleEdit from "./CardArticleEdit";
import AddIcon from '@mui/icons-material/Add';
export default function UpdateArticle(onClick) {
  const [isEditChanged, setEditChanged] = useState(false);
  const maxItems = 1;
  const [dataArrayLength, setDataArrayLength] = useState(0);
  const handleDataArrayLengthChange = (newLength) => {
    setDataArrayLength(newLength);
    console.log('New Data Array Length:', newLength);
  };
  const handleEditChange = (changed) => {
    setEditChanged(changed);
  };
  return (
    <>
  

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100vw",
          height: "100%",
          pt: 10,
          flexDirection: "column",
          bgcolor:"#FFFFFF",
          pb:20
        }}
      >
        <Typography sx={{ fontSize: 50, fontWeight: 700, color: "#007DFC" }}>
          บทความที่น่าสนใจ
        </Typography>
        <Typography sx={{ fontSize: 40, fontWeight: 600, color: "#915BD7" }}>
          บทความเกี่ยวกับนวัตกรรมในด้านการแพทย์ และการดูแลสุขภาพ
        </Typography>
        <Box sx={{display:"flex" , width:"100%" , justifyContent:"center"}}>

        <Box
        sx={{
          
          position: "relative",
          
          zIndex:1
        }}
      >
        <Box sx={{ position: "absolute",  left: "-50vw", top: "90vh" }}>
          <Image src={require("../../../assets/Vector_Articles.png")} />
        </Box>
        <Box sx={{ position: "absolute",  top: "40vh", right: "-50vw" ,zIndex:2}}>
          <Image src={require("../../../assets/Vector_Articles.png")} />
        </Box>
      </Box>
        
        
        
        </Box>

        <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        px:15,
        zIndex:2
      }}
    >
      {Array.from({ length: Math.ceil(maxItems / 3) }).map((_, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            {Array.from({ length: 3 }).map((_, colIndex) => {
              const itemIndex = rowIndex * 3 + colIndex;
              return itemIndex < maxItems ? (
                <CardArticleEdit key={itemIndex} onDataArrayLengthChange={handleDataArrayLengthChange} onEditChange={handleEditChange}/>
              ) : null;
            })}
          </Box>
      ))}
    
      

      
    </Box>
        
   
      </Box>
    </>
  );
}
