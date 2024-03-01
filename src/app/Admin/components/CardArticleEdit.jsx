"use client";


import {
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Switch,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React , { useState , useEffect} from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
async function getPostsData() {
  const response = await fetch('http://203.150.243.197:4000/landingPage/getArticleList');

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

export default  function CardArticleEdit({onDataArrayLengthChange, onEditChange}) {
  const [post, setPost] = useState("");
  const [positionChanged, setPositionChanged] = useState(false);
  const [dialogToggle, setDialogToggle] = useState(false);
  
  const [sortedResult, setSortedResult] = useState([]);
  const [resultState , setResultState] = useState ([]);

  const initResult = async () => {
    try {
      const result = await getPostsData();
      setResultState(result);
      setSortedResult(result?.response?.result?.sort((a, b) => a.position - b.position));
    } catch (error) {}
  };

  useEffect(() => {
    initResult();
  }, []);

  useEffect(() => {
    const sortPosts = () => {
      if (resultState?.response?.result) {
        const sorted = resultState.response.result.sort((a, b) => a.position - b.position);
        setSortedResult(sorted);
      }
    };

    sortPosts();
    
  }, [resultState]);
  console.log(resultState)



  useEffect(() => {
    onEditChange(true);
    const newLength = resultState.length;
    onDataArrayLengthChange(newLength); 
  }, [resultState, onDataArrayLengthChange,onEditChange]);


  const handleChange = async (newPosition, index) => {
    const selectedPost = resultState.response.result[index];
    const targetPost = resultState.response.result.find((post) => post.position === newPosition);

    const updatedData = [
        { articleId: selectedPost._id, position: newPosition },
        { articleId: targetPost._id, position: selectedPost.position }
    ];

    setResultState({
        ...resultState,
        response: {
            ...resultState.response,
            result: resultState.response.result.map(post =>
                post._id === selectedPost._id ? { ...post, position: newPosition } :
                post._id === targetPost._id ? { ...post, position: selectedPost.position } :
                post
            )
        }
    });

    
};


const handleConfirmAll = async () => {
  const updatedDataArray = resultState.response.result.map((post, index) => ({
      articleId: post._id,
      position: post.position
  }));

  const res = await fetch(`http://203.150.243.197:4000/landingPage/updateArticlePosition?articleList=${JSON.stringify(updatedDataArray)}`, {
      method: 'PATCH',
  });

  if (res.ok) {
      console.log('Positions updated successfully');
  } else {
      console.error('Failed to update positions');
  }
  setDialogToggle(true);
  setTimeout(() => {
    setDialogToggle(false);
  }, 2000);
  setTimeout(() => {
  setPositionChanged(false);
}, 2000);
};
  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "#C5C5C5",
              color: "#007DFC",
            },
            color: "#007DFC",
            "&:hover": {
              backgroundColor: "#D5EAFF",
            },
            height: "30px",
            width:"125px",
            fontFamily: ["Roboto", "Noto Sans Thai", "sans-serif"].join(","),
            
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            boxShadow: "none",
            border: "2px solid #007DFC",
            marginTop: 5,
            
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
      },
    },
    Select: {
      fontFamily: ["Roboto", "Noto Sans Thai", "sans-serif"].join(","),
    },
  });
  return (
    <>
  <Dialog
          open={dialogToggle}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "8px",
              width: "100%",
              maxWidth: { xs: "270px", md: "428px" },
              height: "100%",
              maxHeight: { xs: 136, md: 224 },
            },
          }}
        >
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: { xs: 4, md: 5 },
              px: 8,
            }}
          >
            
              <Image src={require('../../../assets/check_icon.png')} width={63} height={63} />
           
            <DialogContentText
              id="alert-dialog-description"
              align="center"
              sx={{
                fontSize: { xs: 13, md: 24 },
                color: "#000",
                mt: { xs: "10px", md: "25px" },
              }}
            >
              บันทึกข้อมูลสำเร็จ
            </DialogContentText>
          </DialogContent>
        </Dialog>
    <Box sx={{display:"flex", justifyContent:"end", width:"100%" , mr:"48px",alignItems:"center"}}>
    <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            alignItems:"center"
          }}
        >
          <Typography
              sx={{ fontSize: 24, fontWeight: 500,  mt:7,pr:5}}
            >
              บทความทั้งหมด {sortedResult.length} / 9
            </Typography>
          <Button
            variant="outlined"
            startIcon={
              <AddIcon sx={{color:sortedResult.length === 9 ? "#808080" : "#007DFC",}}/>
            }
            sx={{
              width: 149,
              height: 50,
              bgcolor: sortedResult.length === 9 ? "#C5C5C5 " :  "#FFFFFF",
              mt: 7,
              "&:hover": {
                bgcolor: "#D5EAFF",
              },
              "&.MuiButton-root": {
                boxShadow: "none !important",
                borderRadius: "8px !important",
                border: sortedResult.length === 9 ? "none" : "1px solid #007DFC",
                
              },
              
            }}
            disabled={sortedResult.length === 9}
          >
            <Typography
              sx={{ fontSize: 18, fontWeight: 500, color:sortedResult.length === 9 ? "#808080" : "#007DFC", 
              }}
            >
              เพิ่มบทความ
            </Typography>
          </Button>
        </Box>
    <Button variant="contained"
            sx={{
              width: 213,
              height: 50,
              bgcolor: positionChanged ? "#007DFC" : "#C5C5C5 !important",
              mt: 7,
              "&:hover": {
                bgcolor: "#0060C2",
              },
              "&.MuiButton-root": {
                boxShadow: "none !important",
                borderRadius: "8px !important",
              },
            }} onClick={handleConfirmAll}
            disabled={!positionChanged}><Typography
            sx={{ fontSize: 18, fontWeight: 500, color: positionChanged ? "#FFFFFF" : "#808080" }}
          >
            บันทึก
          </Typography></Button>
    </Box>
        {sortedResult.map((post, index) => (
      <Paper
        key={index}
        elevation={3}
        sx={{
          width: 506,
          height: 580,
          p: 2.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          mr: "48px",
          mt: 5,
          "&.MuiPaper-root": {
            border: "1px solid #E5E9EB !important",
            borderRadius: "0px !important",
            boxShadow: [
              "0px 12px 16px -4px rgba(16, 24, 40, 0.1) !important",
              "0px 12px 16px -2px rgba(16, 24, 40, 0.1) !important",
            ],
          },
        }}
      >
        
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end", 
              alignItems: "flex-end",
              ml: 0.5,
              width: 458,
              height: 240,
              position: "relative",
            }}
          >
            <Image
              src={require("../../../assets/ExImgCard.png")}
              width={"100%"}
              height={"100%"}
            />
            <Box
              sx={{
                position: "absolute",
                top: 5, 
                left: 5,
              }}
            >
              
            

            <ThemeProvider theme={theme}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>

        <Select
          value={post.position}
          onChange={(event) => {
            handleChange(event.target.value, index);
            setPositionChanged(true);
          }} 
          IconComponent={KeyboardArrowDownIcon}
          sx={{height: 30,
            width:125,
            color: "#007DFC",
            backgroundColor: "#fff",
            fontWeight: 500,
            fontSize:14,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#007DFC",
              border: "1px solid",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#007DFC",
            },
            "& .MuiSvgIcon-root": {
              color: "#007DFC",
            },
            borderRadius: "8px",}}
        >
          
          {sortedResult.map((option) => (
                      <MenuItem key={option.position} value={option.position} sx={{ fontSize: 14, fontWeight: 500}}>
                  แสดงลำดับ {option.position}
                </MenuItem>
              ))}
            
        </Select>
        
      </FormControl>
      
            </ThemeProvider>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: -50, 
                right: 5,
              }}
            >
              <Button
                variant="contained"
                startIcon={
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
    >
      <path fill="url(#pattern0)" d="M0 0H17V17H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01563)" xlinkHref="#image0_3029_17342"></use>
        </pattern>
        <image
          id="image0_3029_17342"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUZSURBVHic1ZvPa11FHMXP1NSAWBBT0iQqWFy0VrtR2kUXQhFBErE22lZFlFJpqYp/gcuC4MJatCUlWbnyR6wQY2tARRCpLqJCY1sVUrG2xcSisQZfKs3HxZ0Hry8zc++7990fOfAgmfl+z8w5d+7ceffNGMUAWC3pEUn9ktZL6pa0Ji4vIxYkfS1pnzHmx1YSgQclbZd0n6K+zkk6K+m4pFFjzEJSoj5gGPiP8vBdC8I3ACdj+H4Ftich2w/M560uIW5J0N9+4O+EfIvAKz6iDuBIXkpS4DKwIkb8AFBrkXcReNJFdrjdCjJgAXgmRvzDwL8p+WeAVaZx2Es6EmjvnKQxST9Lmgl1rA2oSZo0xlz0BQADkj6Q1OmqlnRM0klJayXtlnSTI+7FOlkf/nv+PLALMA6CUkB42NeAx5ri1wNXHLHH6wHDHrJJoLcUlR4kED/gyTvoiJ8WsBr3o+480FO0wBDSire5Lzty/hCw20O4q0hxccgi3ua/48g7I2DUUTHN8rrn48RvI3r0NeNtAd87Kg4VJS4ObRAfyt8mYNZRsb8ogSHkLH4SMMI9NHYWJTLQ+dAiZwF4NEP+FeDeeqALOwpR6e98nle+BvQ3BlfKgJgrl/XKL82vkgGFi7dJlTCgFPE2sXQDShNvk0s1oFTxlqA0A0oXb0lKMaAS4i1R4QZURrwlK9SAKogHOhr/KcyAssXb/Gmi9x8TQF9hBlRAfDdLX52PFWJA2eItx4Ajdz53A6og3vLscBHkakBVxFuuYg2oknjLV5wBVRNvOYsxoIriLW/+BlRVvOXO14Aqi7f8+RlQdfG2jXwMAO7H/8NqJcTbdtpvANAL/FZ18batXAwYWw7ibXvtNQDY4sm9Svb39sH8NMjDgHFP7t6YvMLF23bbZwBws0fERExeO77VbQQOAVPAPx6uxEhrwKAn74FATtafuzqJdrBdyyK4GR2hRgPY4CiblfSVT7z8G5oWJD1ujPnY1xjQKemEpK2tdzWM4B68AFz7hk4bY641FxLNCcfkFn9V0s6QeIs3lIN4SYtpDehylF2u/wHcAGwFPpN0VNKNjvgFSYPGmLFQQ8BGScGJNQNm094CLuM2A6OKNlLfLbdJdcQO+wbs8bR3StKIpEsJOCTpJUnNc9SltAa4cLv9xKEm6YmE4iXpIUfZKUmbjTG1JATASkkHHVU/tNOAJLioaNh/00LOHY6ykaTiLZ6VdJujfDztHJB02NWBpA8lbWpRvCStytI+cKek1xxVNUmfpDVg2BLEoSbpI0lbjDGDob2/eYBoo+cJSbc6qg8bY/7qUHR1mvcEBvcIGmOmgE2SnpfU19impN/tZ0rSp8aY+ZT9zwQr/nNFp1yaMSfp1XrgjGOB9EKBfQ3Cs4CLW6l2Ey2VXVikYRfsCkUTUzPWtVtIUbBX/gtJ93hCDhhj3m1MeN/hUmW2yrYyAoAe4LQnB2BoiS7gOU/wU4UojEFSA4A1+Ic9wAiu4zdAF+7t8heAviUJBSOJAURX/kxA/FFCI9oGuPBt2SbEGQCsBc6mFm9JevG/XLgAPE3M6a284DMAWAnsITpZllp846GpfZKGArG/KFrU/KToOV8U3nOUfSnpLl2/BmnGsKKTpyRuCXgr4OZygnvCS2BAB/BmyZ3PgkXgAFkf4cBe2vDCsWDM0c5zTkQT4xDRe/4qowa8TnTKvWXEDhWgS9KA/ayT1KP8j897u6Prv2yNS5owxvyZlvB/KMekuIZPmNAAAAAASUVORK5CYII="
        ></image>
      </defs>
    </svg>
                }
                sx={{
                  width: 80,
                  height: 30,
                  bgcolor: "#007DFC",
                  mt: 7,
                  "&:hover": {
                    bgcolor: "#0060C2",
                  },
                  "&.MuiButton-root": {
                    boxShadow: "none !important",
                    borderRadius: "8px !important",
                    border: "none !important",
                  },
                }}
              >
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400, color: "#FFFFFF" }}
                >
                  แก้ไข
                </Typography>
              </Button>
            </Box>
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
              sx={{ fontSize: 14, fontWeight: 600, color: "#6941C6" }}
            >
              นวัตกรรมด้านการแพทย์
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 458,
                pt: 1,
              }}
            >
              <Typography
                sx={{ fontSize: 24, fontWeight: 600, color: "#007DFC" }}
              >
                {post.label}
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
          <CalendarMonthIcon sx={{ color: "#808080", width: 24, height: 24 }} />
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
       
       ))}
       
    </>
  );
}
