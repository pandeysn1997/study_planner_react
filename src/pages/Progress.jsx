import React, { useContext } from "react";
import { StudyContext } from "../context/StudyContext";
import { Container, Typography } from "@mui/material";
 
export default function Progress() {
  const { sessions } = useContext(StudyContext);
 
  const total = sessions.filter(s => s.completed).length;
 
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Progress
      </Typography>
      <Typography>
        Completed Sessions: {total}
      </Typography>
    </Container>
  );
}