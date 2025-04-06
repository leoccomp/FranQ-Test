import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { user } = useAuthStore();

  return user ? children : <Navigate to="/" />;
}