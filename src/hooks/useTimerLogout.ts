// src/hooks/useTimerLogout.ts
import { useEffect } from "react";
import { NavigateFunction } from "react-router-dom";

export default function useTimerLogout(
  logout: () => void,
  navigate: NavigateFunction,
  timeoutMs: number = 10 * 60 * 1000
): void {
  useEffect(() => {
    const timeout = setTimeout(() => {
      logout();
      navigate("/");
    }, timeoutMs);

    return () => clearTimeout(timeout);
  }, [logout, navigate, timeoutMs]);
}
