/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Checkbox } from "@mui/material";

export default function data() {
  const data1 = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { accessor: "check", align: "left" },
      { Header: "Dataset Name", accessor: "author", width: "25%", align: "left" },
      { Header: "No. of Files", accessor: "function", align: "left" },
      { Header: "Data size", accessor: "status", align: "center" },
      { Header: "Creation Date", accessor: "employed", align: "center" },
      { Header: "Source", accessor: "action", align: "center" },
      { Header: "Status", accessor: "status2", align: "center" },
    ],

    rows: data1?.map((x) => {
      console.log(x);
      return {
        check: <Checkbox />,
        author: <Author image={team2} name={x.bucketName} />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        status2: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="60%" color="success" variant="gradient" size="sm" name="60%" />
          </MDBox>
        ),
      };
    }),
  };
}
