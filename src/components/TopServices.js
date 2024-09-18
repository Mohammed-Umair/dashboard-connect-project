import React from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { topServices } from "../utils/topServices";
const TopServices = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "16px",

        maxWidth: "100%",
        margin: "auto",
        padding: 4,
        mt: 3,
      }}
    >
      <Typography
        variant="h6"
        align="left"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: "30px" }}
      >
        Top Service Provider
      </Typography>
      <Grid container spacing={2}>
        {topServices?.map((service, index) => {
          return (
            <Grid item xs={6} sm={6} md={3} lg={3} key={index}>
              <Card
                sx={{
                  maxWidth: 190,
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="206"
                    image={service.img}
                    sx={{
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  />
                  <Typography
                    gutterBottom
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      mt: "10px",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <AvatarGroup max={3} sx={{ width: 24, height: 24 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                          alt="Cindy Baker"
                          src="/static/images/avatar/3.jpg"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                          alt="Agnes Walker"
                          src="/static/images/avatar/4.jpg"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Avatar
                          alt="Trevor Henderson"
                          src="/static/images/avatar/5.jpg"
                          sx={{ width: 24, height: 24 }}
                        />
                      </AvatarGroup>
                    </Box>
                    <Button
                      key={index}
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        backgroundColor: " #E6F5EB",
                        border: "none",
                        color: "#18CE98",
                        fontSize: "10px",
                        padding: "0px ",
                        borderRadius: "5px",
                      }}
                    >
                      {service.value2}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default TopServices;
