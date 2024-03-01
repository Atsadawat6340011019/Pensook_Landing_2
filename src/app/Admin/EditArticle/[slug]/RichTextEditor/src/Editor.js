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
import { Box, Button, Typography ,ThemeProvider,createTheme,FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,} from "@mui/material";
  import Select, { SelectChangeEvent } from '@mui/material/Select';
function Placeholder() {
  return <div className="editor-placeholder">เนื้อหา</div>;
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

export default function Editor() {
  const [Type, setType] = useState('');

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
            width:"213px",
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
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#fff"
                    d="M5.833 17.5c-.458 0-.85-.163-1.177-.49a1.605 1.605 0 01-.49-1.177V5h-.833V3.333H7.5V2.5h5v.833h4.167V5h-.834v10.833c0 .459-.163.851-.49 1.177-.326.327-.718.49-1.176.49H5.833zM14.167 5H5.833v10.833h8.334V5zM7.5 14.167h1.667v-7.5H7.5v7.5zm3.333 0H12.5v-7.5h-1.667v7.5z"
                  ></path>
                </svg>
              }
              sx={{
                width: "145px",
                height: "50px",
                bgcolor: "#E73D3D",
                mt: 7,
                "&:hover": {
                  bgcolor: "#F11D1D",
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
                ลบบทความ
              </Typography>
            </Button>
          </Box>

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
          value={Type}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' ,}}
          IconComponent={KeyboardArrowDownIcon}
          sx={{height: 50,
            width:213,
            color: "#007DFC",
            backgroundColor: "#fff",
            fontWeight: 600,
            fontSize:18,
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
          
                <MenuItem  value="1" sx={{fontSize: 18 , fontWeight:600}}>
                นวัตกรรมด้านการแพทย์
                </MenuItem>
                <MenuItem  value="2" sx={{fontSize: 18 , fontWeight:600}}>
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
        <div className="editor-inner">
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
