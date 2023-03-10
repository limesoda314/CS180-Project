import React from "react";
import Grid from '@mui/material/Grid';

import {TextBox, Title} from "../styles/TextStyles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useRef } from 'react';
import CanvasDraw from "react-canvas-draw";
import { Link, Typography } from "@mui/material";

function Drawing() {
  const [show, toggleShow] = React.useState(true); // used in ToggleButton 
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = React.useState();
  var randval = 0; 

  var RandChar = () => {
    let result = ''; 
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result; 
  };

  const ExportDrawing = () => {

    var base64 = canvasRef.current.canvasContainer.childNodes[1].toDataURL("image/png");
    setDrawing(base64);
    
    // downloading
    // base64 = base64.replace("image/png", "image/octet-stream"); 
    // window.location.href=base64; 
    // var link = document.getElementById('download_image');
    // console.log(base64);

    let long = 0;
    let latt = 0;

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        long = position.coords.longitude;
        latt = position.coords.latitude;
      });
    }
    else {
      long = -9999.999;
      latt = -9999.999;
    }
    
    const postBody = JSON.stringify({
        label: "none", // TODO: insert variable name
        data: base64, // trying base64 but I fear it will not work
        longitude: long,
        latitude: latt
    });

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
      },
      body: postBody
    };

    fetch("http://localhost:8000/api/image/", options)
    .then(response => response.json());
    // .then(data => this.setState({ postId: data.id }));
  };

  const ToggleButton = () => {
    return (
        <>
          <Grid item xs={16}>
            {show ?
            <Button variant="contained"
              onClick={() => {
                toggleShow(!show); 
                }
              }
            >
              Start
            </Button>
            : <Box></Box>
            }
          </Grid>
          <Grid item xs={16}>
          
          {!show ?
              <Box>
                <h2>Draw the character</h2> 
                <h1>{RandChar()}</h1>
                <CanvasDraw 
                ref={ canvasRef }
                style={{marginLeft: "40%", border: '5px solid black'}}/>
              </Box>
              
          : <Box></Box>}
          </Grid>
          <Grid item xs={16} >
          {!show ?
            
            <Box >
              <Button variant="contained"  
                onClick={() => {
                  canvasRef.current.undo();
                }}>Undo
              </Button>
              <Button variant="contained" style={{margin: '5px'}}
                onClick={() => {
                  canvasRef.current.clear();
              }}>Clear</Button>
              <Button variant="contained"
              onClick={ () => {
                ExportDrawing()}
              }>Next</Button> 
              <Box>
              <a id = "download_image"> <img src={drawing}/> </a>
              </Box>
              
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
            Draw a letter or digit. Undo removes the latest change to the canvas. Clear clears the canvas and can be undone. Next downloads and displays the image. The canvas is cleared as well. 
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
        
    </Grid>
  );
}
  
export default Drawing;