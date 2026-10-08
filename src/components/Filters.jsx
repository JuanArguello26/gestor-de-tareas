const OPTIONS = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'done', label: 'Completadas' },
]

export default function Filters({ current, onChange }) {
  return (
    <div className="filters" role="group" aria-label="Filtrar tareas">
      {OPTIONS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={current === value ? 'active' : ''}
          aria-pressed={current === value}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
