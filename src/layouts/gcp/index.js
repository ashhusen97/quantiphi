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

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

function Gcp() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              lg={12}
              style={{ background: "white", paddingBottom: 30, paddingRight: 30 }}
            >
              <h3>New GCP Cloud Bucket</h3>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MDInput variant="outlined" label="Bucket Name" fullWidth />
                </Grid>
                <Grid item xs={12} xl={6}>
                  <MDInput variant="outlined" label="Project ID" fullWidth />
                </Grid>
                <Grid item xs={12} xl={6}>
                  <MDInput variant="outlined" label="Service Account Name" fullWidth />
                </Grid>
                <Grid item xs={12} xl={6}>
                  <MDInput variant="outlined" label="Service Account Keys" fullWidth />
                </Grid>
                <Grid item xs={12} xl={6}>
                  <MDButton fullWidth variant="gradient" color="info" size="large">
                    Proceed
                  </MDButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}></Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}></Grid>
            <Grid item xs={12} md={5}></Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Gcp;
