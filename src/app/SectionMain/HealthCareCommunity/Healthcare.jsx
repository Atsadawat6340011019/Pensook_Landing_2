"use client";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Healthcare() {
  const router = useRouter();
  const [count, setCount] = useState(50);

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
      fontFamily: ["Roboto", "Noto Sans Thai", "sans-serif"].join(","),
    },
  });

  const redirectToPensookSocial = () => {
    window.location.href = "https://romyen.pensook.com/feed";
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ThemeProvider theme={Responsive}>
        <Box
          id="HealthCare-section"
          sx={{ marginTop: "auto", height: { md: "40px", lg: "80px" } }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100vw",
            height: { md: 660, lg: "100vh" },
            pt: 2,
            overflow: "hidden",
          }}
        >
          <Box sx={{display:{xs:"none",sm:"flex"},flexDirection:"column",alignItems: "center",justifyContent: "center",}}>
          <Typography
            sx={{
              fontSize: { xs:24,md: 30, lg: 35, xl: 45, xxl: 50 },
              fontWeight: 700,
              color: "#007DFC",
            }}
          >
            HEALTHCARE COMMUNITIES
          </Typography>

          <Typography
            sx={{
              color: "#5D6471",
              display: "flex",
              fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
              fontWeight: 500,
              pt: "10px",
            }}
          >
            เข้าถึงผู้ป่วยของคุณได้มากกว่า ที่
            <Typography
              sx={{
                color: "#007DFC",
                fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
                fontWeight: 500,
                ml: {xs:0,md:1},
              }}
            >
              Pensook Healthcare Communities
            </Typography>
          </Typography>

          <Typography
            sx={{
              color: "#5D6471",
              fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
              fontWeight: 500,
              mt: "15px",
            }}
          >
            พื้นที่แบ่งปันความรู้และประสบการณ์ในการดูแลสุขภาพ
          </Typography>
            </Box>
              <Box sx={{display:{xs:"flex",sm:"none"},flexDirection:"column",alignItems: "center",justifyContent: "center",}}>

              <Typography
            sx={{
              fontSize: { xs:24,md: 30, lg: 35, xl: 45, xxl: 50 },
              fontWeight: 700,
              color: "#007DFC",
            }}
          >
            HEALTHCARE COMMUNITIES
          </Typography>

          <Typography
            sx={{
              color: "#5D6471",
              display: "flex",
              fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
              fontWeight: 500,
              pt: "10px",
            }}
          >
            เข้าถึงผู้ป่วยของคุณได้มากกว่า ที่
            
          </Typography>
          <Typography
              sx={{
                color: "#007DFC",
                fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
                fontWeight: 500,
                
              }}
            >
              Pensook Healthcare Communities
            </Typography>
          <Typography
            sx={{
              color: "#5D6471",
              fontSize: { xs:16,md: 18, lg: 25, xl: 30, xxl: 40 },
              fontWeight: 500,
              
            }}
          >
            พื้นที่แบ่งปันความรู้และประสบการณ์ในการดูแลสุขภาพ
          </Typography>

              </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "90vw",
              height: { xs:362,md: 410, lg: 513 },
              mt: { xs:5,md: 5, lg: 10 },
              borderRadius: "50px",
              backgroundColor: "#F3F6FF",
              
            }}
          >
            <Grid container spacing={2}>
            <Grid
                item
                xs={12}
                
                sx={{
                  display: {xs:"flex",md:"none"},
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection:"column"

                  
                }}
              >
                
                  <Typography
                    sx={{
                      fontSize: {xs:30},
                      fontWeight: 600,
                      color: "#915BD7",
                      transition: "top: 1s",
                    }}
                  >
                    {count}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: {xs:24},
                      fontWeight: 500,
                      mt: { lg: -1, xxl: -3 },
                    }}
                  >
                    โพสต์
                  </Typography>

                  
                  <Box sx={{ display: { xs: "flex",  } }}>
                    <Typography
                      sx={{
                        color: "#5D6471",
                        fontSize: {xs:16},
                        fontWeight: 500,
                        display: "flex",
                        mt: 5,
                      }}
                    >
                      ให้การ
                      <Typography
                        sx={{
                          color: "#915BD7",
                          fontSize: {xs:16},
                          fontWeight: 500,
                        }}
                      >
                        ดูแลผู้ป่วย
                      </Typography>
                      <Typography
                        sx={{
                          color: "#5D6471",
                          fontSize: {xs:16},
                          fontWeight: 500,
                        }}
                      >
                        ที่เหนือกว่า
                      </Typography>
                    </Typography>
                  </Box>
               


                <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: {xs:16},
                      fontWeight: 500,
                      mt:5,
                      mb: 5,
                    }}
                  >
                    เข้าร่วม Pensook Healthcare Communities
                  </Typography>





                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="39"
                        height="22"
                        fill="none"
                        viewBox="0 0 39 22"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M2 11h30M22 2l14 9-14 9"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#915BD7",
                      width: 153,
                      height: 50,
                      borderRadius: "8px",
                      fontSize: 40,
                      fontWeight: 500,

                      "&:hover": {
                        bgcolor: "#6D23CC",
                      },
                    }}
                    onClick={redirectToPensookSocial}
                  >
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 20,
                        fontWeight: 500,
                        pr: 1.5,
                      }}
                    >
                      เข้าร่วม
                    </Typography>
                  </Button>


              </Grid>







              <Grid
                item
                md={4}
                lg={6}
                sx={{
                  display: {xs:"none",md:"flex"},
                  justifyContent: { md: "end", lg: "center" },
                  alignItems: "center",
                  pl: 5,

                  pr: { md: 2, lg: 0 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mt: { md: 5, lg: -5 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { md: 40, lg: 60, xl: 80, xxl: 100 },
                      fontWeight: 600,
                      color: "#915BD7",
                      transition: "top: 1s",
                    }}
                  >
                    {count}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: { md: 25, lg: 40 },
                      fontWeight: 500,
                      mt: { lg: -1, xxl: -3 },
                    }}
                  >
                    โพสต์
                  </Typography>
                  <Box sx={{ display: { md: "none", lg: "flex" } }}>
                    <Typography
                      sx={{
                        color: "#5D6471",
                        fontSize: { md: 25, lg: 40 },
                        fontWeight: 500,
                        display: "flex",
                        mt: 5,
                      }}
                    >
                      ให้การ
                      <Typography
                        sx={{
                          color: "#915BD7",
                          fontSize: { md: 25, lg: 40 },
                          fontWeight: 500,
                        }}
                      >
                        ดูแลผู้ป่วย
                      </Typography>
                      <Typography
                        sx={{
                          color: "#5D6471",
                          fontSize: { md: 25, lg: 40 },
                          fontWeight: 500,
                        }}
                      >
                        ที่เหนือกว่า
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Grid>


              <Grid
                item
                md={8}
                lg={6}
                sx={{
                  display: {xs:"none",md:"flex"},
                  justifyContent: "center",
                  alignItems: "center",
                  pr: { md: 0, lg: 7 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    pr: { md: 15, lg: 0 },
                  }}
                >
                  <Box sx={{ display: { md: "flex", lg: "none" } }}>
                    <Typography
                      sx={{
                        color: "#5D6471",
                        fontSize: { md: 25, lg: 40 },
                        fontWeight: 500,
                        display: "flex",
                        mt: 12,
                      }}
                    >
                      ให้การ
                      <Typography
                        sx={{
                          color: "#915BD7",
                          fontSize: { md: 25, lg: 40 },
                          fontWeight: 500,
                        }}
                      >
                        ดูแลผู้ป่วย
                      </Typography>
                      <Typography
                        sx={{
                          color: "#5D6471",
                          fontSize: { md: 25, lg: 40 },
                          fontWeight: 500,
                        }}
                      >
                        ที่เหนือกว่า
                      </Typography>
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", lg: "flex" },
                      flexDirection: { xs: "none", lg: "column" },
                      alignItems: { xs: "none", lg: "center" },
                    }}
                  >
                    <Typography
                      sx={{ color: "#5D6471", fontSize: 40, fontWeight: 500 }}
                    >
                      เข้าร่วม Pensook Healthcare
                    </Typography>
                    <Typography
                      sx={{
                        color: "#5D6471",
                        fontSize: 40,
                        fontWeight: 500,
                        mt: 0.5,
                      }}
                    >
                      Communities
                    </Typography>
                    <Button
                      variant="contained"
                      endIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="66"
                          height="41"
                          fill="none"
                          viewBox="0 0 66 41"
                        >
                          <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="5"
                            d="M5 21h51M37 9l19.25 11.958L37 32.917"
                          ></path>
                        </svg>
                      }
                      sx={{
                        bgcolor: "#915BD7",
                        width: 324,
                        height: 100,
                        borderRadius: "8px",
                        fontSize: 40,
                        fontWeight: 500,

                        mt: 7,
                        "&:hover": {
                          bgcolor: "#6D23CC",
                        },
                      }}
                      onClick={redirectToPensookSocial}
                    >
                      <Typography
                        sx={{
                          color: "#FFFFFF",
                          fontSize: 40,
                          fontWeight: 500,
                          pr: 1.5,
                        }}
                      >
                        เข้าร่วม
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  display: { xs:"none",md: "flex", lg: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#5D6471",
                      fontSize: 24,
                      fontWeight: 500,
                      mt: -8,
                      mb: 10,
                    }}
                  >
                    เข้าร่วม Pensook Healthcare Communities
                  </Typography>

                  <Button
                    variant="contained"
                    endIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="39"
                        height="22"
                        fill="none"
                        viewBox="0 0 39 22"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M2 11h30M22 2l14 9-14 9"
                        ></path>
                      </svg>
                    }
                    sx={{
                      bgcolor: "#915BD7",
                      width: 169,
                      height: 60,
                      borderRadius: "8px",
                      fontSize: 40,
                      fontWeight: 500,

                      "&:hover": {
                        bgcolor: "#6D23CC",
                      },
                    }}
                    onClick={redirectToPensookSocial}
                  >
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 24,
                        fontWeight: 500,
                        pr: 1.5,
                      }}
                    >
                      เข้าร่วม
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
