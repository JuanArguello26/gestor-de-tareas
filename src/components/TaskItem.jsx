export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.done ? 'task done' : 'task'}>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>
      <button
        type="button"
        className="delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Eliminar "${task.text}"`}
      >
        ✕
      </button>
    </li>
  )
}
