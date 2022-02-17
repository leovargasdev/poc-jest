import styles from './styles.module.scss'

export type TodoItem = {
  id: number
  text: string
  completed: boolean
}

type TodosProps = {
  todos: TodoItem[]
  changeTodo: (todoId: number) => void
}

export const Todos = ({ todos, changeTodo }: TodosProps) => (
  <ul className={styles.container}>
    {todos.map(todo => (
      <li
        key={todo.id}
        onClick={() => changeTodo(todo.id - 1)}
        className={todo.completed ? styles.active : ''}
      >
        <span /> {todo.text}
      </li>
    ))}
  </ul>
)
