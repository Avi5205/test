import React, { useState } from "react";

export default function Converter() {
  const [km, setKm] = useState("");
  const [miles, setMiles] = useState(null);

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Km → Miles Converter</h2>
      <input
        type="number"
        placeholder="Enter kilometers"
        value={km}
        onChange={(e) => setKm(e.target.value)}
        className="border p-2 w-full rounded"
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setMiles((Number(km) * 0.621371).toFixed(2))}
      >
        Convert
      </button>

      {miles !== null && (
        <div className="p-4 bg-green-100 rounded">
          {km} km = {miles} miles
        </div>
      )}
    </div>
  );
}
