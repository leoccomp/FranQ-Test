// src/services/financeApi.js
export async function fetchFinanceData() {
    const res = await fetch("http://localhost:3001/api/finance");
    const json = await res.json();
    return json.results;
  }
  