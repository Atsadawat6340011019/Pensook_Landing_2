"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/* import Hero from "./Hero/Hero";
import Healthcare from "./HealthCareCommunity/Healthcare";
import Company from "./CompanyExpertise/Company";
import Partner from "./Partner/Partner";
import Article from "./Articles/Article";
import Contact from "./ContactUs/Contact";
import Product from "./Products/Product";
import Layout from "../layout"; */

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /sectionmain when the component mounts
    router.push('/SectionMain');
  }, []);
  return (
    <>
    {/* <Layout>
      <Hero />
      <Healthcare />
      <Company />
      <Product />

      <Partner />
      <Article />
      <Contact />
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
