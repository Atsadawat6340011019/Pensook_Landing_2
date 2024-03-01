"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import SlideImageProduct1 from "./SmartMedical/Hero/SlideImageProduct";
import ProductDetail1 from "./SmartMedical/ProductDetail/ProductDetail";
import ProductSoftware1 from "./SmartMedical/ProductSoftware/ProductSoftware";
import ProductGuide1 from "./SmartMedical/ProductGuide/ProductGuide";
import ProductList1 from "./SmartMedical/ProductList/ProductList";
import ProductList3 from "./Pharmacy/ProductList/ProductList";
import SlideImageProduct2 from "./Dispensing/Hero/SlideImageProduct";
import ProductDetail2 from "./Dispensing/ProductDetail/ProductDetail";
import ProductSoftware2 from "./Dispensing/ProductSoftware/ProductSoftware";
import ProductGuide2 from "./Dispensing/ProductGuide/ProductGuide";
import ProductList2 from "./Dispensing/ProductList/ProductList";
import SlideImageProduct3 from "./Pharmacy/Hero/SlideImageProduct";
import ProductDetail3 from "./Pharmacy/ProductDetail/ProductDetail";
import ProductSoftware3 from "./Pharmacy/ProductSoftware/ProductSoftware";
import ProductGuide3 from "./Pharmacy/ProductGuide/ProductGuide";
import HeroProduct from "./HeroProduct";
import TestWidth from "./TestWidth";

export default function Page({ params }) {
  const productId = params.productId;




  return (
    <>
      {/* <TestWidth /> */}
        <HeroProduct />
       {productId === "1" && (
        <>
          
            <ProductDetail1 />  
          
            <ProductSoftware1 />
           
          <ProductGuide1 />
          
          <ProductList1 />  
        </>
      )}  

       {productId === "2" && (
        <>
         
          <ProductDetail2 />
          <ProductSoftware2 />
          <ProductGuide2 />
          <ProductList2 />
        </>
      )} 

        {productId === "3" && (
        <>
         
          <ProductDetail3 />
          <ProductSoftware3 />
          <ProductGuide3 />
          <ProductList3 />
        </>
      )} 
    
    </>
  );
}
