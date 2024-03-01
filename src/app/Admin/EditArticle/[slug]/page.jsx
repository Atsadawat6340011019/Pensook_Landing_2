import * as React from "react";

import RootLayout from "../layout";
import Editor from "./RichTextEditor/src/Editor";


async function getPostsFromID(slug) {
  const response = await fetch(`http://203.150.243.197:4000/landingPage/getArticle?articleId=${slug}`);

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

export default async function Page({params}) {

  const result = await getPostsFromID(params.slug);
  console.log('result ', result.response);

  return (
    <>

    
  <RootLayout>
      
  <Editor params={params}/>
      
       </RootLayout>
     
    </>
  );
}


Page.getLayout = function getLayout(page) {
  return (
 
      <RootLayout>{page}</RootLayout>
   
  )
}