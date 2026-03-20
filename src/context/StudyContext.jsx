import React, { createContext, useState } from "react";
 
// eslint-disable-next-line react-refresh/only-export-components
export const StudyContext = createContext();
 
export const StudyProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);
 
  const addSession = (session) => {
    setSessions([...sessions, { ...session, completed: false }]);
  };
 
  const toggleComplete = (index) => {
    const updated = [...sessions];
    updated[index].completed = !updated[index].completed;
    setSessions(updated);
  };
 
  const deleteSession = (index) => {
    setSessions(sessions.filter((_, i) => i !== index));
  };
 
  return (
    <StudyContext.Provider
      value={{ sessions, addSession, toggleComplete, deleteSession }}
    >
      {children}
    </StudyContext.Provider>
  );
};