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
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }]
        })
      })

      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || 'Sin respuesta'
      setResponse(reply)
    } catch (error) {
      setResponse('Error al comunicarse con la API')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Mentor IA - ChatGPT</h2>
      <textarea
        className="w-full border rounded p-2 mb-4"
        rows={4}
        placeholder="Escribe tu pregunta aquí..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Generando...' : 'Generar'}
      </button>
      {response && (
        <div className="mt-4 border rounded p-3 bg-gray-50">
          <strong>Respuesta:</strong>
          <p className="whitespace-pre-wrap mt-2">{response}</p>
        </div>
      )}
    </div>
  )
}

export default ChatGPTBox