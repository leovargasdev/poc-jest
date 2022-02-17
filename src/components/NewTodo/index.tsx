import { useState } from 'react'
import styles from './styles.module.scss'

type NewTodoProps = {
  addTodo: (text: string) => void
}

export const NewTodo = ({ addTodo }: NewTodoProps) => {
  const [text, setText] = useState('')

  const handleNewTodo = () => {
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input
          type="text"
          value={text}
          placeholder="Write your description"
          onChange={e => setText(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleNewTodo}>
        New +
      </button>
    </div>
  )
}
