import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { Stage, TTodo } from '@shared/utils'
import { MessageContext, TodoContext } from '@shared/context'
import dayjs from 'dayjs'
import axios from 'axios'

const postTodo = async (todo: TTodo) => {
    await axios.post('http://localhost:3000/todos', todo)
}

export const useTodo = () => {
    const { setInfoMessages } = useContext(MessageContext)!
    const { refetchToDoList } = useContext(TodoContext)!
    const navigate = useNavigate()

    const createTodo = async (description: string) => {
        try {
            const now = dayjs().valueOf()

            const newTodo = {
                id: now.toString(),
                description: description,
                created_at: now,
                stage: Stage.PENDING,
            }

            await postTodo(newTodo)

            refetchToDoList()
            navigate('/')
            setInfoMessages({ message: 'Todo created', type: 'success' })
        } catch (error) {
            console.error(error)
            setInfoMessages({ message: 'Error creating todo', type: 'error' })
            return
        }
    }

    return {
        createTodo,
    }
}
