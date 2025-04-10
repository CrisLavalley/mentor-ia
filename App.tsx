
import { useState } from "react";
import InputForm from "./components/InputForm";
import Results from "./components/Results";

export default function App() {
  const [content, setContent] = useState("");

  const handleGenerate = async (tema: string, nivel: string) => {
    const prompt = `
Quiero que actúes como tutor académico. Dado el siguiente tema: "${tema}" y el nivel educativo: "${nivel}", por favor:

1. Genera un resumen claro y conciso del tema.
2. Sugiéreme una ruta de estudio de 3 pasos para entenderlo bien.
3. Crea 3 preguntas de opción múltiple para autoevaluarme. Marca la respuesta correcta.

Responde en Markdown estructurado con títulos claros para cada sección.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer TU_API_KEY`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    setContent(data.choices[0].message.content);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Mentor IA Académico</h1>
      <InputForm onSubmit={handleGenerate} />
      <Results content={content} />
    </div>
  );
}
