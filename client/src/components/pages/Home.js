import React from "react";
import Grid from '@mui/material/Grid';
import {TextBox, Title} from "../styles/TextStyles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { HeroBox } from "../styles/HeroBox";
import { requirePropFactory } from "@mui/material";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";

function Home() {
  
  return (
    
      <Grid container spacing={2} columns={2} >
      <Grid item xs={2}>
        
        <HeroBox>
        <h1>
          AlphaNumeric Detector 
        </h1>
        <h2>
          X-ML
        </h2>
          
        </HeroBox>
      </Grid>
      <Grid item xs={1}>
        <Box textAlign="center">
        <Link to="/draw" style={{ textDecoration: 'none', color: 'DodgerBlue' }} > 
          <Button variant="outlined">
          Drawing
          </Button>
        </Link>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box textAlign="center">
        <Link to="/detect" style={{ textDecoration: 'none', color: 'DodgerBlue' }}>
          <Button variant="outlined">
           Detect
          </Button>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Title component="h3">
          Gallery
        </Title>
        <Box>
          <TextBox style={{marginLeft: '2%', marginRight: '2%'}}>
            Below are some samples of images taken from the emnist dataset. 
          </TextBox>
          <Grid container p={4} spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 12, md: 16 }}>
            {Array.from(Array(20)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Box>
                  <img
                    src={require(`./../../galleryimages/image${index}.png`)}
                    alt={`image${index}`}
                    loading="lazy"
                    width="250" 
                    height="200"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Grid>
    </Grid>
  );
}
  
export default Home;