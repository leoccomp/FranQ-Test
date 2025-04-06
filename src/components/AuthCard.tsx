import { IAuthCard } from "../types";

export default function AuthCard({ title, children }: IAuthCard) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-#fdffff w-full h-full">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          {children}
        </div>
      </div>
    );
  }