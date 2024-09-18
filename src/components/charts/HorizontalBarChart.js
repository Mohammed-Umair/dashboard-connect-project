import React, { useState } from "react";
import Chart from "react-apexcharts";

const HorizontalBarChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Dataset 1",
        data: [1000, 800, 900, 850, 600,300,],
      },
      
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true, 
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "80%", 
        },
      },
      colors: ["#ff6384", "#36a2eb", "#9966ff", "#ffce56"], 
      dataLabels: {
        enabled: false, 
      },
      stroke: {
        width: 1,
        colors: ["#fff"], 
      },
      xaxis: {
        // categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        categories: [0, 100, 200, 300, 400, 500],
        min: 0,
        max: 1000,
      },
      yaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
       
      },
      legend: {
        position: "top", 
        horizontalAlign: "center",
      },
      fill: {
        opacity: 1, 
      },
      grid: {
        show: true, 
        strokeDashArray: 4, 
      },
    },
  });

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default HorizontalBarChart;
