import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ label, onClick, icon, backgroundColor = '#5e5ce6', hoverColor = '#4b4ad4', textColor = '#fff' }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      startIcon={icon}  
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: '8px',
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: '600',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: hoverColor,
        },
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
