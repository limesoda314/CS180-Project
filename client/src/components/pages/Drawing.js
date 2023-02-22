import React from "react";
import Grid from '@mui/material/Grid';

import {TextBox, Title} from "../styles/TextStyles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Drawing() {
  return (
      <Grid container spacing={2} columns={3}>
      <Grid item xs={3}>
        <Title component="h1">
          Drawing
        </Title>
      </Grid>
      <Grid item xs={3}>
        <TextBox>
          This is where the explanation would be. We could
          also include an image, similar to the "HERO" image
          that we include in the Home page.
        </TextBox>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="center">
          <Button variant="contained">
            Start
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
  
export default Drawing;