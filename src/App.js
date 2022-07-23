import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogTitle, Grid, Typography, IconButton, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './App.css';
import List from './components/List';
import CustomDialog from "./components/CustomDialog";
// import List from './components/List';

const status = ["Not Started", "In Progress", "Completed"]

const mockTaskList = [
  {
    taskName: "Task1",
    description: "Description1",
    status: "Not Started",
    priority: "Low",
    storyPoints: "1"
  },
  {
    taskName: "Task2",
    description: "Description2",
    status: "In Progress",
    priority: "Medium",
    storyPoints: "2"
  },
  {
    taskName: "Task3",
    description: "Description3",
    status: "Completed",
    priority: "High",
    storyPoints: "3"
  }
]

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const handleCreateTaskDialog = () => {
    console.log("Inside handleCreateTaskDialog");
    setDialogOpen(true);
  }

  const handleClose = () => {
    console.log("Inside handleClose")
    setDialogOpen(false);
  }

  const handleMockSetup = () => {
    setTaskList(mockTaskList);
  }

  useEffect = () => {
    console.log("Inside the useEffect")
    handleMockSetup();
    // Fetch API call to get the list of tasks
  }

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
            status?.map((eachStatus) => {
              return <Grid item xs={3}>
                  <List
                    statusType={eachStatus}
                    taskData={taskList}
                  />
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
            handleCloseDialog={handleClose}
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
