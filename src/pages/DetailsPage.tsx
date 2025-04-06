import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import Chart from "../components/Chart";
import { fetchFinanceData } from "../services/financeApi";
import { HistoryEntry, IFinanceData } from "../types";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function DetailsPage() {
  const { key } = useParams<{ key: string }>();
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: IFinanceData = await fetchFinanceData();

        const item = key ? result.stocks[key] || result.currencies[key] : undefined;
        const value = item?.variation;

        if (value !== undefined) {
          setHistory((prev) => [...prev.slice(-19), {
            time: new Date().toLocaleTimeString(),
            value,
          }]);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
    intervalRef.current = setInterval(fetchData, 60000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [key]);

  const chartData = {
    labels: history.map((entry) => entry.time),
    datasets: [
      {
        label: `% de variação - ${key}`,
        data: history.map((entry) => entry.value),
        borderColor: "#2563eb",
        backgroundColor: "#93c5fd",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-#fdffff p-8">
      <header className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Voltar
        </button>
        <h1 className="text-sm font-semibold">Detalhes do Ativo</h1>
      </header>

      {history.length > 0 ? (
        <Chart data={chartData} name={`Histórico de ${key}`} />
      ) : (
        <p>Carregando histórico...</p>
      )}
    </div>
  );
}

export default DetailsPage;
