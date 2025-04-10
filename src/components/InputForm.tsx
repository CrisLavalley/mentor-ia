
import { useState } from "react";

export default function InputForm({ onSubmit }: { onSubmit: (tema: string, nivel: string) => void }) {
  const [tema, setTema] = useState("");
  const [nivel, setNivel] = useState("");

  return (
    <div className="p-4 rounded-xl bg-white shadow-xl space-y-4">
      <input
        className="w-full border p-2 rounded"
        placeholder="Tema (Ej. Revolución Francesa)"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
      />
      <select
        className="w-full border p-2 rounded"
        value={nivel}
        onChange={(e) => setNivel(e.target.value)}
      >
        <option value="">Selecciona nivel educativo</option>
        <option value="primaria">Primaria</option>
        <option value="secundaria">Secundaria</option>
        <option value="universidad">Universidad</option>
      </select>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => onSubmit(tema, nivel)}
      >
        Generar contenido IA
      </button>
    </div>
  );
}
