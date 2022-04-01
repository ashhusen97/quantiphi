/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/details/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [hidden, setHidden] = useState(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={!hidden ? 12 : 9}>
            <Card>
              <MDBox pt={3}>
                <DataTable
                  onClick={() => {
                    setHidden(!hidden);
                  }}
                  canSearch
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          {hidden && (
            <Grid item xs={3}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Projects
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <MDTypography variant="h2" color="white" style={{ marginLeft: 20 }}>
                    230
                  </MDTypography>
                </MDBox>
              </Card>
              <Card style={{ marginTop: 50 }}>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Data Status
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <MDTypography variant="h2" color="white" style={{ marginLeft: 20 }}>
                    70%
                  </MDTypography>
                </MDBox>
              </Card>
              <Card style={{ marginTop: 50 }}>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Projects
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <MDTypography variant="h2" color="white" style={{ marginLeft: 20 }}>
                    70%
                  </MDTypography>
                </MDBox>
              </Card>
            </Grid>
          )}
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Details;
