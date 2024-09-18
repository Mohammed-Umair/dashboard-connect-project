import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const doughnutData = {
    labels: ["Active Services", "New Services", "Removed Services"],
    datasets: [
      {
        label: "Services",
        data: [60, 25, 15], 
        backgroundColor: ["green", "yellow", "red"],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    cutout: "60%", 
    plugins: {
      legend: {
        display: false,
      },
    },
  };

const lineData = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  datasets: [
    {
      label: "Number of Active Services",
      data: [20, 30, 30, 40, 50, 60, 70, 80, 90, 100, 95, 100],
      borderColor: "green",
      backgroundColor: "rgba(0, 255, 0, 0.2)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "New Services Added",
      data: [30, 25, 20, 60, 90, 80, 70, 60, 50, 70, 65, 65],
      borderColor: "yellow",
      backgroundColor: "rgba(255, 255, 0, 0.2)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Services Removed",
      data: [],
      borderColor: "red",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};


const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
  
    display: false,

    },
    title: {
      display: false,
      text: "Service Trends",
    },
  },
  scales: {
    x: {
      grid: {
        display: false, 
      },
    },
    y: {
      grid: {
        display: false, 
      },
      min: 0,
      max: 100,
    },
  },
};

const ServiceOfferingsChart = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "white", borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Service Offerings
      </Typography>

      <Grid container spacing={4}>
       
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              width: "200px",
              height: "200px", 
              marginTop: 3,
            }}
          >
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
        
       <Box
       sx={{
         width: "100%", 
         height: "250px", 
       }}
     >
       <Line data={lineData} options={lineOptions} />
     </Box>
        </Grid>
      </Grid>

  
      <Grid container justifyContent="start"  spacing={2} mt={2}>
        <Grid item>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "green",
                borderRadius:"10px",
                marginRight: "8px",
              }}
            ></Box>
            <Typography color="text.secondary" variant="body1" fontWeight="bold">Number of active services</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "yellow",
                borderRadius:"10px",
                marginRight: "8px",
              }}
            ></Box>
            <Typography color="text.secondary" variant="body1" fontWeight="bold">New services added</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                width: 10,
                height: 10,
                backgroundColor: "red",
                borderRadius:"10px",
                marginRight: "8px",
              }}
            ></Box>
            <Typography color="text.secondary" variant="body1" fontWeight="bold">Services removed</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceOfferingsChart;
