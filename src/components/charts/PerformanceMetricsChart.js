import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Grid, Typography } from '@mui/material';
import HorizontalBarChart from './HorizontalBarChart';



const PerformanceMetricsChart = () => {
  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        track: {
          background: '#e0e0e0',
          strokeWidth: '97%',
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
          },
        },
      },
    },
    colors: ['#4caf50', '#ff9800', '#ff5722'],
    labels: ['Performance Metrics', 'Feedback Summary', 'Rating Trends'],
  };

  const series = [70, 88, 59];

  return (
    <ReactApexChart options={options} series={series} type="radialBar" height={350} />
  );
};

const ServiceProvidersReportChart = () => {
  const donutOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Petcare', 'Entertainment', 'Event', 'Healthcare', 'Construction', 'Home Services'],
    colors: ['#f48fb1', '#9575cd', '#ffeb3b', '#4db6ac', '#7986cb', '#80cbc4'],
    legend: {
      position: 'right',
      labels: {
        useSeriesColors: true,
      },
    },
  };

  const donutSeries = [30, 5, 20, 15, 20, 10];



  return (
    <>
      <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={350} />
    
      <HorizontalBarChart/>
  
    </>
  );
};

const MutipleChart = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '', height: '100vh' }}>
      <Grid container spacing={3}>
     
        <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: 'white', padding: 3, borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="h6" align="center" sx={{ marginBottom: 3 }}>
              Performance Metrics & Feedback
            </Typography>
            <PerformanceMetricsChart />
            <Box mt={3}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Typography variant="body2">
                    <span style={{ color: '#4caf50' }}>●</span> Performance Metrics
                  </Typography>
                  <Typography variant="h6">6,38,465.14</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    <span style={{ color: '#ff9800' }}>●</span> Feedback Summary
                  </Typography>
                  <Typography variant="h6">41,881.2</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    <span style={{ color: '#ff5722' }}>●</span> Rating Trends
                  </Typography>
                  <Typography variant="h6">4,070,940.6</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

      
        <Grid item xs={12} md={6}>
          <Box sx={{ backgroundColor: 'white', padding: 3, borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="h6" align="center" sx={{ marginBottom: 3 }}>
              Service Providers Report
            </Typography>
            <ServiceProvidersReportChart />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MutipleChart;
