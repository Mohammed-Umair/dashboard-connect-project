import React from "react";
import { Line } from "react-chartjs-2";
import { Paper, Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Service Provider",
        data: [3000, 2500, 2800, 3200, 4000, 3500, 3800],
        borderColor: "#F858D5",
        backgroundColor: "#F858D5",
        tension: 0.1,
      },
      {
        label: "Service Provider Retention Rate",
        data: [4000, 3000, 3400, 3600, 4500, 4200, 4700],
        borderColor: "#5DBDF3",
        backgroundColor: "#5DBDF3",
        tension: 0.1,
      },
      {
        label: "New Service Provider",
        data: [2000, 2200, 2500, 3000, 3500, 2700, 3000],
        borderColor: "#00D2D2",
        backgroundColor: "#00D2D2",
        tension: 0.1,
      },
      {
        label: "Service Completion Rate",
        data: [1500, 1800, 2200, 2800, 3300, 3100, 3700],
        borderColor: "#FF7845",
        backgroundColor: "#FF7845",
        tension: 0.1,
      },
      {
        label: "Total Service Provider",
        data: [2800, 3000, 3200, 3300, 3900, 3500, 4000],
        borderColor: "#B460F8",
        backgroundColor: "#B460F8",
        tension: 0.1,
      },
      {
        label: "Average Rating",
        data: [2500, 2700, 2900, 3200, 3800, 3700, 4100],
        borderColor: "#FFC10D",
        backgroundColor: "#FFC10D",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          boxWidth: 30, 
        },
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
        min: 1000,
        max: 5000,
      },
    },
  };

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "16px",
        backgroundColor: "#F0F4FF",
        width: "100%", 
        maxWidth: "100%", 
        overflow: "hidden", 
        margin: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "20px 20px 20px 10px",
          borderRadius: "16px",
          width: "100%", 
        }}
      >
        <Line data={data} options={options} />
      </Box>
    </Paper>
  );
};

export default LineChart;
