import React from "react";
import Grid from '@mui/material/Grid';
import {TextBox, Title} from "../styles/TextStyles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {DragDropFile} from "../misc/DragAndDrop";

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
              <Typography>
                Detect your own drawings! This mode is for your own enjoyment, we do not collect any of your drawing data.
              </Typography>

              <br></br>

              <Typography>
                Upon starting, you will be asked to upload an image containing some alphanumeric characters.
                You may choose anything from handdrawn text, to a typed prompt. <b>Please ensure your image is in JPEG or PNG format.</b>
              </Typography>

              <br></br>

              <Typography>Press <b>"Start"</b> to begin.</Typography>
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