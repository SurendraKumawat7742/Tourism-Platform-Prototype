
import React, { useState } from "react";

export default function TourismHomePage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  function handleSmartTrip(e) {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!from.trim() || !to.trim()) {
      setError("Please fill both Source and Destination.");
      return;
    }
    if (!date) {
      setError("Please choose a travel date.");
      return;
    }
    if (budget && isNaN(Number(budget))) {
      setError("Budget must be a number.");
      return;
    }

    // Very simple "smart" result demonstration — replace with real logic/API calls.
    const suggestions = {
      from,
      to,
      date,
      budget: budget || "Not specified",
      message: `We recommend a ${budget ? "budget" : "flexible"} itinerary from ${from} to ${to} on ${date}.`,
    };

    setResult(suggestions);

    // Reset data after print result
    setFrom("");
    setTo("");
    setDate("");
    setBudget("");
  }

  return (
    <div className=" Hero min-h-screen bg-gray-50 flex items-center justify-center p-5 mt-5 mb-5 text-center">
      <div className="p-5">
        <main>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">Plan Your Trip</h2>
<hr />
          <form onSubmit={handleSmartTrip} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-600 mb-2">From</span>&nbsp;&nbsp;
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="px-3 py-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Source city or airport"
                  style={{borderRadius:"10px"}}
                />
              </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-600 mb-2">To</span>&nbsp;&nbsp;
                <input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Destination city or airport"
                  style={{borderRadius:"10px"}}
                />
              </label>
            </div>
<br></br>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-600 mb-2">Date</span>&nbsp;&nbsp;
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="px-3 py-2 rounded-xl  border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  style={{borderRadius:"10px"}}
                />
              </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <label className="flex flex-col md:col-span-2">
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-block px-3 py-2 rounded-l-xl border-gray-200 bg-gray-50">₹ Budget</span>
                  <input
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. 15000"
                    className="w-full px-3 py-2 rounded-r-xl  border-gray-200 focus:ring-2 focus:ring-blue-300"
                    style={{borderRadius:"10px"}}
                  />
                </div>
              </label>
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>
            )}

            <div className="flex items-center justify-center mb-5">
              <button
                type="submit"
                className="px-3 py-2 hover:shadow-lg transition-all"
                style={{backgroundColor:"#696FC7", border:"2px solid black", borderRadius:"10px", fontSize:"20px"}}
              >
                SMART TRIP
              </button>
            </div>
          </form>

          {/* Result card */}
          {result && (
            <div className="mt-4 p-5 bg-gray-50 rounded-xl border border-black" style={{borderRadius:"10px", backgroundColor:"#FFB4B4"}}>
              <h3 className="text-lg font-bold mb-2">Smart Trip Suggestions</h3>
              <p className="text-sm text-gray-700 mb-2">{result.message}</p>
              <ul className="text-sm text-gray-700 list-disc pl-5">
                <ul>From: <strong>{result.from}</strong></ul>
                <ul>To: <strong>{result.to}</strong></ul>
                <ul>Date: <strong>{result.date}</strong></ul>
                <ul>Budget: <strong>{result.budget}</strong></ul>
              </ul>
            </div>
          )}
        </main>

        <footer className="mt-8 text-center text-xs text-gray-400">© {new Date().getFullYear()} Tourism — made with ♥</footer>
      </div>
    </div>
  );
}
