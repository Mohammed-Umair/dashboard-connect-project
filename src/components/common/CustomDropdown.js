import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const CustomDropdown = ({
  options,
  defaultValue,
  onChange,
  width = "200px",
  buttonHeight = "40px",
}) => {
  return (
    <FormControl
      sx={{
        minWidth: width,
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        sx={{
          height: buttonHeight, 
          padding: "0px 6px",
          display: "flex",
          alignItems: "center",
          fontSize: "14px",
          fontWeight: "500",
          color: "#5e5ce6",
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            padding: "8px 2px",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: "250px", 
            },
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            value={option.value}
            sx={{ height: buttonHeight }}
          >
            {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;
