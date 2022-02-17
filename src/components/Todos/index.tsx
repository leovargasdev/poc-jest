import { FaTrash } from 'react-icons/fa'
import styles from './styles.module.scss'

export type TodoItem = {
  id: number
  text: string
  completed: boolean
}

type TodosProps = {
  todos: TodoItem[]
  changeTodo: (todoId: number) => void
  removeTodo: (todoId: number) => void
}

export const Todos = ({ todos, changeTodo, removeTodo }: TodosProps) => (
  <ul className={styles.container}>
    {todos.map(todo => (
      <li key={todo.id}>
        <div
          className={`${styles.todo} ${todo.completed ? styles.active : ''}`}
          onClick={() => changeTodo(todo.id - 1)}
        >
          <span /> {todo.text}
        </div>
        <button
          className={styles['remove-todo']}
          type="button"
          onClick={() => removeTodo(todo.id)}
        >
          <FaTrash />
        </button>
      </li>
    ))}
  </ul>
)
