import React from "react";
import Grid from '@mui/material/Grid';
import {TextBox, Title} from "../styles/TextStyles";
import ToggleButton from "../misc/ToggleButton";
import { Typography } from "@mui/material";

function Drawing() {

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
            <Typography>
              Draw a letter or digit. The game will prompt to you to write a letter (for example, "B").
              Once you finish drawing the letter, you may press <b>"Next"</b> to move to the next letter.
            </Typography>

            <br></br>

            <Typography>
              The <b>"Undo"</b> button clears a stroke you have recently created.
            </Typography>

            <br></br>

            <Typography>
              The <b>"Clear"</b> button clears the current image you are drawing.
            </Typography>

            <br></br>

            <Typography>
              Feel free to use any of these utilities to make the characters as close as possible to what you think the character should look like.
              You may be asked to draw the same character at different times. This is intentional.
            </Typography>

            <br></br>

            <Typography>Press <b>"Start"</b> to begin.</Typography>
          </TextBox>
        </Grid>
        {/* <Grid item xs={16}>
          <Box textAlign="center">
            <ToggleButton/> 
          </Box>
        </Grid> */}
        {/* <Grid item xs={16}> */}
        <ToggleButton/>
        {/* </Grid> */}
        
    </Grid>
  );
}
  
export default Drawing;