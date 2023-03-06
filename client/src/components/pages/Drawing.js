import React from "react";
import Grid from '@mui/material/Grid';

import {TextBox, Title} from "../styles/TextStyles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useRef } from 'react';
import CanvasDraw from "react-canvas-draw";
import { Typography } from "@mui/material";

function Drawing() {
  const [show, toggleShow] = React.useState(true); // used in ToggleButton 
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = React.useState();

  const ExportDrawing = () => {
    const base64 = canvasRef.current.canvasContainer.childNodes[1].toDataURL();
    setDrawing(base64);
  };

  const ToggleButton = () => {
    return (
        <>
          <Grid item xs={16}>
            {show ?
            <Button variant="contained"
              onClick={() => toggleShow(!show) }
            >
              Start
            </Button>
            : <Box></Box>
            }
          </Grid>
          <Grid item xs={16}>
          {!show ?
              <CanvasDraw 
              ref={ canvasRef }
              />
          : <Box></Box>}
          </Grid>
          <Grid item xs={16}>
          {!show ?
            <Box>
              <Button variant="contained" 
                onClick={() => {
                  canvasRef.current.undo();
                }}>Undo
              </Button>
              <Button variant="contained"
                onClick={() => {
                  canvasRef.current.clear();
              }}>Clear</Button>
              <Button variant="contained"
              onClick={ExportDrawing}
              >Next</Button> 
              <img src={drawing} alt="exported drawing" />
            </Box>
            : <Box></Box>}
          </Grid>
        </>
    )
  };

  return (
      <Grid
        container
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        spacing={4}
        columns={16}
      >
        <Grid item xs={16}>
          <Title component="h1">
            Drawing
          </Title>
        </Grid>
        <Grid item xs={16}>
          <TextBox>
            This is where the explanation would be. We could
            also include an image, similar to the "HERO" image
            that we include in the Home page.
          </TextBox>
        </Grid>
        {/* <Grid item xs={16}>
          <Box textAlign="center">
            <ToggleButton/> 
          </Box>
        </Grid> */}
        {/* <Grid item xs={16}> */}
        <ToggleButton />
        {/* </Grid> */}
        <Grid item alignItems="center" xs={16}>
          <Typography>Hello world</Typography>
        </Grid>
    </Grid>
  );
}
  
export default Drawing;