import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";
import Paper from "./components/Paper/paper";

const App = () => {
  return (
    <div className="min-w-72 h-screen bg-gradient-to-b from-principal to-terciary">
      <Header />
      <Paper>
        <Outlet />
      </Paper>
    </div>
  );
};

export default App;
