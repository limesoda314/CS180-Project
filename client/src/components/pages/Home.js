import React from "react";
import Grid from '@mui/material/Grid';
import {TextBox, Title} from "../styles/TextStyles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { HeroBox } from "../styles/HeroBox";

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
          <Button variant="outlined">
            Drawing
          </Button>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box textAlign="center">
          <Button variant="outlined">
            Detecting
          </Button>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Title component="h3">
          Gallery
        </Title>
        <Box>
          <TextBox>
            This box would be populated with images in a MxN grid.
          </TextBox>
        </Box>
      </Grid>
    </Grid>
  );
}
  
export default Home;