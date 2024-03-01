import { Box } from '@mui/material'
import React from 'react'
import CreateEditor from './RichTextEditor/src/CreateEditor'
import "./RichTextEditor/src/styles.css"
export default function AddPostEditor() {
  return (
    <>
      <Box sx={{width:"100vw" , height:"100vh" , pt:"134px",bgcolor:"#FFFFFF",display:"flex" , justifyContent:"center"}}>
        <CreateEditor />
      </Box>
    </>
  )
}
