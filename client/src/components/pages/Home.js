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
        <Title component="h1">
          Homepage
        </Title>
        <HeroBox>
          This is the "HERO" of the website, where we place
          random images to show the user what our website is
          generally about. We can either (1) automatically
          scroll through the images, or do so manually via
          left and right buttons. We can also include floating
          text throughout the "HERO".

          ...
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
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
          <TextBox>
            Below are some samples of images taken from the emnist dataset. 
          </TextBox>
          <Grid container p={2} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 16 }}>
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