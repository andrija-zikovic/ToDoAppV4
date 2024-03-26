import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { TTodo, TUpdateFormData } from '@shared/utils'
import { MessageContext, TodoContext } from '@shared/context'
import axios from 'axios'

const putTodo = async (id: string, item: TTodo) => {
    await axios.put(`http://localhost:3000/todos/${id}`, item)
}

const getTodo = async (id: string) => {
    const item: TTodo = await axios
        .get(`http://localhost:3000/todos/${id}`)
        .then((res) => res.data)
    return item
}

const delTodo = async (id: string) => {
    await axios.delete(`http://localhost:3000/todos/${id}`)
}

export const useEdit = () => {
    const { setInfoMessages } = useContext(MessageContext)!
    const { refetchToDoList } = useContext(TodoContext)!
    const navigate = useNavigate()

    const updateTodo = async ({ id, description, stage }: TUpdateFormData) => {
        const item: TTodo = await getTodo(id)

        try {
            description ? (item.description = description) : null
            stage ? (item.stage = stage) : null

            await putTodo(id, item)

            setInfoMessages({ message: 'Todo updated', type: 'success' })
            refetchToDoList()
        } catch (error) {
            console.error(error)
            setInfoMessages({ message: 'Error updating todo', type: 'error' })
            return
        }
    }

    const deleteTodo = async (id: string) => {
        const item: TTodo = await getTodo(id)

        if (!item) {
            setInfoMessages({ message: 'Todo not found', type: 'error' })
            return
        } else if (item.stage !== 'done') {
            setInfoMessages({
                message: 'Todo must be done to delete',
                type: 'error',
            })
            return
        }

        try {
            await delTodo(id)

            refetchToDoList()
            navigate('/')
            setInfoMessages({ message: 'Todo deleted', type: 'success' })
        } catch (error) {
            console.error(error)
            setInfoMessages({ message: 'Error deleting todo', type: 'error' })
            return
        }
    }

    return {
        updateTodo,
        deleteTodo,
    }
}
