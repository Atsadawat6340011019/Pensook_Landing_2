"use client";

import React ,{useState ,useEffect }from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Noto_Sans_Thai } from "next/font/google";

const noto_Sans_Thai = Noto_Sans_Thai({
  weight: ['400', '500' , '600' , '700'],
  subsets: ["latin"],
  display: "swap",
});
export default function ProductDetail1() {
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


  const SpecificationList = [
    { id: 1, text: "ขนาดตู้ กว้าง 1 เมตร ยาว 1.2 เมตร สูง 1.8 เมตร" },
    { id: 2, text: "ตู้ปิดมิดชิดเพื่อป้องกันแสงแดดจากภายนอกเข้าไปในตู้ยา" },
    {
      id: 3,
      text: "บรรจุยาได้ ทั้งหมด 56 แถว แถวละ 20-30 ชิ้นตามขนาดของ package",
    },
    { id: 4, text: "สามารถบรรจุยาได้มากสุดถึง 1,680 ชิ้น" },
    { id: 5, text: "จอทัสกรีนขนาด 22 นิ้ว สำหรับโต้ตอบกับผู้ใช้งาน" },
  ];

  const TechnologyList = [
    {
      id: 1,
      text: "Software บริหารจัดการตู้จ่ายยาที่ทันสมัย เพื่อแสดงสถานะต่าง ๆ",
    },
    { id: 2, text: "กล้องวงจรปิดภายในตู้เพื่อตรวจสอบความผิดปกติ" },
    { id: 3, text: "รับยาผ่านการแสกน QR code" },
    { id: 4, text: "มี GPS ระบุตำแหน่งของตู้ได้" },
    {
      id: 5,
      text: "ระบบทำความเย็นควบคุมอุณภูมิตู้เพื่อให้เหมาะสมในการเก็บรักษายา",
    },
    { id: 6, text: "ระบบ print bar code ของฉลากยาแบบอัติโนมัติ" },
  ];

  const UserCareList = [
    {
      id: 1,
      text: "สามารถรับยาได้สะดวก โดยไม่ต้องก้มรับยา",
    },
    { id: 2, text: "สามารถหยิบยาออกมาได้อย่างง่ายดาย โดยไม่เกิดอันตราย" },
    { id: 3, text: "ระบบทำความสะอาดจอทัสกรีนด้วย UV disinfection light อัตโนมัติทุกๆ 5 นาที" },
    { id: 4, text: "สามารถบอกรายละเอียดในการรับประทานยาให้กับผู้รับยาได้" },
    
    /* { id: 1, text: "สามารถรับยาได้สะดวก โดยไม่ต้องก้มรับยา" },
    { id: 2, text: "สามารถหยิบยาออกมาได้อย่างง่ายดาย โดยไม่เกิดอันตราย" },
    {
      id: 3,
      text: "ระบบทำความสะอาดจอทัสกรีนด้วย UV disinfection light อัตโนมัติทุกๆ 5 นาที",
    },
    { id: 4, text: "สามารถบอกรายละเอียดในการรับประทานยาให้กับผู้รับยาได้" }, */
  ];

  const ServiceList = [
    {
      id: 1,
      text: "สามารถออกแบบ หรือปรับเปลี่ยน spec ของ Phamacy vending machine ได้ตามใจคุณ",
    },
  ];

  return (
    <>
     <ThemeProvider theme={Responsive}>
      <Box
        sx={{
          
          width: "100vw",
          height:"100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pt: 10,
          pb: 3,
        }}
      >
        <Typography sx={{ fontSize: {md:30,lg:35,xl:40,xxl:50}, fontWeight: 700, color: "#007DFC" }}className={noto_Sans_Thai.className}>
          Medical Automation Machine
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            pt: 2,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ fontSize: {md:20,lg:25,xl:30,xxl:40}, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
            >
              Smart Medical Cabinet
            </Typography>
            <Typography
              sx={{ fontSize: {md:20,lg:25,xl:30,xxl:40}, fontWeight: 500, color: "#5D6471", ml: 1 }}className={noto_Sans_Thai.className}
            >
              เป็นตู้จ่ายแบบอัตโมมัติที่จะช่วยลดเวลารอรับยา ช่วยเพิ่มความ
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: {md:20,lg:25,xl:30,xxl:40}, fontWeight: 500, color: "#5D6471", mt: 1 }}className={noto_Sans_Thai.className}
          >
            แม่นยำในการจ่ายยา สามารถบันทึกข้อมูลและแสดงรายงานต่าง ๆ
            เกี่ยวกับการจ่ายยา อาทิเช่น การตรวจสอบ
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <Typography
              sx={{ fontSize: {md:20,lg:25,xl:30,xxl:40}, fontWeight: 500, color: "#5D6471" }}className={noto_Sans_Thai.className}
            >
              ความถูกต้องของการจ่ายยา ปริมาณยาที่ถูกใช้ไป รวมถึงสามารถ
            </Typography>
            <Typography
              sx={{ fontSize: {md:20,lg:25,xl:30,xxl:40}, fontWeight: 600, color: "#007DFC" }}className={noto_Sans_Thai.className}
            >
              แจ้งเตือนเมื่อยาใกล้หมดไปที่คลังยา
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            
            mt: 15,
            alignItems: "center",
          }}
        >
          <Box sx={{display:"flex", flexDirection:windowWidth < 1500 ? "column" : "row",justifyContent: "center",  alignItems: "center",width:"100%"}}>
            <Box sx={{display:"flex", justifyContent: "space-between", }}>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              alignItems: "center",
              pr:windowWidth < 1500 ? 20 : 0,
              marginBottom: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="176"
                fill="none"
                viewBox="0 0 177 176"
              >
                <path
                  fill="#EAFCF7"
                  fillRule="evenodd"
                  d="M30.56 164.87c-43.264-30.59-36.8-95.707-2.104-135.266 39.733-45.3 102.942-30.11 122.459-10.331 16.26 16.479 45.184 54.487 4.879 119.225C127.061 184.65 53.872 181.353 30.56 164.87z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Box
                sx={{
                  position: "absolute",
                }}
              >
                <Image
                  src={require("../../../../../assets/clock .png")}
                  alt="BackgroundHero"
                  objectFit="cover"
                />
              </Box>
            </Box>

            <Typography
              sx={{ fontSize: 20, fontWeight: 700, color: "#007DFC", mt: 3 }}className={noto_Sans_Thai.className}
            >
              ลดเวลาในการจ่ายยา
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258", mt: 1.5 }}className={noto_Sans_Thai.className}
            >
              สามารถจ่ายยาให้ผู้ป่วยในปริมาณที่
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258" }}className={noto_Sans_Thai.className}
            >
              มากขึ้น ในเวลาที่น้อยลง
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              alignItems: "center",
              px:{md:0,xl:20/* windowWidth < 1650 ? 20 : 0 */},
              marginBottom: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="176"
                fill="none"
                viewBox="0 0 177 176"
              >
                <path
                  fill="#E3F1FF"
                  fillRule="evenodd"
                  d="M141.75 23.699c21.541 22.145 32.517 55.936 34.765 84.21 1.458 18.327-3.766 37.663-18.805 47.661-20.331 13.515-87.528 38.278-125.552 0-2.776-2.795-40.59-48.433-29.314-94.225 5.53-22.46 16.725-47.688 41.482-57.52C67.573-5.41 121.04 2.407 141.75 23.698z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Box
                sx={{
                  position: "absolute",
                }}
              >
                <Image
                  src={require("../../../../../assets/Accuracy.png")}
                  alt="BackgroundHero"
                  objectFit="cover"
                />
              </Box>
            </Box>
            <Typography
              sx={{ fontSize: 20, fontWeight: 700, color: "#007DFC", mt: 3 }}className={noto_Sans_Thai.className}
            >
              เพิ่มความแม่นยำ
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258", mt: 1.5 }}className={noto_Sans_Thai.className}
            >
              ลดความผิดพลาด จากการจ่ายยาผิด
            </Typography>
          </Box>
          </Box>
          


              <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="176"
                fill="none"
                viewBox="0 0 177 176"
              >
                <path
                  fill="#E5ECFE"
                  fillRule="evenodd"
                  d="M74.138 175.044C26.36 167.386.279 144.32.25 104.484.229 72.367 24.92 39.827 34.695 29.001 43.583 19.155 53.583-.536 98.025.011c35.705.44 73.634 23.256 77.22 45.946 2.942 18.622-.15 52.287-15 83.141-11.267 23.41-21.666 35.553-38.332 41.57-21.056 7.602-43.562 5.051-47.775 4.376z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Box
                sx={{
                  position: "absolute",
                  ml: 3,
                }}
              >
                <Image
                  src={require("../../../../../assets/Tech.png")}
                  alt="BackgroundHero"
                  objectFit="cover"
                />
              </Box>
            </Box>
            <Typography
              sx={{ fontSize: 20, fontWeight: 700, color: "#007DFC", mt: 3 }}className={noto_Sans_Thai.className}
            >
              ผลักดันเทคโนโลยี
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258", mt: 1.5 }}className={noto_Sans_Thai.className}
            >
              เพื่อผลักดันเทคโนโลยีการรักษาทางไกล
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 400, color: "#334258" }}className={noto_Sans_Thai.className}
            >
              telemedicine ในการจ่ายยาและรับยา
            </Typography>
          </Box>
        </Box>
        </Box>
        </Box>




        <Grid
          container
          sx={{
            display: "flex",
            justifycontent: "center",
            width: "100%",
            mt: 20,
          }}
        >

          <Grid
          lg={12}
            xl={6}
            sx={{
              width: "100%",
              display: {md:"flex",xl:"none"},
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              
              pb: 3,
            }}
          >
            <Box >
              <Image src={require("../../../../../assets/imgPD1.png")} 
              />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
            >


              <Box >
              <Image
                src={require("../../../../../assets/imgPD2.png")}
                style={{ paddingRight: 35 }}
              />
              </Box >


              <Box >
              <Image src={require("../../../../../assets/imgPD3.png")} 
              />
              </Box>



            </Box>
          </Grid>





          <Grid
            lg={12}
            xl={6}
            sx={{
              width: "100%",
              display: {md:"none",xl:"flex"},
              flexDirection: "column",
              pl: 18,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 46 46"
    >
      <rect width="46" height="46" fill="#007DFC" rx="23"></rect>
      <path fill="url(#pattern209)" d="M8 8H38V38H8z"></path>
      <defs>
        <pattern
          id="pattern209"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01563)" xlinkHref="#image0_2442_6754"></use>
        </pattern>
        <image
          id="image0_2442_6754"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASlSURBVHic7ZtBb1VFFMfPbRV2TaAkJG+NNipG1wbd2EUrBb+BO/aQNrKEDYqfwO4sn0EjSqEkoCArTUS3urDGNFil2lAb4edizvDG+2Ze7333zH3vhf43b+6cM3PP+ffMmbnn3orsYx8mAL6mPdy2sruwmgjAaq4qKIrCxPbnLCYJYWVYCtZET1hONo4wj4DcsI6wZz4CxoYA4EpkN1gZtl1P4S0ynK8DvAtMAhPAowgBj1Q2qbodq/sPYrAZAcCLwLpOeRN4Xdsbgc6G9h0HvtD2b8DLFjYMYrQJAcBM4Pxj/X2ov/cCvXslmdddB2aq3m+kcoCG8JqIdETkuojMiMhdEZlSlW8Ddd+eUp0ZHdMRkbXWl4NFBOg6BvgXOKZ9B4BF4AxwMNA9qH2LwAHtO6ZjAU4386i+8RYETACf61R3vWMqmwOuAdvAprbnA/nzwG0dex2YbGLLIMZbEFAArwJbOt2i9n9AHE+AC6qzpH1bOkfWI7k5cPv8TsnBM8CCtv8B3sdtj9PAWWBXSZhX3RA7wJVh+1UZgeEbuAz/MW6d39D+85Ex51T2peou61i/RdaPSFzS+Qj4NRF2WRGx54GKerI6cERlf/YhFNzWeJkgp/Qj4HI7rsYRsecvFU1HZNMq+2MPAjw+rEKAP4S8saeyIQIj/RJYxoX1Te0/GxnjE99V+iwB4IRerlc2JIOPe913hXgSPKXtXdyaP4wL/UVcYgSYJZ4EV2r7NSgBFsSR3gYvkcZF1em7DY4LARO4cIbeg9BJ3I6whUuMq/QehG7p2J6D0LgQkDoKL5E+Ci9R4Sg8LgR06CbhVXXoThDuy4HuctB/R3VX9Xqd0raZnQArkOlxeGwIUBteAH5RU9YwKIhkI4BMtTqMS2JmBFgbVhW4c0IZn9QY35wAxrFW17WrGQG0XKuzRsqvSjVBRqhWV/kvaXkDRqhWNygBjZYA/Wt1C7it6gHwNy43nArkprW6YRFQt1YHcEl1TGt1rRNAulY3p+0d3GPqFHBI27sqO4lxrW4YBHiUa3XXtP9cZA5fq7uBVa2uriODjksRENHzy+FQROZrdQ+rzl8Xtbzv44fFq7HYmvZJctdg/hjMPpKqTAClWp2IfKOi9yLqvu+78hIoKxaD4a36rlZEJERTtbp53EsJX6s7gntOOE+3Vpd6YbGSzYGKftVSJL0NXlASYrioOrW2wcRcA8OKgH61ujncm5lN3GHoKjAbyPvW6saFgGy1urbQlIBstbq20IgA7W/lcZgE9pJXHdeIKTLU6saKAJXXLYmdZpifr3XttiEgot+oVtcWUn717MleKfdX3ynUIb8KvB8pv0bqM7lhYOS+Fm878p75CHhKAFq3C65zIfkoS8b/Oyr5dctfF4HgdxE5bEpvAqkwDw3NjM2iKP7/zRHdyu3bue5a96+V4f6z5QgIc8AP+vtKLgNE5KsKOmbVngj8afRH3xHuAtkJKIrizVxzV8Rx/b3fI6H7KdlPwNF27coP4Cjws/p4wveHSXBSRL4XkZeGYWCLuC8irxVF8UQkyAFFUTwWkXdE5DMR2R6ObVmxLSKfisiCd34f+xD5D9mYSn1x1UtFAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
                <Typography
                  sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#007DFC",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  Technical Specification
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {SpecificationList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 46 46"
    >
      <rect width="46" height="46" fill="#007DFC" rx="23"></rect>
      <path fill="url(#pattern100)" d="M8 8H38V38H8z"></path>
      <defs>
        <pattern
          id="pattern100"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01563)" xlinkHref="#image0_2442_6754"></use>
        </pattern>
        <image
          id="image0_2442_6754"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASlSURBVHic7ZtBb1VFFMfPbRV2TaAkJG+NNipG1wbd2EUrBb+BO/aQNrKEDYqfwO4sn0EjSqEkoCArTUS3urDGNFil2lAb4edizvDG+2Ze7333zH3vhf43b+6cM3PP+ffMmbnn3orsYx8mAL6mPdy2sruwmgjAaq4qKIrCxPbnLCYJYWVYCtZET1hONo4wj4DcsI6wZz4CxoYA4EpkN1gZtl1P4S0ynK8DvAtMAhPAowgBj1Q2qbodq/sPYrAZAcCLwLpOeRN4Xdsbgc6G9h0HvtD2b8DLFjYMYrQJAcBM4Pxj/X2ov/cCvXslmdddB2aq3m+kcoCG8JqIdETkuojMiMhdEZlSlW8Ddd+eUp0ZHdMRkbXWl4NFBOg6BvgXOKZ9B4BF4AxwMNA9qH2LwAHtO6ZjAU4386i+8RYETACf61R3vWMqmwOuAdvAprbnA/nzwG0dex2YbGLLIMZbEFAArwJbOt2i9n9AHE+AC6qzpH1bOkfWI7k5cPv8TsnBM8CCtv8B3sdtj9PAWWBXSZhX3RA7wJVh+1UZgeEbuAz/MW6d39D+85Ex51T2peou61i/RdaPSFzS+Qj4NRF2WRGx54GKerI6cERlf/YhFNzWeJkgp/Qj4HI7rsYRsecvFU1HZNMq+2MPAjw+rEKAP4S8saeyIQIj/RJYxoX1Te0/GxnjE99V+iwB4IRerlc2JIOPe913hXgSPKXtXdyaP4wL/UVcYgSYJZ4EV2r7NSgBFsSR3gYvkcZF1em7DY4LARO4cIbeg9BJ3I6whUuMq/QehG7p2J6D0LgQkDoKL5E+Ci9R4Sg8LgR06CbhVXXoThDuy4HuctB/R3VX9Xqd0raZnQArkOlxeGwIUBteAH5RU9YwKIhkI4BMtTqMS2JmBFgbVhW4c0IZn9QY35wAxrFW17WrGQG0XKuzRsqvSjVBRqhWV/kvaXkDRqhWNygBjZYA/Wt1C7it6gHwNy43nArkprW6YRFQt1YHcEl1TGt1rRNAulY3p+0d3GPqFHBI27sqO4lxrW4YBHiUa3XXtP9cZA5fq7uBVa2uriODjksRENHzy+FQROZrdQ+rzl8Xtbzv44fFq7HYmvZJctdg/hjMPpKqTAClWp2IfKOi9yLqvu+78hIoKxaD4a36rlZEJERTtbp53EsJX6s7gntOOE+3Vpd6YbGSzYGKftVSJL0NXlASYrioOrW2wcRcA8OKgH61ujncm5lN3GHoKjAbyPvW6saFgGy1urbQlIBstbq20IgA7W/lcZgE9pJXHdeIKTLU6saKAJXXLYmdZpifr3XttiEgot+oVtcWUn717MleKfdX3ynUIb8KvB8pv0bqM7lhYOS+Fm878p75CHhKAFq3C65zIfkoS8b/Oyr5dctfF4HgdxE5bEpvAqkwDw3NjM2iKP7/zRHdyu3bue5a96+V4f6z5QgIc8AP+vtKLgNE5KsKOmbVngj8afRH3xHuAtkJKIrizVxzV8Rx/b3fI6H7KdlPwNF27coP4Cjws/p4wveHSXBSRL4XkZeGYWCLuC8irxVF8UQkyAFFUTwWkXdE5DMR2R6ObVmxLSKfisiCd34f+xD5D9mYSn1x1UtFAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
                <Typography
                  sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#007DFC",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  Technology
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {TechnologyList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="60"
                  height="85"
                  fill="none"
                  viewBox="0 0 85 85"
                >
                  <rect width="85" height="85" fill="#007DFC" rx="42.5"></rect>
                  <path fill="url(#pattern2)" d="M14 14H70V70H14z"></path>
                  <defs>
                    <pattern
                      id="pattern2"
                      width="1"
                      height="1"
                      patternContentUnits="objectBoundingBox"
                    >
                      <use
                        transform="scale(.00781)"
                        xlinkHref="#image0_2442_22225"
                      ></use>
                    </pattern>
                    <image
                      id="image0_2442_22225"
                      width="128"
                      height="128"
                      xlinkHref="data:image/png;base64,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"
                    ></image>
                  </defs>
                </svg>
                <Typography
                  sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#007DFC",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  User Care
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {UserCareList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#915BD7",
                    ml: 2,
                    borderBottom: "5px solid #915BD7",
                  }}className={noto_Sans_Thai.className}
                >
                  Special Service
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {ServiceList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 24,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Grid>






          <Grid
            lg={12}
            xl={6}
            sx={{
              width: "100%",
              display: {md:"flex",xl:"none"},
              flexDirection: "column",
              justifyContent:"center",
              alignItems:"center",
              pr:10
              
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="46"
      height="46"
      fill="none"
      viewBox="0 0 46 46"
    >
      <rect width="46" height="46" fill="#007DFC" rx="23"></rect>
      <path fill="url(#pattern15)" d="M8 8H38V38H8z"></path>
      <defs>
        <pattern
          id="pattern15"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01563)" xlinkHref="#image0_2442_6754"></use>
        </pattern>
        <image
          id="image0_2442_6754"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASlSURBVHic7ZtBb1VFFMfPbRV2TaAkJG+NNipG1wbd2EUrBb+BO/aQNrKEDYqfwO4sn0EjSqEkoCArTUS3urDGNFil2lAb4edizvDG+2Ze7333zH3vhf43b+6cM3PP+ffMmbnn3orsYx8mAL6mPdy2sruwmgjAaq4qKIrCxPbnLCYJYWVYCtZET1hONo4wj4DcsI6wZz4CxoYA4EpkN1gZtl1P4S0ynK8DvAtMAhPAowgBj1Q2qbodq/sPYrAZAcCLwLpOeRN4Xdsbgc6G9h0HvtD2b8DLFjYMYrQJAcBM4Pxj/X2ov/cCvXslmdddB2aq3m+kcoCG8JqIdETkuojMiMhdEZlSlW8Ddd+eUp0ZHdMRkbXWl4NFBOg6BvgXOKZ9B4BF4AxwMNA9qH2LwAHtO6ZjAU4386i+8RYETACf61R3vWMqmwOuAdvAprbnA/nzwG0dex2YbGLLIMZbEFAArwJbOt2i9n9AHE+AC6qzpH1bOkfWI7k5cPv8TsnBM8CCtv8B3sdtj9PAWWBXSZhX3RA7wJVh+1UZgeEbuAz/MW6d39D+85Ex51T2peou61i/RdaPSFzS+Qj4NRF2WRGx54GKerI6cERlf/YhFNzWeJkgp/Qj4HI7rsYRsecvFU1HZNMq+2MPAjw+rEKAP4S8saeyIQIj/RJYxoX1Te0/GxnjE99V+iwB4IRerlc2JIOPe913hXgSPKXtXdyaP4wL/UVcYgSYJZ4EV2r7NSgBFsSR3gYvkcZF1em7DY4LARO4cIbeg9BJ3I6whUuMq/QehG7p2J6D0LgQkDoKL5E+Ci9R4Sg8LgR06CbhVXXoThDuy4HuctB/R3VX9Xqd0raZnQArkOlxeGwIUBteAH5RU9YwKIhkI4BMtTqMS2JmBFgbVhW4c0IZn9QY35wAxrFW17WrGQG0XKuzRsqvSjVBRqhWV/kvaXkDRqhWNygBjZYA/Wt1C7it6gHwNy43nArkprW6YRFQt1YHcEl1TGt1rRNAulY3p+0d3GPqFHBI27sqO4lxrW4YBHiUa3XXtP9cZA5fq7uBVa2uriODjksRENHzy+FQROZrdQ+rzl8Xtbzv44fFq7HYmvZJctdg/hjMPpKqTAClWp2IfKOi9yLqvu+78hIoKxaD4a36rlZEJERTtbp53EsJX6s7gntOOE+3Vpd6YbGSzYGKftVSJL0NXlASYrioOrW2wcRcA8OKgH61ujncm5lN3GHoKjAbyPvW6saFgGy1urbQlIBstbq20IgA7W/lcZgE9pJXHdeIKTLU6saKAJXXLYmdZpifr3XttiEgot+oVtcWUn717MleKfdX3ynUIb8KvB8pv0bqM7lhYOS+Fm878p75CHhKAFq3C65zIfkoS8b/Oyr5dctfF4HgdxE5bEpvAqkwDw3NjM2iKP7/zRHdyu3bue5a96+V4f6z5QgIc8AP+vtKLgNE5KsKOmbVngj8afRH3xHuAtkJKIrizVxzV8Rx/b3fI6H7KdlPwNF27coP4Cjws/p4wveHSXBSRL4XkZeGYWCLuC8irxVF8UQkyAFFUTwWkXdE5DMR2R6ObVmxLSKfisiCd34f+xD5D9mYSn1x1UtFAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
                <Typography
                  sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#007DFC",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  Technical Specification
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {SpecificationList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="46"
      height="46"
      fill="none"
      viewBox="0 0 46 46"
    >
      <rect width="46" height="46" fill="#007DFC" rx="23"></rect>
      <path fill="url(#pattern16)" d="M8 8H38V38H8z"></path>
      <defs>
        <pattern
          id="pattern16"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01563)" xlinkHref="#image0_2442_6754"></use>
        </pattern>
        <image
          id="image0_2442_6754"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASlSURBVHic7ZtBb1VFFMfPbRV2TaAkJG+NNipG1wbd2EUrBb+BO/aQNrKEDYqfwO4sn0EjSqEkoCArTUS3urDGNFil2lAb4edizvDG+2Ze7333zH3vhf43b+6cM3PP+ffMmbnn3orsYx8mAL6mPdy2sruwmgjAaq4qKIrCxPbnLCYJYWVYCtZET1hONo4wj4DcsI6wZz4CxoYA4EpkN1gZtl1P4S0ynK8DvAtMAhPAowgBj1Q2qbodq/sPYrAZAcCLwLpOeRN4Xdsbgc6G9h0HvtD2b8DLFjYMYrQJAcBM4Pxj/X2ov/cCvXslmdddB2aq3m+kcoCG8JqIdETkuojMiMhdEZlSlW8Ddd+eUp0ZHdMRkbXWl4NFBOg6BvgXOKZ9B4BF4AxwMNA9qH2LwAHtO6ZjAU4386i+8RYETACf61R3vWMqmwOuAdvAprbnA/nzwG0dex2YbGLLIMZbEFAArwJbOt2i9n9AHE+AC6qzpH1bOkfWI7k5cPv8TsnBM8CCtv8B3sdtj9PAWWBXSZhX3RA7wJVh+1UZgeEbuAz/MW6d39D+85Ex51T2peou61i/RdaPSFzS+Qj4NRF2WRGx54GKerI6cERlf/YhFNzWeJkgp/Qj4HI7rsYRsecvFU1HZNMq+2MPAjw+rEKAP4S8saeyIQIj/RJYxoX1Te0/GxnjE99V+iwB4IRerlc2JIOPe913hXgSPKXtXdyaP4wL/UVcYgSYJZ4EV2r7NSgBFsSR3gYvkcZF1em7DY4LARO4cIbeg9BJ3I6whUuMq/QehG7p2J6D0LgQkDoKL5E+Ci9R4Sg8LgR06CbhVXXoThDuy4HuctB/R3VX9Xqd0raZnQArkOlxeGwIUBteAH5RU9YwKIhkI4BMtTqMS2JmBFgbVhW4c0IZn9QY35wAxrFW17WrGQG0XKuzRsqvSjVBRqhWV/kvaXkDRqhWNygBjZYA/Wt1C7it6gHwNy43nArkprW6YRFQt1YHcEl1TGt1rRNAulY3p+0d3GPqFHBI27sqO4lxrW4YBHiUa3XXtP9cZA5fq7uBVa2uriODjksRENHzy+FQROZrdQ+rzl8Xtbzv44fFq7HYmvZJctdg/hjMPpKqTAClWp2IfKOi9yLqvu+78hIoKxaD4a36rlZEJERTtbp53EsJX6s7gntOOE+3Vpd6YbGSzYGKftVSJL0NXlASYrioOrW2wcRcA8OKgH61ujncm5lN3GHoKjAbyPvW6saFgGy1urbQlIBstbq20IgA7W/lcZgE9pJXHdeIKTLU6saKAJXXLYmdZpifr3XttiEgot+oVtcWUn717MleKfdX3ynUIb8KvB8pv0bqM7lhYOS+Fm878p75CHhKAFq3C65zIfkoS8b/Oyr5dctfF4HgdxE5bEpvAqkwDw3NjM2iKP7/zRHdyu3bue5a96+V4f6z5QgIc8AP+vtKLgNE5KsKOmbVngj8afRH3xHuAtkJKIrizVxzV8Rx/b3fI6H7KdlPwNF27coP4Cjws/p4wveHSXBSRL4XkZeGYWCLuC8irxVF8UQkyAFFUTwWkXdE5DMR2R6ObVmxLSKfisiCd34f+xD5D9mYSn1x1UtFAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
                <Typography
                  sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#007DFC",
                    ml: 2,
                  }}className={noto_Sans_Thai.className}
                >
                  Technology
                </Typography>
              </Box>
              <Box sx={{ pl: 7.5, pt: 3 }}>
                <List disablePadding>
                  {TechnologyList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center" , ml: 10,}}>
              <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="46"
      height="46"
      fill="none"
      viewBox="0 0 46 46"
    >
      <rect width="46" height="46" fill="#007DFC" rx="23"></rect>
      <path fill="url(#pattern17)" d="M8 8H38V38H8z"></path>
      <defs>
        <pattern
          id="pattern17"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00781)" xlinkHref="#image0_2442_6814"></use>
        </pattern>
        <image
          id="image0_2442_6814"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABYsSURBVHic7Z13vB1Vtcd/OyEoYKSH3mvoKEgTKVKCiD4QlKpIlVCkBqQq4hMQPujzAT5Qw1PwgVIDGARphqAgzxATCBICCBgSCCSkt3u//rHmwNw95czMmTnl5v4+n3w+OXPX3nvtKXuvvarUhz70YcmFazUD7QxgNUlDJO0kaXtJm0jqF/x5kqQ/Sxot6T7n3PyWMNmHcgFsB1wMPAN0kQ1TgUuAlVvNfx9yAvg4sA/wE+CNjA88CdOB84GPtXpeWbFEbgHAmpK+KOlASftIWrbkIV6SdJZz7qGS++0B4BOSdpe0m6RVJb0i6Vbn3NtVjttxABywA/Bd4DmgO+MX3Q08C1wG7AusDqwIDAL2B64C3ktp/wCwaYnzWBrYE7gceApYGDPmbODQssbsWADLAV8GbgYmZ3zgtRt4D3A8sHrGcc4FZiT0twC4Bli+wfkMBaZlnMNCYOtGxutIAOsCpwC/B+bleOivA9cDQ4CPFxx7EHATyYLjVOBEoF/93iJ9n5djLjXcUmQeHQWgH7Az8APg+Rw3pwt4GrgQ2KZknrYHnkwZ+2/A53L0N4j0l3kCcANwtXd9KtD7ZDxgIPAVYHgwyayYCfwOOBZYtQl8fhVbWZJwB7Behn6OiJnHcOAYTJit0fXHTiFhlPpytwzABsDpwMPYnpoVk7Dj3b7A0i3gexlMPzA7gb+5mEC3XEof3/La3JpCe59H++1qZlYxgrf5s8CVwPgcD3wx8CdgGLBFq+dRA7A2cBvJp483gSOJWbKBvTzaV1PG+bZHO6LamVUATPp+LcdDnw7cDhxNm2vigF2xY2USRgM7em0+TlQG2CCh/609uhnAUs2ZXYPAzuo3ZXzoLwPXYl9HZ0wwACa4Hkvy0bQL2+PXAAYDZxA9/h2f0LcjKhft1Ow5FgJwTsoDXwQ8FtCUplhpJTBh9kpgfsqLkITbUvq93aO9oJnzKgTsqOMLSvOAW4HDgRWawMPHgE9hdoF9sOV0QBPG3QhTPOXB2yQc8YCTPNqHq55DwyCq6HgfGFzxmMtg6txrMB3CopgbvQBTuQ6lYvkC+DwwLsdLECvkAht7dHNod+MU8KDH9LkVjOEwJc0w4BHyaQoJ6G8GNi+btxCPSwGn8tGePxvTap4FjPL4OS2ln396tHtUxXMpAF70GN6upH7XxASu28inNErDYkxIW6cMHhP4/hiwOSHdBVEZ6e6U9sM92u9VxWspiHkBCkmumGHmAOA68ukPwISuV4IHnAXzgB8BK5Z9PxLmtr03/vtA/wTaYzzaUc3gsTCICkE3Z2zXD/g0cAF2SkiSqJMwCbgROARYgajaNQveAU6ggJEn5z3qR/Q4+OkE2rU8uoWY70B7IriBPn4L7E7PZXAlzPhzBqZLfzfnw5oB3I1ZDDeK4cMXwiYBhwI7YtJ12qryLBWfuYE7vTHPS6F9yaMdUiVvDQHb8yam3NwPyL40h7EI065dhmnhEpVGwDpe28V4Ah+moj4OU93GoQv4BTCoovs01BtvZArtDR7t1VXwVBqAbYIH3SgmBpM/mBxOGNhqE8YzKbTLABeRbOSZToqUXhSYYBjGbBKMXNjKFcZzZfNTOoDNgDE5H/h04C7gZGDDBsbeyev3pQxt1sG2oiRUcZx9yxvjswl0q9BTm9gFrFQ2P6UDO68PAf4POx2EFTQfYA4VN2P7+I4kSMIFxv0kUR+7gzO23Yt4+SDxqNYAn7/2xrg0hdb/mDLNp62AOUI2xeAD3O/dsHnY+XuZDG2XAs6kp2/g1yrg8Zsej0+k0F7r0f60bH56FbCzdpyw+RbmmFHXNgCsiimfdq+Ix/U83uYDsW7twIEe7QtV8NSrgKlikzAR+EIb8PiKx9e+CXQD6bmFdgNrNJvfjgPmnZN2IrkHWL+F/Pl+Ez9MoX3aoz2ymbx2LICVMU/bOQkvwRzMBatSDWACb4d7vKQdWa/waH/eTF47Hphnzg0kK6KeoIHjZ0GeVqOnf+FiQjoPzI1sqeD/e3v89vAp7H1+4zHAhLdNJA2WtJmk1SR9UtJASd2S5kuaK+ktWXzdK5LGOecWhPrYTtL1knaNGWK2pGGSfuaco7qZfMjLAFn8YfjF+7JzbgTwZUm/kc3ni5LGSpouKRzwsqFz7rWq+WwpMM3ieRSz/YO5bD+OxRNuHfTpMFWw739fwyPAuhXNZwvMBnI/MCtm7B8HdGHfihuDa496tLE+hR0D7Lh2AJ4aFLPonQaMzf+862IcFvq9ImZtG5lA9wFwbAlzXA04CrPt+9q/OPw9aDcsdO2w4NpFHm2iT2HbA/sCa/vfk9hXuTJmm08S2MrETMyNbE3Mipl0WrgPyzCSdV7L0tNFLWsEcw3dBEYoLKZi61Dfu3i0/6z9reNkAOBl2X5ew39LOlpSPcfRNyS9KGmCpNclzZQ0S5byZVmZPLCBTEbYRlI9j59Zkq6QdI+kGyV9PobmfUk/lXSjc26qN4/lJe0gaWdJe8ti/PP47k2WNECWF6CGw51zd/iEmJA6KXRpgXOuUBBsS0HU4TENi4ARmJEoNpCizlgbYl/4SNJN0S8Bn8EUSGkr0L+wM/nzmM9e1vQzNczC8g2cCWwZ8HilR3NTcH1ZYD8sf8GzMfxPKPvZNAXY/l4Pb2IeQqVpvLD9+DvAlIQxF2A5AjbF/A/KwGLgL8D3gT2IMftiDzmMudhLVi9+MtGRpK1B1Hs4jHcw79nKljbMD+AMzB8vDndhfolnp9CkYSIfuajV9TXEHGnyekU9RBPiHUpHcPPTlthZNOl4g9naf068oPYU5rq2EiaR/434LaQbi+3/JRYPmXubCnj5RoaH3o2Zhk/vyIcvSViOn3qY3mSe/oP4HEFjCX3B2J68LZbfZyfMkaS0YI3gJXjb4+Fl4GdYnoJKXNSaCmwfruf1+2YL+FqPeGeQ0SSYaSviY2lMGN0LWLtZ4zYVweTuxHIAPAe8gHnuTgm+urijWDP4WpH4tDD30RvTtHQqgq/kKCxVzJuYC9jC4P+/w8zAhfbIYJl/KuYlGFb2PPpQAMCXiDpSxGEi8MWCY6xAVA29CNit7Pn0emB5fY6hwfx6QV+XkU+12g1cXHCsDYgeASfQghxFHQvsPF/DWBrw/MXO5EVRKMkSttr4L9x3is5hiQLmVDnTu3mbFexrB6Jn8AXAj7Gs4AOCf9th2cR8Ddoi4FMFxx7u9TWHDJlHl3gEDyeMKRQXzHw7+HukxO9hVjP/XP9IwbFXIRrM2d7hWa0Gdpzyw63OKNjXJkSxf4Z2X4hpt3FBHvy0bTPphOicVgEzqITxBgWFJ6IJFf6Yo+1jXtuzCvKwDFEN3dlF+qoKTfdorYPjvN/XO+cWFuzLlxvuzdHWpy2UFsY5N0/ST7zLXy/SV1VomxcA2FbmtFnDQkmNuDD73jhv5Gj7uve7EeHtV5K6Qr+3pY1y+LbNCyDJD1z8g3PuvQb6m+n9/mSOtr7u4YOiTDjnJkvyU7UdWLS/stFOL8De3u87G+zPNwzlidXz07k3amS6z/u9V4P99S5ggQz+GbwhixbRJMuzyFYBZE2iJ5E9G+QlLndfn2awBqIZsBIzYufosz/mhxfG46R4DAVS+xNem39RQg4Coq7dWzbaZxloly3Ar28zttEOnXNdki7xLu8paRSwg0+PZel+SpKfVPHioK9GMd77XVnCyTxol0zb63u/Xyyp31skHSErDVfDDpL+CoyX9LzMNX47SXFf5MOS/rckXiZICiui+l6AEPwjWyl175xz3cBXZXF0vlvUVsG/JLwj87PvLoMXSX4sXuagkSrRLluAn4j53UY7xCKGjpT0tKIPPwsGSRqNJY8sw6tnhve78gzoWdAuL4C/EhXV/kmSghPESEm3qbGldrAs0vZBYK1GeJJFEIeRWCeomWiXLcCXsgsvu8AukkZIWiWBZIqkUbIQ8NpKs6qkjWXn/7il+QBJY4CDnHOJyRjqwP/YyhAsewewwhBhHF2wnyHExw7MB26Jk/5j+tgR+BXx0TVzgP0K8nak19dvivTTKwH81Ls5uU3AmC4hLm7+CWCT+j1E+tuUeE/fmRRIZ4/F9IXxX3n7qALtIgNM8X6vn6cxVlJmhCQ/I/b3Je3lnJuYlyHn3MsyvcEV3p8GShpBfl/FNb3fU2OplkQQzWv7YM72v4j5UkvL1UvUsQOCSNwcffhJKPuyddUAbOXdnH/Wb/Vh288QdcAsfXnFikuH0U1Cvv6E9q977dvGJNxyYAEbc70blCnzFnCv1248FQRAYs6jL3hjZcoFTDS75zzavZBTs4ElWAqjbqQvsH7M1x+bNbMkHod4Y3WRrQD0cV67x6viMS/aRQiUJP+mHJKhzVfUM83Nc865Ql68WeCce0jSmNClfsrOZxiPlsZUbwEWPh3GIuqUeSdquj29CXye4Y35WB36VYmmoW8LU7DUZkmigLGyBE01XOCcuyqB1smSMIV16rMkLa6OQ0mmPR0Y+j3DOZeYzQO4UNIPQpfGO+d883cfpFi38MkkCEtEa/y0ErHeS1gKF98RpJCLeVVoJxlAkoarp9FkDUknJNAuUAM2gxLRJeMlDqdIChuRZkv6ZeUcdTKwRIlhTCMhmgZLBRun/m0WZgHnJPC2NNFqpddWe/fyo61kAMmyc8ssdeH0Kjc5505OoO+vfC7fZWJmkrsYVub+H6FLs2RJmqc1hbNOBnCh9+V0Awe1mq88wCp9PhOaQ6FQ8yUSmPDkV758hwxKl3YC8AmsuENfhpC8wBIeL/JegnGUkDGkDx0CLD27j8eBtnCn6kPFwBw774t5CUYBLRH8sIijsVjiikmYgeg5LHXdnUDvDPsC1sbqz+xCEy1ZJKdfG0dMBfAm8JNUOLqGefSSzJyDsDSjP8PSjoYxFSgtzh0LyVoH+HTwkm1HqN49ljkkrgrINKxGTlMQrEhZkkBn9hNoK2A27zPJXrGi0EuApVI7HkuUPCFhrC4swfH5WEWQlbClPw630KTUK8DXSVc+zSFDqdm2Q/DwfZt8PbxLhihX7As+BEuFPjHnGGBFms7GUrHflUDzPpYWprLtCVupzsGOpEnI5c7WNqBnsaE4LMCKEfieOxE3aUwNugdW7OAvpFfcyIPRmLfueURNrDVMAS6lxH0YKxJ1MWacqofSfBGbCqKKl8VYuZGrsMoUywZ0ftnSK4PrW2LbxwPk1893YT5z/48t82mC1hysPMsuRF20wlgEPAycSAFhEcsyNhQrUpHnBS6UUaxV+NAWACyUFSGqIba4IFYS/fbQpXclLVLU7TkNCySNlvSYpD/LPHl6pHTBnEFOlXS6pLj9/TFJ35J0mKQLVT/UarLMm+cVWQGlWZLmBH8bqI+KRg2WRQrXCwWbIQsbGxq6NtE5t2mddu0JrJBRGLuE/rYVsH3w/0EUK2n2PGbp258cefSxOgFxugCwkm0nBjTX0JyycbOxYk0rYaeCcPBI5xZkBG7zJnpRcP2w0LVzg2t/z3Cj3sLSpR5Fjvp5KfwdS3KNvpGYnmIlTFj0t7MyMAY4BU8Vjck7B1IgWqitgB3Lwng0uP4/oWsPBNf8dK5g+/79mM/cFhXxuC62r8dhejAHF9BugwluTxEVXLNgLvAHTOpPyyPQ0QjLABtICufmmS9pRUmfknS/rPjwUc65e4EvqWfmq1clbe6cW1Q1w8EDPlnSjxQNBZNMpjjVOTcm1GaAzNdwM9k+v5Zsz68dGWfKvHXekSWTeFHSpGbMp60AvOp9BXsH1wcQUm4Ay9NTMu6mhGU+J68bYIahOCzGdA55BNM+YKXQwvADI8O0z3i0hzeT14AHh5VCSxL+5gBXA34Gkj7EgWgM+9MptD/0aHMFS5YJLPTq7oSXAEx47AvGrAdgDXoe8RYBAxNo9/Vu8ivN5jeGpyFEDVdhDK3fyxIOotq12Ly2mJnWr+NXictW8GC/RZ1IoYB2AFYw2vfHr73Q21bBY68B0Wwdia7MREOzvlkBPyeF+p+BqZvr5jbiI8PNPI9HP29vJQg+kM6LAAYO9m7YmBTaSz3aX1fAT5yFcjwZPW9i5rOQhG2tAG/9sZxCQ7EkFWO9F24xtiX9FlMWtVsgThSYNi1c274LiM24hTluhvFWBfz4LuJh3AGsk6GPf3jt6iaLSulrQ2yLuQtTPuXB80BbZAhNBebjFsahCXRLE82sXeoEsaPeaSk3ew6m8Ut0woiZz645xl8eW0VuoJgvg48PgPYODsXOzmHckEI70qOtRNLGjFC/oOfqFMabWCKG/l67wTFtEhVEwFLArlixydFEXdOzYC7pq8PLtHO6eKKZMF5KoT3Po2200EM93nbC/BSSMB5boj8DfA14zft7RKYBNsIMPXdjgmYevIvVHT4fOxqvEuq39jLdEdOufS2HWESL73ETax/HHDnDmEbFwg4WdnUC6a5ZSTgCq/Fbc1GblLP9fKyq2AXB3DPNlaiWNVN+oZaBqAPmMQl0/Yl6ym7fJB5XwLYr/6iXhMVYAemkbSQJ44HrgAMoGJQC7Oz3Wfb9KBXA9zyGh6fQ+mrYc0J/WxrbhxMrdZTA6zqYh3FZvodTMf+IYynJoER0pWz7F2APj+HE3H2YlB7GKKwA9O/56JQwDfPlqyxBNbA5cDPZV4Qa5mH6hmFYytnSw+aJOt2OKHuMUoFF6PpWtliHR2CLHDd7HPD5inlfGRPq/kRUXQ0m34zhIxe1Sv34MYdZX7g8s8oxSwFR75uTEugc0RKp9XAPTQjtwiTxLYF9gn/b04QjGCafHI5lQvdfwlkkKNfaCpikG8btKbS+T2EYSULXfMzBshTVbKuBxSycg50S0vQHnZEsAjtzhzGVhP2RqE/he5h/4GDMzDw85UWYjAlc7a8rDwFbXfYCriXdDB3G9a3mOzOCCfp7V6waE3PRCmMe3t6KGU5Gp9ycZ8mhpm0FMPniaOB28tkCJgHfaDX/uQGM8CaSuHwR9SmMWOwIijmRHP3TjW0nDVUOLROYkDsMEyrzHDXHYZ5Tu9Fhq9uHIJorP9GeTrT0S2xmr4B2OeBykl22ZwOX0IJIW0x3sS/wE/JpCudjruSnYV7WnQ/Mvz6M6YQMLlit3WOwPX6mR1vXURTz54vTldfwOlb7r1JgOX2PxfT6/jzSMBVTQh1CKKdBrwG2ZPsJD6/GzKMTUm7MXDK4cIXG+Rzwt5T+nqRkFTP2cl+IRT3nUQ+PAa7AhOTOXNrzANOu5UVsBs064/TDYv38F66GLiw6uVDoN1alfAhW/eP1HHOZh0UJn0IGB5ReB+wol1W9+g4pe3/G8ZbHtHRxpdvATibnksEwA6yOHVHvIeq8kobJ2Mv2JXIEs/ZaAAcRbytfiMXfXQ7sSYlaNkyx8kDKQ3oP246GYA4jK2I6h/0wh45nyR7J3I15Dn0X2IEK7AHtiFyTxCJsjpCVY50m6RlJo5xzflnUUgEMkXSdyq+4PVfSHyU9IOlB59zkkvvvQ1nAlFInYR44jWAqVhn0MHqj1N7bgWni/pPkXAE+urA4xovp9Bj+CtCx+xwmmB0kaT9ZCPvakpaXNF1WifSvkp6SNNI511elsw996EMfIvg3J49cRqylR3oAAAAASUVORK5CYII="
        ></image>
      </defs>
    </svg>
                <Typography
                  sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#007DFC",
                    ml:2
                  }}className={noto_Sans_Thai.className}
                >
                  User Care
                </Typography>
              </Box>
              <Box sx={{ pl: 15, pt: 3 }}>
                <List disablePadding>
                  {UserCareList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>


            <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                
                <Typography
                  sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#915BD7",
                    ml: 15,
                    borderBottom: "5px solid #915BD7",
                  }}className={noto_Sans_Thai.className}
                >
                  Service List
                </Typography>
              </Box>
              <Box sx={{ pl: 20, pt: 3 }}>
                <List disablePadding>
                  {ServiceList.map((item) => (
                    <ListItem key={item.id} sx={{ mt: -2.5 }}>
                      <ListItemIcon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="#162578"
                            d="M13.781 7.75c0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 01.219 7.75C.219 4.031 3.254.969 7 .969c3.719 0 6.781 3.062 6.781 6.781zm-7.574 3.61l5.031-5.032a.463.463 0 000-.629l-.629-.601a.387.387 0 00-.601 0L5.906 9.199 3.965 7.285a.387.387 0 00-.602 0l-.629.602a.463.463 0 000 .629l2.844 2.843a.463.463 0 00.629 0z"
                          ></path>
                        </svg>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontWeight: 500,
                                color: "#475467",
                              }}className={noto_Sans_Thai.className}
                            >
                              {item.text}
                            </Typography>
                          </>
                        }
                        sx={{ ml: -4 }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>



          </Grid>


          <Grid
          lg={12}
            xl={6}
            sx={{
              width: "100%",
              display: {md:"none",xl:"flex"},
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              pr: 10,
              pb: 3,
            }}
          >
            <Box sx={{width:{xl:700,xxl:782} , height:{xl:289,xxl:341}}}>
              <Image src={require("../../../../../assets/imgPD1.png")} 
              style={{width:"100%",height:"100%"}}/>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
            >


              <Box sx={{width:{xl:330,xxl:382} , height:{xl:289,xxl:341}}}>
              <Image
                src={require("../../../../../assets/imgPD2.png")}
                style={{ paddingRight: 35 , width:"100%",height:"100%" }}
              />
              </Box >


              <Box sx={{width:{xl:330,xxl:382} , height:{xl:289,xxl:341}}}>
              <Image src={require("../../../../../assets/imgPD3.png")} 
              style={{width:"100%",height:"100%" }}/>
              </Box>



            </Box>
          </Grid>
        </Grid>
      </Box>
      </ThemeProvider>
    </>
  );
}
