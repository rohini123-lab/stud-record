// import React, { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Typography } from "@mui/material";
import { fetchStudent,updateProgress } from "../Store/studentSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const { student, status, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudent());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

console.log(student)
const handleUpdateProgressClick = (studentId, courseId, newProgress) => {
  // Dispatch the updateCourseProgress action when the button is clicked
  dispatch(updateProgress({ studentId, courseId, newProgress }));
};
  return (
    <div>
      <Typography gutterBottom variant="h3" component="h3" sx={{ mt: 5, mb: 4 }}>
        Students Dashboard
      </Typography>
      {student.students && student.students.map((student) => (
       <Card key={student.id}  sx={{ mt: 2, mb: 2, background:'#87CEEB' }}>
       <CardContent>
       <div >
            <Typography variant="h4">{student.name}</Typography>
            {student.enrolledCourses.map((p) => (
              <div key={p.id}>
                <Typography>courseName: {p.courseName}</Typography>
                <Typography>dueDate: {p.dueDate}</Typography>
                <Typography>progress :  {p.progress==100 && (<strong>{p.progress} %COMPLETED </strong>)||(<span>{p.progress}% Inprogress</span>)}</Typography>             
                <div>
                <Button variant="outlined" onClick={() => handleUpdateProgressClick(student.id, p.courseId, 100)}>
              Mark as Completed
              </Button>
                </div>
              </div>
            ))}
          </div>
          </CardContent>
       </Card>
      ))}
    </div>
  );
}

export default Dashboard;
