import React from "react";
import { Button, Dialog, DialogContent, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { borderRadius } from "@mui/system";

function CustomDialog(props) {
  const { open } = props;
  console.log("Inside CustomDialog");
  return (
    // style={{ width: "698px", height: "418px"}}
    // <Grid container>
    //   <Grid item xs={12}>
        <Dialog
          open={open}
        >
          <DialogContent style = {{ minWidth: '550px', minHeight: '418px'}}>
            {/* Hello World */}
            <Grid container>
              <Grid item xs={11}>
                <Typography variant="h4">
                  Build a Space Ship
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <CloseIcon></CloseIcon>
                </IconButton>
              </Grid>
            </Grid>
            <Grid container style = {{ marginTop : "3%" }}>
              <Grid item xs = {8}>
                {/* description box goes here */}
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Empty"
                  style={{ minHeight: 320, width: 320 }}
                />
              </Grid>
              <Grid item xs = {4}>
                <Grid container spacing = {4}>
                  <Grid item xs={12}>
                    {/* Status goes here */}
                    <TextField label="Status" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Priority goes here */}

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>


                  </Grid>
                  <Grid item xs={12}>
                    {/* Story points goes here */}
                    <TextField label="Story Points" variant="outlined" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Grid item xs={2}>
                    <Button>
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="contained">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
    //   </Grid>
    // </Grid>
  )
}

export default CustomDialog;
