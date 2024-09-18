import React from "react";
import { Toolbar, Box } from "@mui/material";

import Subheader from "../components/Subheader";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MainContent from "./MainContainer";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Sidebar />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#E5E5E5", px: 3, py: 6 }}
      >
        <Toolbar />

        <Subheader />
        <MainContent />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
