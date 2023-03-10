import React from "react";
import Grid from '@mui/material/Grid';
import {TextBox, Title} from "../styles/TextStyles";

function Contact() {
  return (
    <Grid container spacing={2} columns={3}>
      <Grid item xs={3}>
        <Title component="h1">
          Contact Information
        </Title>
      </Grid>
      <Grid item xs={3}>
        <Title component="h3">
          Ann-Marina Miyaguchi
        </Title>
      </Grid>
      <Grid item xs={3}>
        <TextBox>
          Email: amiya017@ucr.edu 
        </TextBox>
      </Grid>
      <Grid item xs={3}>
        <Title component="h3">
          Ivan Neto
        </Title>
      </Grid>
      <Grid item xs={3}>
        <TextBox>
          
          Email: ineto001@ucr.edu 
        </TextBox>
      </Grid>
    </Grid>
  );
}
  
export default Contact;