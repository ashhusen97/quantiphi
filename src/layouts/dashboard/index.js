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

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={7}>
              <MDBox mb={3}>
                <DoughnutChart
                  color="primary"
                  title="Assets distribution by size in (GIB) & Type"
                  // description="Last Campaign Performance"
                  // date="campaign sent 2 days ago"
                  chart={reportdoughnutchart}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                <MDTypography>Total Assets Proceed</MDTypography>
                <MDTypography variant="h2">936</MDTypography>
              </MDBox>
              <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography>Unique Assets Proceed</MDTypography>
                    <MDTypography variant="h2">936</MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={6} style={{ paddingLeft: 10 }}>
                  <MDBox mb={3} style={{ backgroundColor: "gray", borderRadius: 20, padding: 10 }}>
                    <MDTypography>Duplicate Assets</MDTypography>
                    <MDTypography variant="h2">936</MDTypography>
                  </MDBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>

        <Grid container spacing={3} style={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Annual Storage Cost Pre"
                count={281421}
                // percentage={{
                //   color: "success",
                //   amount: "+55%",
                //   label: "than lask week",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Annual Storage Cost Pre"
                count={281421}
                // percentage={{
                //   color: "success",
                //   amount: "+3%",
                //   label: "than last month",
                // }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Annual Storage Cost Pre"
                count={281421}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <Projects />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
