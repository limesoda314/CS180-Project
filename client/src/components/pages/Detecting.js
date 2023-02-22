import React from "react";
import Grid from '@mui/material/Grid';
import {TextBox, Title} from "../styles/TextStyles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Detecting() {
  return (
    <Grid container spacing={2} columns={3}>
      <Grid item xs={3}>
        <Title component="h1">
          Detection
        </Title>
      </Grid>
      <Grid item xs={3}>
        <TextBox>
          This is where the explanation would be. We could
          also include an image, similar to the "HERO" image
          that we include in the Home page. This bix box would
          preferably be a styled "BigBox" or something that would
          hold where the drag/drop image can be placed. Otherwise,
          we can make it be a custom drag/drop component.
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
  
export default Detecting;