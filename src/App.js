import React, { Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import Container from "@mui/material/Container";
import CourseList from "./Components/CourseList";

import Dashboard from "./Components/DashBoard";
import CourseDetails from "./Components/CourseDetails";
import Header from "./Components/Header";

const App = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Header></Header>
      <Suspense fallback={<div>Loading</div>}>
       <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/student" element={<Dashboard />} />
          </Routes>
        </Suspense>
    </Container>
  );
};

export default App;
