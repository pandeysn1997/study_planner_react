import React, { useState, useContext } from "react";
import { StudyContext } from "../context/StudyContext";
import { TextField, Button, Box } from "@mui/material";
 
export default function SessionForm() {
  const { addSession } = useContext(StudyContext);
 
  const [session, setSession] = useState({
    subject: "",
    topic: "",
    date: "",
    hours: ""
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    addSession(session);
    setSession({ subject: "", topic: "", date: "", hours: "" });
  };
 
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField label="Subject" fullWidth margin="normal"
        value={session.subject}
        onChange={(e) => setSession({...session, subject: e.target.value})}
      />
      <TextField label="Topic" fullWidth margin="normal"
        value={session.topic}
        onChange={(e) => setSession({...session, topic: e.target.value})}
      />
      <TextField type="date" fullWidth margin="normal"
        value={session.date}
        onChange={(e) => setSession({...session, date: e.target.value})}
      />
      <TextField label="Hours" type="number" fullWidth margin="normal"
        value={session.hours}
        onChange={(e) => setSession({...session, hours: e.target.value})}
      />
      <Button variant="contained" type="submit">Add Session</Button>
    </Box>
  );
}