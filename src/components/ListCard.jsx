import React from "react";
import { Card, CardActions, CardContent, Chip, Grid, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ListCard() {
  return (
    <Grid item xs={12} style={{ margin : "5%" }}>
      <Card variant='outlined' style={{ marginTop : "5%" }}>
        <CardContent>
          <Typography variant="h5">
            Clean office space
          </Typography>
          <Typography variant="body">
            I want to clean my office table, mop the floor and vaccuum the chair
          </Typography>
        </CardContent>
        <CardActions style={{ paddingTop: '0%'}}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            spacing={4}
          >
            <Grid item xs={3} style={{ paddingTop: '0%'}}>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Grid item xs={6} style={{ marginBottom : "-16%"}}>
                {/* style={{ marginBottom : "-16%"}} */}
                  <IconButton>
                    <ExpandMoreIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={6}>
                  Low
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} style={{ paddingTop: '0%' }}>
              <Chip size="small" label="3" />
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ListCard;