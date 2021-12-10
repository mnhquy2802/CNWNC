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

const AuthorTable = () => {
  const [userValue, setUserValue] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const getUser = async () => {
    const users = await AuthApi.UserList();
    setUserValue(users?.data?.data || []);
    console.log("userValue", userValue);
  };

  console.log("QUUY", userValue);

  useEffect(() => {
    getUser();
  }, []);

  const check_online = (status) => {
    var check = "offline";
    if (status === true) {
      check = "online";
    }
    return check;
  };

  const button_action = () => {
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
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">username</TableCell>
            <TableCell align="center">status</TableCell>
            <TableCell align="right">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userValue.map((row) => {
            return (
              <TableRow
                key={row._username}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row._username}
                </TableCell>
                <TableCell align="right">{check_online(row._status)}</TableCell>
                {button_action()}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AuthorTable;
