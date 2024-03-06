"use client"

import React, { useState, useEffect } from "react";
import Hero from "./Hero/Hero";
import Healthcare from "./HealthCareCommunity/Healthcare";
import Company from "./CompanyExpertise/Company";
import Partner from "./Partner/Partner";
import Article from "./Articles/Article";
import Contact from "./ContactUs/Contact";
import Product from "./Products/Product";
import Layout from "../layout";
import Box from "@mui/material/Box";
import HeroMobile from "./Mobile/HeroMobile/HeroMobile";
import CompanyMobile from "./Mobile/CompanyMobile/CompanyMobile";
import ProductTablet from "./Tablet/ProductTablet/ProductTablet";
import ProductMobile from "./Mobile/ProductMobile/ProductMobile";
import ContactMobile from "./Mobile/ContactUS/ContactMobile";
export default function Home() {
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



  return (
    <>
        
        {windowWidth < 420 ? <HeroMobile /> : <Hero />}
       <Healthcare />  
        {windowWidth < 420 ? <CompanyMobile /> : <Company />} 

        {windowWidth < 600 ? (
  <ProductMobile />
) : windowWidth < 1250 ? (
  <ProductTablet />
) : (
  <Product />
)}

      {/*  <Partner /> 
       */}
      <Article />
      {windowWidth < 900 ? <ContactMobile /> : <Contact/>}   
      {/* <SlideImageProduct /> 
       <ProductDetail />
       <ProductSoftware />
       <ProductGuide />
       <ProductList /> */}
      {/* <HeroSlideImage />
        <ArticleDetail />
        <RecommendArticle /> */}
      {/* <UpdateArticle /> */}
    </>
  );
}
