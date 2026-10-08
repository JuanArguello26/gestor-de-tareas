# Gestor de tareas

Aplicación de tareas hecha con React y Vite. Permite agregar, completar y eliminar tareas, filtrarlas por estado y conserva los datos en `localStorage`.

## Uso

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # versión de producción en dist/
npm run lint
```

## Estructura

- `src/App.jsx`: estado principal y operaciones sobre las tareas.
- `src/components/`: `TaskForm`, `TaskList`, `TaskItem` y `Filters`.
- `src/hooks/useLocalStorage.js`: hook que sincroniza el estado con `localStorage`.
