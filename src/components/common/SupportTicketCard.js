import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#FBBC05",
    ...theme.applyStyles("dark", {
      backgroundColor: "#FBBC05",
    }),
  },
}));
const SupportTicketCard = ({ ticket }) => {
  return (
    <Box>
    
      <Card sx={{ borderRadius: 3, minHeight: "150px", mt: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar alt={ticket.name} src={ticket.avatar} />
            <Box ml={2} flexGrow={1}>
              <Typography variant="body1" color="darkblue">
                {ticket.id}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "10px",
                  color: "darkblue",
                }}
              >
                {ticket.name}
              </Typography>
            </Box>
            <Box display="flex" gap={1}>
              {ticket.tags?.map((tag, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: tag.bgColor,
                    borderColor: tag.borderColor,
                    color: "black",
                    borderRadius: "30px",
                    fontSize: "10px",
                    padding: "0px 10px",
                  }}
                >
                  {tag.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          <Box mt={2}>
            {ticket.sectionStatus === "In progress" ? (
              <>
                <Typography variant="caption" color="darkblue">
                  Status Pending
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                  }}
                >
                  <BorderLinearProgress variant="determinate" value={50} />
                </Box>
              </>
            ) : (
              <>
                <Typography variant="caption" color="darkblue">
                  {ticket.issue}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: ticket.statusBgColor,
                    borderColor: ticket.statusBorderColor,
                    color: ticket.statusTextColor,
                    borderRadius: "30px",
                    fontSize: "10px",
                    mt: "10px",
                  }}
                >
                  Status: {ticket.status}
                </Button>
              </>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SupportTicketCard;
