import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "../components/Table";
import ShipmentDetails from "../components/ShipmentDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Table />}></Route>
      <Route index path="/:orderNo" element={<ShipmentDetails />}></Route>
    </Routes>
  );
};

export default AppRoutes;
