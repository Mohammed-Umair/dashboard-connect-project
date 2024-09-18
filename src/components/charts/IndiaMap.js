import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

const IndiaMap = () => {
  return (
    <Paper
        elevation={1}
        sx={{
          padding: "20px",
          borderRadius: "16px",
         
          border: "1px solid lightgray",
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Attributs as per location,year ofexperience , specialization
        </Typography>
      <Box sx={{ textAlign: 'center' }}>
  
        <img
          src="./Map.svg" 
          alt="India Map"
          style={{ width: '100%', height: '295px', borderRadius: '16px',marginTop:2 }}
        />
      </Box>
    </Paper>
  );
};

export default IndiaMap;
