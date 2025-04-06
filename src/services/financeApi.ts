// src/services/financeApi.js
export async function fetchFinanceData() {
    const res = await fetch("https://franq-test-backend.onrender.com/api/finance");
    const json = await res.json();
    return json.results;
  }
  