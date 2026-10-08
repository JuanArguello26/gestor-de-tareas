import { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Filters from './components/Filters'

const FILTERS = {
  all: () => true,
  pending: (task) => !task.done,
  done: (task) => task.done,
}

export default function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), text, done: false }])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.done))
  }

  const visibleTasks = tasks.filter(FILTERS[filter])
  const pendingCount = tasks.filter(FILTERS.pending).length
  const hasCompleted = tasks.some(FILTERS.done)

  return (
    <main className="app">
      <h1>Mis tareas</h1>
      <TaskForm onAdd={addTask} />
      <Filters current={filter} onChange={setFilter} />
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
      <footer>
        <span>
          {pendingCount} {pendingCount === 1 ? 'pendiente' : 'pendientes'}
        </span>
        <button className="clear" onClick={clearCompleted} disabled={!hasCompleted}>
          Limpiar completadas
        </button>
      </footer>
    </main>
  )
}
