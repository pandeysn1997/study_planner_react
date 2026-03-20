import React from "react";
import { Container, Typography } from "@mui/material";
import Charts from "../components/Charts";
 
export default function Dashboard() {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Dashboard
      </Typography>
      <Charts />
    </Container>
  );
}