import React, { useContext } from "react";
import { StudyContext } from "../context/StudyContext";
import {
  List, ListItem, ListItemText, Checkbox, IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
 
export default function SessionList() {
  const { sessions, toggleComplete, deleteSession } = useContext(StudyContext);
 
  return (
    <List>
      {sessions.map((s, i) => (
        <ListItem key={i}>
          <Checkbox
            checked={s.completed}
            onChange={() => toggleComplete(i)}
          />
          <ListItemText
            primary={`${s.subject} - ${s.topic}`}
            secondary={`${s.date} | ${s.hours} hrs`}
          />
          <IconButton onClick={() => deleteSession(i)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}