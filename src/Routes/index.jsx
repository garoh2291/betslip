import React from "react";
import { Route, Routes } from "react-router-dom";
import { BuilderPage } from "../Pages/BuilderPage";
import { StatisticsPage } from "../Pages/Statistic";

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<BuilderPage />} />
      <Route path="/statistic" element={<StatisticsPage />} />
    </Routes>
  );
};
