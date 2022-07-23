import React, { useState } from "react";
import { Button, Dialog, DialogContent, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { borderRadius } from "@mui/system";

const initialValues = {
  taskName: "",
  description: "",
  status: "Blocked",
  priority: "high",
  storyPoints: "0"
}

function CustomDialog(props) {
  const { open, handleCloseDialog } = props;
  console.log("Inside CustomDialog");

  const [formValues, setFormValues] = useState(initialValues);

  const handleSaveData = () => {
    console.log("Inside the handleSave method and the formValues are ", formValues);
    // The dialog box has to be closed
    handleCloseDialog();
    // Fetch API call to be done here

  }

  const handleChange = (e) => {
    let { name, value } = {};
    name = e.target.name;
    value = e.target.value;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <Dialog
      open={open}
    >
      <DialogContent style = {{ minWidth: '550px', minHeight: '418px'}}>
        {/* Hello World */}
        <Grid container>

          <Grid item xs={11}>
            <TextField
              variant="standard"
              label="Task Name"
              name="taskName"
              value={formValues.taskName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={1}>
            <IconButton onClick={handleCloseDialog}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </Grid>
        </Grid>

        <Grid container style = {{ marginTop : "3%" }}>
          <Grid item xs = {8}>
            {/* description box goes here */}
            <TextareaAutosize
              placeholder="Description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
              style={{ minHeight: 320, width: 320 }}
            />
          </Grid>
          <Grid item xs = {4}>
            <Grid container spacing = {4}>
              <Grid item xs={12}>
                {/* Status goes here */}
                <TextField
                  label="Status"
                  variant="outlined"
                  name="status"
                  value={formValues.status}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                {/* Priority goes here */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                  <Select
                    label="Priority"
                    name="priority"
                    value={formValues.priority}
                    onChange={handleChange}
                  >
                    <MenuItem value="high">High</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="low">Low</MenuItem>
                  </Select>
                </FormControl>

              </Grid>
              <Grid item xs={12}>
                {/* Story points goes here */}
                <TextField
                  label="Story Points"
                  variant="outlined"
                  name="storyPoints"
                  value={formValues.storyPoints}
                  onChange={handleChange}                  
                />
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
                <Button onClick={handleCloseDialog} style={{ color: 'grey' }}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" onClick={handleSaveData}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </DialogContent>
    </Dialog>
  )
}

export default CustomDialog;
