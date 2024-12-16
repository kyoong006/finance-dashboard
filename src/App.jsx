import React from "react";
import { StockProvider } from "./StockContext";
import StockForm from "./StockForm";
import StockList from "./StockList";
import "./App.css";
import bullImage from "./assets/Bull Sitting.jpg";

const App = () => {
  return (
    <StockProvider>
      <div className="app">
        <img src={bullImage} alt="Bull" className="dashboard-image" />
        <h1>Finance Dashboard</h1>
        <div className="stock-form-container">
          <StockForm />
        </div>
        <div className="stock-list-container">
          <h3>Stock List</h3>
          <StockList />
        </div>
      </div>
    </StockProvider>
  );
};

export default App;
