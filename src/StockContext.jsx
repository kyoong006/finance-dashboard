import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);

  const addStock = (symbol, quantity, purchasePrice) => {
    setStocks((prevStocks) => [
      ...prevStocks,
      {
        symbol,
        quantity: parseFloat(quantity),
        purchasePrice: parseFloat(purchasePrice),
        currentPrice: null,
        profitLoss: null,
      },
    ]);
  };

  const fetchStockPrices = useCallback(async () => {
    const updatedStocks = await Promise.all(
      stocks.map(async (stock) => {
        try {
          const response = await axios.get(
            "https://www.alphavantage.co/query",
            {
              params: {
                function: "GLOBAL_QUOTE",
                symbol: stock.symbol,
                apikey: "OA2VI26CYBUF1B1K1K",
              },
            }
          );

          console.log(response.data);

          const currentPrice = parseFloat(
            response.data["Global Quote"]["05. price"]
          );
          const profitLoss =
            (currentPrice - stock.purchasePrice) * stock.quantity;

          return { ...stock, currentPrice, profitLoss };
        } catch (error) {
          console.error("Error fetching stock data:", error);
          return stock;
        }
      })
    );
    setStocks(updatedStocks);
  }, [stocks]);

  return (
    <StockContext.Provider value={{ stocks, addStock, fetchStockPrices }}>
      {children}
    </StockContext.Provider>
  );
};
