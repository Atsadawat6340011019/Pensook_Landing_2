import * as React from "react";

import Hero from "./Hero/Hero";
import Healthcare from "./HealthCareCommunity/Healthcare";
import Company from "./CompanyExpertise/Company";
import Partner from "./Partner/Partner";
import Article from "./Articles/Article";
import Contact from "./ContactUs/Contact";
import Product from "./Products/Product";
import Layout from "../layout";
import Box from "@mui/material/Box";
export default function Home() {
  return (
    <>
        <Hero /> 
      <Healthcare /> 
      <Company />

       <Product />

       {/*<Partner /> 
      
      <Article />
      <Contact />  */} 
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
