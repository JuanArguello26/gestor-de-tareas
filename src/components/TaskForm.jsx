import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué necesitas hacer?"
        aria-label="Nueva tarea"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}
