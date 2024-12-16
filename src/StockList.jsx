import React, { useContext, useEffect } from "react";
import { StockContext } from "./StockContext";
import axios from "axios";

const StockList = () => {
  const { stocks, fetchStockPrices } = useContext(StockContext);

  useEffect(() => {
    fetchStockPrices();
  }, [fetchStockPrices]);

  return (
    <div className="stock-list">
      {stocks.length === 0 ? (
        <p>No stocks added yet.</p>
      ) : (
        stocks.map((stock) => (
          <div key={stock.symbol}>
            <p>Symbol: {stock.symbol}</p>
            <p>Quantity: {stock.quantity}</p>
            <p>Purchase Price: {stock.purchasePrice}</p>
            <p>Current Price: {stock.currentPrice || "Fetching..."}</p>
            <p
              style={{
                color: stock.profitLoss >= 0 ? "green" : "red",
              }}
            >
              Profit/Loss: {stock.profitLoss || "Calculating..."}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default StockList;
