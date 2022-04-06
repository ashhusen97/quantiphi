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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import DoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import reportdoughnutchart from "./data/reportdoughnutchart";
import MDTypography from "components/MDTypography";
import { Typography } from "@mui/material";
import ReactPlayer from "react-player";

function Review() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3} style={{ backgroundColor: "gray", height: 200 }}>
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=lTTajzrSkCw"
                  width="100%"
                  height="100%"
                />
              </MDBox>
              <MDBox mb={3} style={{ backgroundColor: "gray", height: 200 }}>
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=lTTajzrSkCw"
                  width="100%"
                  height="100%"
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography variant="h2">LINK 1</MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography variant="h2">LINK 1</MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography variant="h2">LINK 1</MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography variant="h2">LINK 1</MDTypography>
                  </MDBox>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography variant="h2">LINK 1</MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography variant="h2">LINK 1</MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography variant="h2">LINK 1</MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography variant="h2">LINK 1</MDTypography>
                  </MDBox>
                </Grid>
              </Grid>

              <img
                src="https://www.lafilm.edu/wp-content/uploads/2017/06/Importance-of-Sound.jpg"
                style={{ width: "100%", height: 300 }}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Review;
