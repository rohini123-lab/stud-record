import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../Store/courseSlice';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const CourseList = ({ course }) => {
 // const [courseList, setCourseList] = useState(courseModel);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }



  // const filteredCourses = courses.filter((course) =>
  //   course.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );


  return (
    <div  maxWidth="md"  >
    <Typography gutterBottom variant="h3" component="h3" sx={{ mt:5,mb: 4 }}>
    List of the Courses
  </Typography>
      <TextField
        label="Search Courses"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 4 }}
      />

     

      {courses.map((course) => (
        <Card key={course.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h4">{course.name}</Typography>
            <p>Instructor: {course.instructor}</p>
            <Button variant='outlined' onClick={() => navigate(`/course/${course.id}`)}  >View Details</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CourseList;
