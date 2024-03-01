import * as React from "react";

import RootLayout from "./layout";
import UpdateArticle from "./components/UpdateArticle";
import AddPostEditor from "./AddPostEditor/AddPostEditor"



export default function Page() {
  return (
    <>

  <RootLayout>
      {/* <Hero />
      <Healthcare />
      <Company />
      <Product />

      <Partner />
      <Article />
      <Contact /> */}
      {/* <SlideImageProduct />
      <ProductDetail />
      <ProductSoftware />
      <ProductGuide />
      <ProductList /> */}
      {/* <HeroSlideImage />
      <ArticleDetail />
      <RecommendArticle /> */}
        {/*  <UpdateArticle /> */}    
       {/* <TestSwap /> */}
       {/* <DetailEditor />  */} 
        <AddPostEditor /> 
      
       </RootLayout>
     
    </>
  );
}


Page.getLayout = function getLayout(page) {
  return (
 
      <RootLayout>{page}</RootLayout>
   
  )
}