"use client";
import React , { useState } from 'react'
import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Box, Button, Typography ,ThemeProvider,createTheme,FormControl,

  MenuItem,} from "@mui/material";
  import Select, { SelectChangeEvent } from '@mui/material/Select';
  import TextField from '@mui/material/TextField';
function Placeholder() {
  return <div className="editor-placeholder" >เนื้อหา</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};




  


export default function CreateEditor() {
  const [Type, setType] = useState("เลือกประเภท");
  const [hover, setHover] = useState(false);
  const [currentHover, setCurrentHover] = useState("");
  const handleChange = (event) => {
    setType(event.target.value);
  };

  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: "#C5C5C5",
              color: "#007DFC",
            },
            color: "#007DFC",
            "&:hover": {
              backgroundColor: "#D5EAFF",
            },
            height: "50px",
            width:"225px",
            fontFamily: ["Roboto", "Noto Sans Thai", "sans-serif"].join(","),
            
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            boxShadow: "none",
            border: "2px solid #007DFC",
            marginTop: 5,
            
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        },
      },
    },
    Select: {
      fontFamily: ["Roboto", "Noto Sans Thai", "sans-serif"].join(","),
    },
  });

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <Box sx={{ display: "flex" }}>
          
        
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              width: "100%",
            }}
          >
            
            <ThemeProvider theme={theme}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              
        <Select
          value={Type === "นวัตกรรมด้านการแพทย์"  || " การดูแลสุขภาพ" ? Type : "กรุณาเลือกประเภท"}
          onChange={handleChange}
          
          inputProps={{ 'aria-label': 'Without label' ,}}
          IconComponent={KeyboardArrowDownIcon}
          sx={{height: 50,
            width:225 ,
            color: "#007DFC",
            backgroundColor: "#fff",
            fontWeight: 600,
            fontSize:16,
            mt: 7,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#007DFC",
              border: "1px solid",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#007DFC",
            },
            "& .MuiSvgIcon-root": {
              color: "#007DFC",
            },
            borderRadius: "8px",}}
        >
          
                <MenuItem  value="นวัตกรรมด้านการแพทย์" 
                sx={{fontSize: 16 , fontWeight:600}}>
                นวัตกรรมด้านการแพทย์
                </MenuItem>

                <MenuItem  value="การดูแลสุขภาพ" 
                sx={{fontSize: 16 , fontWeight:600}}>
                การดูแลสุขภาพ
                </MenuItem>
               
              
            
        </Select>
        
      </FormControl>
            </ThemeProvider>
            <Button
              variant="contained"
              sx={{
                width: "213px",
                height: "50px",
                bgcolor: "#007DFC",
                mt: 7,
                "&:hover": {
                  bgcolor: "#0060C2",
                },
                "&.MuiButton-root": {
                  boxShadow: "none !important",
                  borderRadius: "8px !important",
                },
              }}
            >
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, color: "#FFFFFF" }}
              >
                บันทึก
              </Typography>
            </Button>
          </Box>
          
        </Box>
        <Box>
        <TextField
            fullWidth
            placeholder='หัวข้อ'
            inputProps={{
              style: { fontWeight: 700 , fontSize: 50 , color:"#007DFC"},
              
            }}
            
            sx={{
              pt: "5px",
              width: "100%",
              input: {
                "&::placeholder": {
                  color:"007DFC",
                  opacity: 1,
                },
              }, 
              color:"#007DFC",
              mt:5,
              
              "& .MuiOutlinedInput-notchedOutline" :{
                border: "none !important"
              }
            }}
          />
        </Box>
        <div className="editor-inner" >
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
            
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
