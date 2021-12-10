/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

// Soft UI Dashboard React components
import SuiInput from "components/SuiInput";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// Custom styles for the Tables
import styles from "layouts/Menu/Author/styles";
import TourTable from "./TourTable";
import { useState } from "react";
import TourApi from "../../../api/tour";

// Data
// import { results } from "layouts/tables/data/authorsTableData";
// import { useEffect, useState } from "react";
// import AuthApi from "api/auth";

function Tour() {
  const [tourname, setTourname] = useState("Input name tour");
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const register = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (tourname === "") {
      return setError("You must enter your username.");
    }
    try {
      const obj = {
        tourname: tourname,
        description: description,
      };
      console.log("create tour ---------- ", obj);
      let response = await TourApi.CreateTour(obj);
      console.log(response.data);
      if (response.data && response.data.status_code === 400) {
        return setError(response.data.msg);
      }
      return history.push("/author");
    } catch (err) {
      console.log(err);
    }
  };

  const classes = styles();
  // const [dialog, setDialog] = useState();
  // const showCreateDialog = () => {
  //   setDialog("");
  //   console.log(dialog);
  // };

  const button_create = () => {
    var role = localStorage.getItem("role");
    role = JSON.parse(role);
    role = Object.entries(role);
    console.log("role at tour: ---> ", role);
    var tourRole = null;

    role.map(([key, value]) => {
      if (key === "tour") {
        tourRole = value;
        return value;
      }
    });

    try {
      tourRole = Object.entries(tourRole);
      let result = tourRole.map((item) => {
        if (item[1] === "create") {
          console.log("have button create");
          return (
            <SuiButton variant="text" buttonColor="secondary" onClick={handleClickOpen}>
              CREATE TOUR
            </SuiButton>
          );
        }
      });
      console.log("result : -----> ", result);
      return result;
    } catch {
      return null;
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold">
              Tour Name
            </SuiTypography>
          </SuiBox>
          <SuiInput
            defaultValue={tourname}
            onChange={(event) => {
              setTourname(event.target.value);
              setError(undefined);
            }}
            type="email"
            placeholder="Tour Name"
          />

          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Description
              </SuiTypography>
            </SuiBox>
            <SuiInput
              defaultValue={description}
              onChange={(event) => {
                setDescription(event.target.value);
                setError(undefined);
              }}
              type="description"
              placeholder="Description"
              size="large"
            />
          </SuiBox>
          <SuiBox mt={2} mb={2} textAlign="center">
            <h6
              style={{
                fontSize: ".8em",
                color: "red",
                textAlign: "center",
                fontWeight: 400,
                transition: ".2s all",
              }}
            >
              {error}
            </h6>
          </SuiBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={register}>Create Tour</Button>
        </DialogActions>
      </Dialog>
      <DashboardLayout>
        <DashboardNavbar />
        <SuiBox py={3}>
          <SuiBox mb={3}>
            <Card>
              <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <SuiTypography variant="h6"> Tour table </SuiTypography>
                {button_create()}
              </SuiBox>
              <SuiBox customClass={classes.tables_table}>
                <TourTable />
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>
        <Footer />
      </DashboardLayout>
    </div>
  );
}

export default Tour;
