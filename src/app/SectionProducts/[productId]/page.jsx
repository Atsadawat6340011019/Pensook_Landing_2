"use client";

import React, { useState, useEffect } from "react";
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
import HeroProductMobile from "./HeroProductMobile/HeroProductMobile";
import ProductDetail1Mobile from "./SmartMedical/Mobile/ProductDetail1Mobile";
import ProductSoftware1Mobile from "./SmartMedical/Mobile/ProductSoftWare1Mobile";
import ProductGuide1Mobile from "./SmartMedical/Mobile/ProductGuide1Mobile";
import ProductList1Mobile from "./SmartMedical/Mobile/ProductList1Mobile";

import ProductDetail2Mobile from "./Dispensing/Mobile/ProductDetail2Mobile";
import ProductSoftware2Mobile from "./Dispensing/Mobile/ProductSoftWare2Mobile";
import ProductGuide2Mobile from "./Dispensing/Mobile/ProductGuide2Mobile";
import ProductList2Mobile from "./Dispensing/Mobile/ProductList2Mobile";


import ProductDetail3Mobile from "./Pharmacy/Mobile/ProductDetail3Mobile";
import ProductSoftware3Mobile from "./Pharmacy/Mobile/ProductSoftWare3Mobile";
import ProductGuide3Mobile from "./Pharmacy/Mobile/ProductGuide3Mobile";
import ProductList3Mobile from "./Pharmacy/Mobile/ProductList3Mobile";

export default function Page({ params }) {
  const productId = params.productId;

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
      {/* <TestWidth /> */}
      {windowWidth < 820 ? <HeroProductMobile /> : <HeroProduct />}
       {productId === "1" && (
        <>
          
           {windowWidth < 820 ? <ProductDetail1Mobile /> : <ProductDetail1 />  }   
          
          {windowWidth < 820 ? <ProductSoftware1Mobile /> : <ProductSoftware1 />   }  
           
          {windowWidth < 820 ? <ProductGuide1Mobile /> : <ProductGuide1 />   } 
        
         {windowWidth < 820 ? <ProductList1Mobile />  : <ProductList1 />    }     
        </>
      )}  

       {productId === "2" && (
        <>
         
         {windowWidth < 820 ? <ProductDetail2Mobile /> : <ProductDetail2 />  }   
          
          {windowWidth < 820 ? <ProductSoftware2Mobile /> : <ProductSoftware2 />   }  
           
          {windowWidth < 820 ? <ProductGuide2Mobile /> : <ProductGuide2 />   } 
        
         {windowWidth < 820 ? <ProductList2Mobile />  : <ProductList2 />    }    
        </>
      )} 

        {productId === "3" && (
        <>
         
         {windowWidth < 820 ? <ProductDetail3Mobile /> : <ProductDetail3 />  }   
          
          {windowWidth < 820 ? <ProductSoftware3Mobile /> : <ProductSoftware3 />   }  
           
          {windowWidth < 820 ? <ProductGuide3Mobile /> : <ProductGuide3 />   } 
        
         {windowWidth < 820 ? <ProductList3Mobile />  : <ProductList3 />    } 
        </>
      )} 
    
    </>
  );
}
