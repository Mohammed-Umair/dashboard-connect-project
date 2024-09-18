import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Paper, Box, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: [
      "Healthcare Sector",
      "Construction Sector",
      "Home Services Sector",
      "Petcare Sector",
      "Entertainment Sector",
      "Event Sector",
    ],
    datasets: [
      {
        label: "Service Provider Segments",
        data: [30, 15, 20, 10, 15, 10],
        backgroundColor: [
          "#FF6E6E",
          "#357EFF",
          "#00D2D2",
          "#F858D5",
          "#7B61FF",
          "#FFD700",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw + "%"; // Customize tooltip
          },
        },
      },
    },
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Paper
        elevation={1}
        sx={{
          padding: "20px",
          borderRadius: "16px",

          border: "1px solid lightgray",
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Service Provider across Different Segments
        </Typography>

        <Box sx={{ width: "100%", height: "300px", mt: 3 }}>
          <Pie data={data} options={options} />
        </Box>
      </Paper>
    </Box>
  );
};

export default PieChart;
