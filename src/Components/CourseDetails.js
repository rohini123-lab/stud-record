// import { useState, useEffect } from 'react';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import courseModel from './courseModel';
// import Grid from '@mui/material/Grid';
// import { useNavigate, useParams } from 'react-router-dom';
// function CourseDetails() {
//   const [courseDetails, setCourseDetails] = useState();

//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const course = courseModel.filter((c) => {
//       return c.id == id;
//     });
//     console.log('courseModel', courseModel)
//     console.log('course', course)
//     setCourseDetails(course);

//     }, [id]);

 
// if(courseDetails && courseDetails.length >=1){
//   return (
//     <div  >
//       <Grid container spacing={2}  sx={{ mb: 4, mt:4 }}>
//         <Grid item >
//           <Card sx={{ backgroundColor: '#e1f5fe' }}>
//             <CardContent>
//               <Typography gutterBottom variant="h4" component="h4">
//                 {courseDetails[0].name}
//               </Typography>
              
//               <Typography>Instructor: {courseDetails[0].instructor}</Typography>
//               <Typography>Description: {courseDetails[0].description}</Typography>
//               <Typography>Enrollment Status: {courseDetails[0].enrollmentStatus}</Typography>
//               <Typography>courseDetails Duration: {courseDetails[0].duration}</Typography>
//               <Typography>Schedule: {courseDetails[0].schedule}</Typography>
//               <Typography>Location: {courseDetails[0].location}</Typography>
//               <Typography>prerequisites: {courseDetails[0].prerequisites.map((p)=>(
//                 <li>{p}</li>
//               ))}</Typography>
//               <Typography>syllabus: {courseDetails[0].syllabus.map((p)=>(
//                <ul>
//                <li>{p.week}</li>
//                <li>{p.topic}</li>
//                <li>{p.content}</li>
//                </ul>

//               ))}</Typography>

//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }else{
//   return <div>Loading</div>
// }
  
// }

// export default CourseDetails;
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CourseDetails() {
  const [courseDetails, setCourseDetails] = useState();
  const navigate = useNavigate();
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
                  {courseDetails[0].prerequisites.map((p, index) => (
                    <li key={index}>{p}</li>
                  ))}
                </Typography>
                <Typography>
                  Syllabus:{' '}
                  {courseDetails[0].syllabus.map((p, index) => (
                    <ul key={index}>
                      <li>{p.week}</li>
                      <li>{p.topic}</li>
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

