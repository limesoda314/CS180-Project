import React, { useState, useRef, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CanvasDraw from "react-canvas-draw";
import { TextBox } from "../styles/TextStyles";
import { Typography } from "@mui/material";
import ImagePrediction from "./ImagePrediction";

var RandChar = () => {
    let result = ''; 
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    return result; 
};

const ToggleButton = () => {
    const [show, setShow] = useState(false);
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = React.useState();
    const [ticking, setTicking] = useState(false);

    // This is for the time interval
    // const [ticking, setTicking] = useState(false)
    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const timer = setTimeout( () => ticking && setCount(count + 1), 1000)
    //     return () => clearTimeout(timer)
    // }, [count, ticking]);

    var randChar

    const ExportDrawing = () => {

        var base64 = canvasRef.current.canvasContainer.childNodes[1].toDataURL("image/png");
        setDrawing(base64); // just clear it for now
        
        console.log(randChar);
    
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
            label: randChar, // TODO: insert variable name
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
    };

    return (
        <>
          <Grid item xs={16}>
            {!show ?
            <Button variant="contained"
                onClick={() => {
                    setShow(true);
                    setTicking(true);
                }
              }
            >
              Start
            </Button>
            : <Box></Box>
            }
          </Grid>
          <Grid item xs={16}>
          
          {show ?
              <Box>
                Draw the character { randChar = RandChar() }
                <CanvasDraw
                    ref={ canvasRef }
                    style={ { marginLeft: "40%", border: '5px solid black' } }
                    onClick={ () => {
                        console.log("clicking canvas");
                    }}
                />
              </Box>
              
          : <Box></Box>}
          </Grid>
          <Grid item xs={16} >
          {show ?
            
            <Box >
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
              onClick={ () => {
                ExportDrawing();
                canvasRef.current.clear();
              }
              }>Next</Button> 
              {/* <Box>
              <a id = "download_image"> <img src={drawing}/> </a>
              </Box> */}
              
            </Box>
            : <Box></Box>}
          </Grid>
          <Grid item xs={16}>
            <Box>
                <Typography>
                    Predictions
                </Typography>
            </Box>
            {
                show ?
                <ImagePrediction canvas={canvasRef}/>
                : <Box></Box>
            }
          </Grid>
        </>
    )
  };

export default ToggleButton;