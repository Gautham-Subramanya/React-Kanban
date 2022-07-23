import { Grid, Paper } from "@mui/material";
import React from "react";
import ListCard from "./ListCard";
// import Card from "./Card";

function List(props) {
  const { cardData } = props;
  return (
    <Grid container>
      <Grid item xs={12} style={{ backgroundColor : '#e7e7e7' }}>
        <Paper elevation = {2} style={{ width : '100%', height : '70vh', backgroundColor : '#e7e7e7' }}>
          <ListCard />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default List;