import React, { useContext } from "react";
import { StudyContext } from "../context/StudyContext.jsx";
import {
  PieChart, Pie, LineChart, Line,
  XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";
 
export default function Charts() {
  const { sessions } = useContext(StudyContext);
 
  const pieData = Object.values(
    sessions.reduce((acc, s) => {
      acc[s.subject] = acc[s.subject] || { name: s.subject, value: 0 };
      acc[s.subject].value += Number(s.hours);
      return acc;
    }, {})
  );
 
  return (
    <>
      <PieChart width={400} height={300}>
        <Pie data={pieData} dataKey="value" nameKey="name" />
        <Tooltip />
      </PieChart>
 
      <LineChart width={500} height={300} data={sessions}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="hours" />
      </LineChart>
    </>
  );
}
 