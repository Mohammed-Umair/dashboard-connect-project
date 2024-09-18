import React, { useState } from 'react';
import {  TextField, Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const DateRangeDropdown = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs()); 

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #e0e0e0',
          borderRadius: '10px',
          padding: '8px 12px',
          backgroundColor: '#f6f8fc',
        }}
      >
        <CalendarTodayIcon fontSize="small" style={{ marginRight: '8px', color: '#333' }} />
        <DatePicker
          views={['year']}
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)} 
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                '& .MuiInputBase-input': {
                  padding: 0,
                  fontSize: '16px',
                  color: '#333',
                },
              }}
            />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DateRangeDropdown;
