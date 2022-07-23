import React, { useState } from "react";
import { Button, Dialog, DialogTitle, Grid, Typography, IconButton, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './App.css';
import List from './components/List';
import CustomDialog from "./components/CustomDialog";
// import List from './components/List';

const status = ["Not Started", "In Progress", "Completed"]
function App() {

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateTaskDialog = () => {
    console.log("Inside handleCreateTaskDialog");
    setDialogOpen(true);
  }

  // const handleClose = () => {
  //   setDialogOpen(false);
  // }

  return (
    <div style={{ margin: "2%" }}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant='h5'>
            Kanban Board
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1'>
            Gautham's tasks
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginTop: '2%' }}>
        {/* style={{ marginTop: '2%' }} */}
          <Button variant='contained' color='primary' onClick={handleCreateTaskDialog}>
            Create
          </Button>
        </Grid>
        <Grid item xs={12} style={{ marginTop: '1%' }}>
          <Grid container direction="row" spacing={4} style={{ marginBottom: '0.5%'}}>
          {
            status?.map((eachStatus) => {
              return <Grid item xs={3}>
                  {eachStatus}(1)
                </Grid>
            })
          }
          </Grid>
          <Grid container direction="row" spacing={4}>
          {
            status?.map(() => {
              return <Grid item xs={3}>
                  <List />
                </Grid>
            })
          }
          </Grid>
        </Grid>
      </Grid>
      {
        dialogOpen === true ?
          <CustomDialog
            open={dialogOpen}
          />
          :
          ""
      }
{/* 
      <Dialog
        open={dialogOpen}
        style = {{ minHeight: "80vh", minWidth: "80vh"}}
        // style={{ minHeight: '80vh', maxHeight: '80vh' }}
      >
        <DialogContent
          style = {{ minHeight: "80vh", minWidth: "80vh"}}
        >
          <Grid container spacing={4}>
            <Grid item xs={9}>
              Build a Space Ship
            </Grid>
            <Grid item xs={2}>
              <IconButton>
                <CloseIcon></CloseIcon>
              </IconButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog> */}




      {/* <Dialog
        open={dialogOpen}
        handleClose={handleClose}
      >
        <DialogTitle>

        </DialogTitle>
      </Dialog> */}
    </div>
  );
}

export default App;
