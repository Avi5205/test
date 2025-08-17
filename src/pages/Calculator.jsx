import React, { useState } from "react";
import AdSense from "../components/AdSense";
import { ADSENSE_CONFIG } from "../config/adsense";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE =
    import.meta.env.VITE_API_BASE_URL ||
    "http://localhost:8080" ||
    "https://test1-qkea.onrender.com";

  const calculateWithAPI = async (operation, numA, numB) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/calculator/${operation}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ a: numA, b: numB }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
      } else {
        // Fallback to client-side calculation if API fails
        calculateLocally(operation, numA, numB);
      }
    } catch (error) {
      console.log("API call failed, using local calculation:", error);
      // Fallback to client-side calculation
      calculateLocally(operation, numA, numB);
    } finally {
      setLoading(false);
    }
  };

  const calculateLocally = (operation, numA, numB) => {
    let result;
    switch (operation) {
      case "add":
        result = Number(numA) + Number(numB);
        break;
      case "subtract":
        result = Number(numA) - Number(numB);
        break;
      case "multiply":
        result = Number(numA) * Number(numB);
        break;
      case "divide":
        result = Number(numA) / Number(numB);
        break;
      default:
        result = 0;
    }
    setResult(result);
  };

  const handleCalculate = (operation) => {
    if (!a || !b) return;

    // Try API first, fallback to local calculation
    calculateWithAPI(operation, a, b);
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Basic Calculator</h2>
      <input
        type="number"
        placeholder="Enter number A"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <input
        type="number"
        placeholder="Enter number B"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleCalculate("add")}
          disabled={loading}
        >
          {loading ? "Calculating..." : "Add"}
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleCalculate("subtract")}
          disabled={loading}
        >
          {loading ? "Calculating..." : "Subtract"}
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleCalculate("multiply")}
          disabled={loading}
        >
          {loading ? "Calculating..." : "Multiply"}
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleCalculate("divide")}
          disabled={loading}
        >
          {loading ? "Calculating..." : "Divide"}
        </button>
      </div>

      {result !== null && (
        <div className="p-4 bg-green-100 rounded">
          Result: {result}
          {loading && <span className="ml-2 text-blue-600">(API)</span>}
        </div>
      )}

      {/* Google AdSense Ad */}
      <AdSense adSlot={ADSENSE_CONFIG.AD_SLOTS.CALCULATOR_PAGE} />
    </div>
  );
}
