import React from "react";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

const StatCard = ({
  title,
  value,
  icon,
  trend,
  trendPercentage,
  trendColor,
  additionalInfo,
  icon2,
}) => {
  return (
    <Card sx={{ borderRadius: 3, minHeight: "150px" }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 1 }}>
          <Box
            sx={{
              backgroundColor: "#f5f5fc",
              height: "50px",
              width: "50px",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="body1" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {value}
            </Typography>
          </Box>
        </Box>

        {trend && (
          <>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <Box
              sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 1 }}
            >
              {icon2}
              <Box>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ color: trendColor }}>{trendPercentage}</span>{" "}
                  more from last week
                </Typography>
              </Box>
            </Box>
          </>
        )}

        {additionalInfo && <Divider sx={{ marginTop: 2, marginBottom: 2 }} />}
        {additionalInfo}
      </CardContent>
    </Card>
  );
};

export default StatCard;
