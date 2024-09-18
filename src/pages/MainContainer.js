import React from "react";
import {
  Grid,
  Box,
  Avatar,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StatCard from "../components/common/StatCard";
import PersonIcon from "@mui/icons-material/Person";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PieChartIcon from "@mui/icons-material/PieChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import Face2Icon from "@mui/icons-material/Face2";
import SupportTicketCard from "../components/common/SupportTicketCard";
import CustomButton from "../components/common/CustomButton";
import { tickets } from "../utils/ticketsData";
import { TrendingUp } from "@mui/icons-material";
import LineChart from "../components/charts/LineChart";
import IndiaMap from "../components/charts/IndiaMap";
import PieChart from "../components/charts/PieChart";
import TopServices from "../components/TopServices";
import ServiceOfferingsChart from "../components/charts/ServiceOffringChart";
import MutipleChart from "../components/charts/PerformanceMetricsChart";

const MainContainer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const cardData = [
    {
      id: "1",
      icon1: <BarChartIcon sx={{ color: "hotpink" }} />,
      icon2: <TrendingUp sx={{ color: "#FBBC05", fontSize: "58px" }} />,
      title: "Total Service Provider",
      value: "Rs.xxx.xx",
      status: "+5% ",
      diff: false,
      trendColor: "#FBBC05",
      trend: "true",
    },
    {
      id: "2",
      icon1: <PersonIcon sx={{ color: "cyan" }} />,
      icon2: <TrendingUp sx={{ color: "red", fontSize: "58px" }} />,
      title: "New Service Provider",
      value: "xxxx",
      status: "+10% ",
      diff: false,
      trendColor: "red",
      trend: "true",
    },
    {
      id: "3",
      icon1: <ShoppingCartIcon sx={{ color: "hotpink" }} />,
      icon2: <TrendingUp sx={{ color: "cyan", fontSize: "58px" }} />,
      title: "Active Service Provider",
      value: "xxxx",
      status: "+10% ",
      diff: false,
      trendColor: "cyan",
      trend: "true",
    },
    {
      id: "4",
      icon1: "",
      icon2: "",
      title: "",
      value: "",
      status: "",
      diff: true,
      trendColor: "",
    },
    {
      id: "5",
      icon1: <PieChartIcon sx={{ color: "salmon" }} />,
      icon2: <PieChartIcon sx={{ color: "salmon", fontSize: "58px" }} />,
      title: "Service Completion Rate",
      value: "",
      status: "85% completed ",
      diff: false,
      trendColor: "red",
      trend: "true",
    },
    {
      id: "6",
      icon1: <VolunteerActivismIcon sx={{ color: "blue" }} />,
      icon2: <TrendingUp sx={{ color: "cyan", fontSize: "58px" }} />,
      title: "Service Provider Retention Rate",
      value: "",
      status: "+100% completed",
      diff: false,
      trendColor: "cyan",
      trend: "true",
    },
  ];

  const legendLabels = [
    { label: "Healthcare Sector", color: "#FF6E6E" },
    { label: "Construction Sector", color: "#357EFF" },
    { label: "Home Services Sector", color: "#00D2D2" },
    { label: "Petcare Sector", color: "#F858D5" },
    { label: "Entertainment Sector", color: "#7B61FF" },
    { label: "Event Sector", color: "#FFD700" },
  ];

  return (
    <Grid container spacing={3} sx={{ padding: { xs: "10px", sm: "20px" } }}>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <Box>
          <Grid container spacing={3}>
            {cardData.map((card, index) =>
              card.diff ? (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  <StatCard
                    title="Average Rating"
                    value={
                      <>
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            sx={{
                              color: "#FBBC05",
                              fontSize: { xs: "16px", sm: "20px" },
                            }}
                          />
                        ))}
                      </>
                    }
                    icon={<StarIcon sx={{ color: "#FBBC05" }} />}
                    additionalInfo={
                      <Box display="flex" alignItems="center" mt={1}>
                        <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                        <Box ml={2}>
                          <Typography variant="body2">Abhinav</Typography>
                          <Box display="flex" alignItems="center" gap="5px">
                            {[...Array(4)].map((_, i) => (
                              <StarIcon
                                key={i}
                                sx={{
                                  color: "#FBBC05",
                                  fontSize: { xs: "8px", sm: "10px" },
                                }}
                              />
                            ))}
                            <Typography variant="body2">4.0</Typography>
                          </Box>
                        </Box>
                        <Box ml={2}>
                          <Typography variant="body2" color="darkblue">
                            View all
                          </Typography>
                          <Typography variant="caption">1 day ago</Typography>
                        </Box>
                      </Box>
                    }
                  />
                </Grid>
              ) : (
                <Grid item xs={12} sm={6} md={4} key={card.id}>
                  <StatCard
                    title={card.title}
                    value={card.value}
                    icon={card.icon1}
                    icon2={card.icon2}
                    trend={card.trend}
                    trendPercentage={card.status}
                    trendDirection="up"
                    trendColor={card.trendColor}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
        <Box sx={{ mt: 3 }}>
          <LineChart />
        </Box>

        <Paper
          elevation={3}
          sx={{
            borderRadius: "16px",
            maxWidth: "100%",
            margin: "auto",
            padding: { xs: 2, sm: 4 },
            mt: 3,
          }}
        >
          <Typography
            variant="h6"
            align="left"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginBottom: { xs: "20px", sm: "30px" },
            }}
          >
            Service Provider Segmentation & Demographics
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <PieChart />
            </Grid>

            <Grid item xs={12} md={6}>
              <IndiaMap />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 2 }}>
            {legendLabels.map((item, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: item.color,
                    borderRadius: "10px",
                    mr: 1,
                  }}
                />
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>

        <Box sx={{ mt: 3 }}>
          <TopServices />
        </Box>
        <Box sx={{ mt: 3 }}>
          <ServiceOfferingsChart />
        </Box>
        <Box sx={{ mt: 3 }}>
          <MutipleChart />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={4}
        mt={isSmallScreen ? "450px" : "0px"}
      >
        <Box>
          <Card sx={{ borderRadius: 3, minHeight: "150px" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: 1,
                }}
              >
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
                  <Face2Icon sx={{ color: "darkcyan" }} />
                </Box>
                <Typography variant="h5" fontWeight="bold">
                  Support & Compliance
                </Typography>
              </Box>

              <Box>
                {tickets.map((section) => (
                  <Box key={section.id}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                        mt: 3,
                      }}
                    >
                      <Typography variant="body1" color="text.secondary">
                        {section.title}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          color: "darkblue",
                          textTransform: "capitalize",
                          borderRadius: "30px",
                          boxShadow: "none",
                          backgroundColor: "#E5E5E5",
                          "&:hover": {
                            backgroundColor: "#E5E5E5",
                            boxShadow: "none",
                          },
                        }}
                      >
                        View all
                      </Button>
                    </Box>
                    {section.data ? (
                      section.data.map((ticket) => (
                        <SupportTicketCard key={ticket.id} ticket={ticket} />
                      ))
                    ) : (
                      <SupportTicketCard key={section.id} ticket={section} />
                    )}
                  </Box>
                ))}
                <Box mt={2}>
                  <CustomButton
                    label="Raise a Ticket"
                    icon={""}
                    onClick={() => console.log("Create Order clicked")}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainContainer;
