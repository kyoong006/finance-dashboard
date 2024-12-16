import React, { useState, useContext } from "react";
import { StockContext } from "./StockContext";

const StockForm = () => {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const { addStock } = useContext(StockContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbol && quantity > 0 && purchasePrice > 0) {
      addStock(symbol.toUpperCase(), quantity, purchasePrice);
      setSymbol("");
      setQuantity(0);
      setPurchasePrice(0);
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <form className="stock-form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Purchase Price"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
        required
      />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockForm;
