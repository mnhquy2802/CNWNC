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

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import AuthorTable from "./AuthorTable";
// Custom styles for the Tables
import styles from "layouts/Menu/Author/styles";

// Data
// import { results } from "layouts/tables/data/authorsTableData";
// import { useEffect, useState } from "react";
// import AuthApi from "api/auth";

function Author() {
  const classes = styles();
  //console.log(rows);
  // const [rows, setRows] = useState();
  // const [columns, setColumns] = useState();

  // useEffect(() => {
  //   async function get_column_rows() {
  //     let item = await results();
  //     setRows(item.rows);
  //     setColumns(item.columns);
  //     console.log("item : ----> ", item);
  //   }
  //   get_column_rows();
  // }, []);

  // Similar to componentDidMount and componentDidUpdate:
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6"> Authors table</SuiTypography>
            </SuiBox>
            <SuiBox customClass={classes.tables_table}>
              <AuthorTable />
            </SuiBox>
          </Card>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Author;
