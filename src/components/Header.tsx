// src/components/Header.tsx
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { IHeaderProps } from "../types";

export default function Header({ showLogout = false, title = "" }: IHeaderProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center bg-white p-4 rounded shadow mb-6">
      <div className="text-sm font-semibold">
        {title || `Olá, ${user?.email}`}
      </div>
      {showLogout && (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      )}
    </header>
  );
}
