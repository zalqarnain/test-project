import React from "react";
import useSWR from "swr";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
  Stack,
} from "@mui/material";


function Product(props) {
  
    const { data, error } = useSWR("/api/ProductData", (apiURL) =>
      fetch(apiURL).then((res) => res.json())
    );
    console.log(data, "searchbar");
    if (!data) return <div>loading...</div>;
    return (
      <>
        <Box
          sx={{
            width: {
              // border: "solid black 2px",
              lg: 900,
              md: 700,
              sm: 480,
              xs: 320,
            },
          }}
        >
            
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: {
                sm: "normal",
                xs: "center",
              },
            }}
          >
            {data
  
              .map((eachData, index) => (
                <Grid sm={4} key={index} item>
                  <Link href={"/product/" + eachData.id} key={eachData.id}>
                    <Card
                      sx={{
                        width: { lg: "260px", md: "200px", sm: "150px" },
                        height: {
                          lg: "255px",
                          md: "205px",
                          sm: "150px",
                        },
                        display: {
                          sm: "flex",
                          xs: "none",
                        },
                        backgroundColor: "#F7F7F7",
                        borderRadius: "2px",
                        boxShadow: "none",
                        position: "relative",
                        bottom: "80px",
                      }}
                    >
                      <CardContent>
                        <Stack direction={{ sm: "column" }}>

                          <Stack direction={{ xs: "column" }}>
                              <Typography
                                style={{
                                  wordWrap: "break-word",
                                  whiteSpace: "normal",
                                  //  border: "black solid 2px",
  
                                  fontWeight: 550,
                                }}
                                sx={{
                                  fontSize: { lg: 15, md: 13, sm: 10, xs: 8 },
                                  m: {
                                    md: "10px 0px 0px 0px",
                                    sm: "10px 0px 0px -5px",
                                    xs: "-11px 0px 5px 5px",
                                  },
                                  lineHeight: {
                                    lg: "15px",
                                    md: "12px",
                                    sm: "12px",
                                  },
                                  width: {
                                    xs: 100,
  
                                    lg: 230,
                                    sm: 150,
                                  },
  
                                  height: {
                                    xs: 50,
                                    lg: 60,
                                    sm: 40,
                                  },
                                }}
                              >
                                {eachData.date}
                              </Typography>
                              <Typography
                                style={{
                                  wordWrap: "break-word",
                                  whiteSpace: "normal",
  
                                  fontWeight: 550,
                                  opacity: 0.9,
                                }}
                                sx={{
                                  fontSize: { lg: 13, md: 11, sm: 9, xs: 7 },
                                  m: {
                                    md: "20px 0px 0px 0px",
                                    lg: "0px 0px 0px -3px",
                                    sm: "3px 0px 0px -5px",
                                    xs: "0px 4px 5px 8px",
                                  },
                                  position: "relative",
                                  bottom: {
                                    lg: 6,
                                    md: 0,
                                    sm: 5,
                                  },
                                }}
                              >
                                {eachData.title}
                              </Typography>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}            
          </Grid>
        </Box>
      </>
    );

}

export default Product;
