import { ChartData } from "chart.js";

export type IStock = {
    name?: string;
    company?: string;
    variation: number;
  };
  
  export type ICurrency = {
    name: string;
    buy: number;
    variation: number;
  };
  
  export type IFinanceData = {
    stocks: Record<string, IStock>;
    currencies: Record<string, ICurrency>;
  };

  export interface IAuthCard {
    title: string;
    children: React.ReactNode;
  }

  export interface IChart {
    data: unknown;
    name: string;
  }

  export interface IChartProps {
    data: ChartData<"line">;
    name?: string;
  }

  interface User {
    email: string;
  }
  
  export interface AuthStore {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
  }

  export interface IHeaderProps {
    showLogout?: boolean;
    title?: string;
  }

  export interface StockOrCurrency {
    name?: string;
    company?: string;
    buy?: number;
    variation?: number;
  }

  export interface HistoryEntry {
    time: string;
    value: number;
  }
  