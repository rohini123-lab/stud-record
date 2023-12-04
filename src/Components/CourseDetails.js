import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CourseDetails() {
  const [courseDetails, setCourseDetails] = useState();
  const { id } = useParams();
  const { courses, status, error } = useSelector((state) => state.courses);

  useEffect(() => {
    // Fetch data from the provided API endpoint
    const course = courses.filter((c) => c.id == id);
    setCourseDetails(course);


  }, [id]);

  return (
    <div>
      {courseDetails && courseDetails.length >= 1 && (
        <Grid container spacing={2} sx={{ mb: 4, mt: 4 }}>
          <Grid item>
            <Card sx={{ backgroundColor: '#e1f5fe' }}>
              <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                  {courseDetails[0].name}
                </Typography>

                <Typography>Instructor: {courseDetails[0].instructor}</Typography>
                <Typography>Description: {courseDetails[0].description}</Typography>
                <Typography>Enrollment Status: {courseDetails[0].enrollmentStatus}</Typography>
                <Typography>Duration: {courseDetails[0].duration}</Typography>
                <Typography>Schedule: {courseDetails[0].schedule}</Typography>
                <Typography>Location: {courseDetails[0].location}</Typography>
                <Typography>
                  Prerequisites:{' '}
                 <ul style={{listStyle:'square'}}>{courseDetails[0].prerequisites.map((p, index) => (
                    <li key={index}>{p}</li>
                  ))}
                  </ul> 
                </Typography>
                <Typography>
                  Syllabus:{' '}
                  {courseDetails[0].syllabus.map((p, index) => (
                    <ul key={index} style={{listStyle: 'none'}}>
                      <li>Week: {p.week}</li>
                      <li>Topic: {p.topic}</li>
                      <li>{p.content}</li>
                    </ul>
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default CourseDetails;

