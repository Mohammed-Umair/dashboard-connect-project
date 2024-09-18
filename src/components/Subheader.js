import React from "react";
import { Box, } from "@mui/material";
import CustomButton from "./common/CustomButton";
import CustomDropdown from "./common/CustomDropdown";

import { AccessTime } from "@mui/icons-material";
import BasicDatePicker from "../pages/BasicDatePicker";
import CalendarDropdown from "../pages/BasicDatePicker";
import CustomDatePicker from "../pages/BasicDatePicker";


const timeOptions = [
  { value: "This Year", label: "This Year", icon: <AccessTime /> },
  { value: "Last Year", label: "Last Year", icon: <AccessTime /> },
  { value: "This Month", label: "This Month", icon: <AccessTime /> },
];

const locationOptions = [
  { value: "Location", label: "Location" },
  { value: "City 1", label: "City 1" },
  { value: "City 2", label: "City 2" },
];

const statusOptions = [
  { value: "Status", label: "Status" },
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];
const Subheader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <CustomDropdown
          options={timeOptions}
          defaultValue="This Year"
          onChange={(e) => console.log(e.target.value)}
          width="120px"
          buttonHeight="40px"
        />
        {/* <CustomDatePicker/> */}

        <CustomDropdown
          options={locationOptions}
          defaultValue="Location"
          onChange={(e) => console.log(e.target.value)}
          buttonHeight="40px"
          width="80px"
        />

        <CustomDropdown
          options={statusOptions}
          defaultValue="Status"
          onChange={(e) => console.log(e.target.value)}
          buttonHeight="40px"
          width="80px"
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
        <CustomButton
          label=" Assign Order"
          icon={""}
          onClick={() => console.log("Create Order clicked")}
        />{" "}
        <CustomButton
          label="          Add New Service Provider
"
          icon={""}
          onClick={() => console.log("Create Order clicked")}
        />
      </Box>
    </Box>
  );
};

export default Subheader;
