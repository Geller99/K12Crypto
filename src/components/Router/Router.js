import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutK12 from "../../pages/aboutk12/aboutk12";
import { Learn } from "../../pages/learn/learn";
import Home from "../../home";
import Courses from "../../pages/courses/courses";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="learn" element={<Learn />} />
      <Route path="aboutk12" element={<AboutK12 />} />
      <Route path="courses" element={<Courses/>} />
    </Routes>
  );
};

export default Router;
