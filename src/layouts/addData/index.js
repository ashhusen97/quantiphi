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
import MDInput from "components/MDInput";
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
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "10%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
  },
};

function AddData() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bname, setBname] = useState("");
  const [pid, setPid] = useState("");
  const [aname, setAname] = useState("");
  const [akey, setAKey] = useState("");

  const submit = () => {
    const obj = {
      bucketName: bname,
      BucketId: pid,
      AccountName: aname,
      Accountkey: akey,
    };
    var retrievedData = localStorage.getItem("data");
    var newArray = [];
    var parsed = JSON.parse(retrievedData);
    if (parsed) {
      newArray = [...parsed, { obj }];
    } else {
      newArray.push(obj);
    }

    localStorage.setItem("data", JSON.stringify(newArray));
    window.location.href = "/tables";
  };
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={2}>
                  <MDButton fullWidth variant="gradient" color="info" size="large">
                    Upload Files
                  </MDButton>
                </Grid>
                <Grid item xs={12} xl={2}>
                  <MDButton
                    fullWidth
                    variant="gradient"
                    color="info"
                    size="large"
                    onClick={() => {
                      setIsOpen(!modalIsOpen);
                    }}
                  >
                    GCP
                  </MDButton>
                </Grid>
                <Grid item xs={12} xl={2}>
                  <MDButton fullWidth variant="gradient" color="info" size="large">
                    AWS
                  </MDButton>
                </Grid>
                <Grid item xs={12} xl={2}>
                  <MDButton fullWidth variant="gradient" color="info" size="large">
                    Azure
                  </MDButton>
                </Grid>
                <Grid item xs={12} xl={2}>
                  <MDButton fullWidth variant="gradient" color="info" size="large">
                    Dalet MAM
                  </MDButton>
                </Grid>
                <Grid item xs={12} md={6} xl={3}></Grid>
                <Grid item xs={12} md={6} xl={3}></Grid>
                <Grid item xs={12}></Grid>
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

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <MDBox mt={8}>
          <MDBox mb={3}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={12}
                style={{
                  background: "black",
                  paddingBottom: 30,
                  paddingRight: 30,
                  borderRadius: 10,
                  margin: 10,
                }}
              >
                <h3 style={{ color: "#fff", margin: "20px 0px" }}>New GCP Cloud Bucket</h3>
                <Grid container spacing={3}>
                  <Grid item xs={12} xl={6}>
                    <MDInput
                      placeHolder="Bucket Name"
                      variant="outlined"
                      label="Bucket Name"
                      fullWidth
                      value={bname}
                      onChange={(e) => setBname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} xl={6}>
                    <MDInput
                      variant="outlined"
                      label="Project ID"
                      fullWidth
                      value={pid}
                      onChange={(e) => setPid(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} xl={6}>
                    <MDInput
                      variant="outlined"
                      label="Service Account Name"
                      fullWidth
                      value={aname}
                      onChange={(e) => setAname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} xl={6}>
                    <MDInput
                      variant="outlined"
                      label="Service Account Keys"
                      fullWidth
                      value={akey}
                      onChange={(e) => setAKey(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} xl={6}>
                    <MDButton
                      fullWidth
                      variant="gradient"
                      color="info"
                      size="large"
                      onClick={() => {
                        submit();
                        setIsOpen(!modalIsOpen);
                      }}
                    >
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
      </Modal>
    </DashboardLayout>
  );
}

export default AddData;
