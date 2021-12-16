/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AuthApi from "../../../api/auth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import "./index.scss";

const data = [
  {
    id: "1",
    _username: "Admin",
    _status: "1",
    role: "admin",
  },
  {
    id: "2",
    _username: "ABC",
    _status: "1",
    role: "super admin",
  },
  {
    id: "3",
    _username: "ABC",
    _status: "1",
    role: "user",
  },
];

const AuthorTable = () => {
  const [open, setOpen] = useState(false);
  // const [userValue, setUserValue] = useState([]);

  // // eslint-disable-next-line no-unused-vars
  // const getUser = async () => {
  //   const users = await AuthApi.UserList();
  //   // setUserValue(users?.data?.data || []);
  //   setUserValue(data);
  // };

  // console.log("QUUY", userValue);

  // useEffect(() => {
  //   getUser();
  // }, []);

  const check_online = (status) => {
    var check = "offline";
    if (status === true) {
      check = "online";
    }
    return check;
  };

  const button_action = () => {
    try {
      var role = localStorage.getItem("role");
      role = JSON.parse(role);
      role = Object.entries(role);
      console.log("role : ---> ", role);
      let listroleuser = role.map(([key, value]) => {
        if (key === "users") {
          console.log("role users : ---> ", value);
          return value;
        }
      });
      console.log("listroleuser : ---> ", listroleuser);
      return 0;
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="AuthorTable">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="AuthorTable-header">
            <TableRow>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow
                  key={row._username}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell width={1}>{row._username}</TableCell>
                  <TableCell align="center">{check_online(row._status)}</TableCell>
                  <TableCell align="center">
                    <Button onClick={handleClickOpen}>
                      <i className="fas fa-pencil-alt" />
                    </Button>
                  </TableCell>
                  {/* {button_action()} */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AuthorTable;
