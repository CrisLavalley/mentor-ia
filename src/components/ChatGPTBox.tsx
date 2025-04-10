import { useState } from 'react'

const ChatGPTBox = () => {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    setLoading(true)
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }],
        }),
      })

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || 'Sin respuesta'
      setResponse(reply)
    } catch (err) {
      setResponse('Error al comunicarse con la API')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 border rounded-xl shadow max-w-lg mx-auto mt-4 bg-white">
      <h2 className="text-xl font-bold mb-2">Asistente IA</h2>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows="4"
        placeholder="Escribe tu pregunta..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Enviar'}
      </button>
      {response && (
        <div className="mt-4 p-2 border rounded bg-gray-100 whitespace-pre-line">
          <strong>Respuesta:</strong> {response}
        </div>
      )}
    </div>
  )
}

export default ChatGPTBox