import Head from 'next/head'

import styles from 'styles/home.module.scss'
import { TodoItem, Todos } from 'components/Todos'
import { useState } from 'react'
import { NewTodo } from 'components/NewTodo'

export default function Home() {
  const [todosList, setTodosList] = useState<TodoItem[]>([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae saepe',
      completed: false
    },
    {
      id: 2,
      text: 'tempora et similique possimus labore provident aspernatur libero.',
      completed: false
    },
    {
      id: 3,
      text: 'Recusandae saepe eaque consequuntur soluta asperiores quis libero ducimus',
      completed: false
    },

    { id: 4, text: 'Siure earum inventore.', completed: false }
  ])

  const handleChangeTodo = (todoId: number) => {
    const auxTodosList = [...todosList]
    auxTodosList[todoId].completed = !auxTodosList[todoId].completed
    setTodosList(auxTodosList)
  }

  const handleNewTodo = text => {
    console.log(text)
    setTodosList(state => [
      ...state,
      { text, id: state.length + 1, completed: false }
    ])
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo list</title>
      </Head>

      <main>
        <h1>TODO LIST</h1>

        <NewTodo addTodo={handleNewTodo} />

        <Todos todos={todosList} changeTodo={handleChangeTodo} />
      </main>
    </div>
  )
}
