/* eslint-disable */
import { useEffect, useState } from "react";
import TourApi from "../../../api/tour";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SuiButton from "components/SuiButton";

const TourTable = () => {
  const [tourValue, setTourValue] = useState([]);

  // const a = localStorage.getItem("role");

  // eslint-disable-next-line no-unused-vars
  // const getTour = async () => {
  //   const tours = await TourApi.ListTour();
  //   setTourValue(tours?.data?.data);
  // };

  // console.log("QUUY", tourValue);
  var tourRole = null;

  // useEffect(() => {
  //   getTour();
  // }, []);

  const button_action = () => {
    // var role = localStorage.getItem("role");
    // role = JSON.parse(role);
    // role = Object.entries(role);
    // console.log("role at tour: ---> ", role);
    // role.map(([key, value]) => {
    //   if (key === "tour") {
    //     tourRole = value;
    //     return value;
    //   }
    // });
    // try {
    //   tourRole = Object.entries(tourRole);
    //   let result = tourRole.map((item, key) => {
    //     console.log("tour result item : -----> ", item[1]);
    //     if (item[1] === "update") {
    //       return (
    //         <SuiButton variant="text" buttonColor="secondary">
    //           Update
    //         </SuiButton>
    //       );
    //     }
    //     if (item[1] === "delete") {
    //       return (
    //         <SuiButton variant="text" buttonColor="secondary">
    //           DELETE
    //         </SuiButton>
    //       );
    //     }
    //     if (item[1] === "show_tourdetail") {
    //       return (
    //         <SuiButton variant="text" buttonColor="secondary">
    //           Show Tour Detail
    //         </SuiButton>
    //       );
    //     }
    //   });
    //   return result;
    // } catch {
    //   return null;
    // }
  };

  const showListTourDetail = (item) => {
    console.log("item : -----> ", item);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Tour Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tourValue.map((row) => {
            return (
              <TableRow
                key={row._username}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={showListTourDetail()}
              >
                <TableCell component="th" scope="row">
                  {row._tourName}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row._description}
                </TableCell>
                {button_action()}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TourTable;
