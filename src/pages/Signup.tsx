import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import { useAuthStore } from "../store/authStore";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email });
    navigate("/dashboard");
  };

  return (
    <AuthCard title="Cadastro">
      <form className="flex flex-col gap-4" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Cadastrar
        </button>
      </form>
      <p className="mt-4">
        Já tem uma conta?{" "}
        <a href="/" className="text-blue-500">
          Faça login
        </a>
      </p>
    </AuthCard>
  );
}
