import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { ReactNode } from "react";

export default function PublicRoute({ children }: { children: ReactNode }) {
  const { user } = useAuthStore();

  return !user ? children : <Navigate to="/dashboard" />;
}