import React from "react";
import Grid from '@mui/material/Grid';
import {TextBox, Title} from "../styles/TextStyles";
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
        <Button variant="contained">
        </Button>
      </Grid>
    </Grid>
  );
}
  
export default Drawing;