import React from "react";
import Grid from '@mui/material/Grid';
import {TextBox, Title} from "../styles/TextStyles";

function About() {
  return (
      <Grid container spacing={2} columns={3}>
      <Grid item xs={3}>
        <Title component="h1">
          About
        </Title>
      </Grid>
      <Grid item xs={3}>
        <TextBox>
          The alphanumeric detector allows you to draw or upload letters and numbers.
          We use a machine learning model to determine the value of the given input.
        </TextBox>
      </Grid>
      <Grid item xs={3}>
        <Title component="h2">
          Motivation
        </Title>
      </Grid>
      <Grid item xs={3}>
        <Title component="h2">
          Background
        </Title>
      </Grid>
      <Grid item xs={1.5}>
        <Title component="h3">
          Test1
        </Title>
      </Grid>
      <Grid item xs={1.5}>
        <Title component="h3">
          Test2
        </Title>
      </Grid>
    </Grid>
  );
}
  
export default About;