// src/pages/Dashboard.tsx
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../store/authStore";
import useTimerLogout from "../hooks/useTimerLogout";
import Header from "../components/Header";
import { fetchFinanceData } from "../services/financeApi";
import { IFinanceData, IStock, ICurrency } from "../types";

function Dashboard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<IFinanceData>({
    queryKey: ["finance"],
    queryFn: fetchFinanceData,
    refetchInterval: 60000,
  });

  // Logout automático após 10 minutos
  useTimerLogout(logout, navigate, 10 * 60 * 1000);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div className="p-8 text-red-500">Erro ao carregar dados.</div>;

  const stocks: [string, IStock][] =
    data?.stocks && typeof data.stocks === "object"
      ? Object.entries(data.stocks)
      : [];

  const currencies: [string, ICurrency][] =
    data?.currencies && typeof data.currencies === "object"
      ? Object.entries(data.currencies)
      : [];

      return (
        <div className="min-h-screen bg-#fdffff p-6">
          <Header showLogout title={`Olá, ${user?.email}`} />
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-bold mb-2">Ações</h2>
              <ul className="bg-white rounded p-4 shadow">
                {stocks.map(([key, stock]) => (
                  <li
                    key={key}
                    className={`flex justify-between py-2 border-b last:border-b-0 ${
                      stock.variation > 0
                        ? "text-green-600"
                        : stock.variation < 0
                        ? "text-red-600"
                        : "text-gray-800"
                    }`}
                  >
                    <Link
                      to={`/details/${key}`}
                      className="flex justify-between w-full"
                    >
                      <span>{stock.name || stock.company}</span>
                      <span>{stock.variation?.toFixed(2)}%</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
    
            <div>
              <h2 className="text-lg font-bold mb-2">Moedas</h2>
              <ul className="bg-white rounded p-4 shadow">
                {currencies.map(([key, currency]) => (
                  <li
                    key={key}
                    className="flex justify-between py-2 border-b last:border-b-0"
                  >
                    <Link
                      to={`/details/${key}`}
                      className="flex justify-between w-full"
                    >
                      <span>{currency.name}</span>
                      <span
                        className={`${
                          currency.variation > 0
                            ? "text-green-600"
                            : currency.variation < 0
                            ? "text-red-600"
                            : "text-gray-800"
                        }`}
                      >
                        R${" "}
                        {new Intl.NumberFormat("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(currency.buy ?? 0)}
                        ({currency.variation?.toFixed(2)}%)
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
    
    export default Dashboard;