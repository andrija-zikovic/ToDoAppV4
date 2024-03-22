import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { localStorageWrapper } from '@shared/storage'
import { Stage } from '@shared/utils'
import { MessageContext, TodoContext } from '@shared/context'
import dayjs from 'dayjs'

export const useTodo = () => {
    const { setInfoMessages } = useContext(MessageContext)!
    const { refetchToDoList } = useContext(TodoContext)!
    const navigate = useNavigate()

    const createTodo = (description: string) => {
        try {
            const storedTodos = localStorageWrapper.getItem('toDos') || []

            const now = dayjs().valueOf()

            const newTodo = {
                id: now,
                description: description,
                created_at: now,
                stage: Stage.PENDING,
            }

            const updatedTodos = [newTodo, ...storedTodos]

            localStorageWrapper.setItem('toDos', updatedTodos)

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
