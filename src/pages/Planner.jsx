import React from "react";
import { Container, Typography } from "@mui/material";
import SessionForm from "../components/SessionForm";
import SessionList from "../components/SessionList";
 
export default function Planner() {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Study Planner
      </Typography>
      <SessionForm />
      <SessionList />
    </Container>
  );
}