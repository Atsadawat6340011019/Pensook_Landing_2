import React from 'react'

import "./RichTextEditor/src/styles.css";
import { Box } from '@mui/material';
import Editor from '../RichTextEditor/src/Editor';

export default function DetailEditor() {
  return (
    <>
      <Box sx={{width:"100vw" , height:"100vh" , bgcolor:"#FFFFFF",display:"flex" , justifyContent:"center"}}>
        <Editor />
      </Box>
    </>
  );
}
