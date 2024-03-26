import { createContext, useEffect, useState } from 'react'
import { TTodo } from '@shared/utils'
import axios from 'axios'

type IProps = {
    children: React.ReactNode
}

interface ContextValues {
    toDoList: TTodo[]
    setToDoList: React.Dispatch<React.SetStateAction<TTodo[]>>
    refetchToDoList: () => void
    toDoListForSearching: TTodo[]
    setToDoListForSearching: React.Dispatch<React.SetStateAction<TTodo[]>>
}

export const getToDos = async () => {
    const localTable: TTodo[] = await axios
        .get('http://localhost:3000/todos')
        .then((res) => res.data)
    return localTable
}

export const TodoContext = createContext<null | ContextValues>(null)

export const TodoContextProvider = ({ children }: IProps) => {
    const [toDoListForSearching, setToDoListForSearching] = useState<TTodo[]>(
        []
    )
    const [toDoList, setToDoList] = useState<TTodo[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const items = await getToDos()
                setToDoList(items)
                setToDoListForSearching(items)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    const refetchToDoList = async () => {
        try {
            const items = await getToDos()
            setToDoList(items)
        } catch (error) {
            console.error(error)
        }
    }

    const contextValues = {
        toDoList,
        setToDoList,
        refetchToDoList,
        toDoListForSearching,
        setToDoListForSearching,
    }

    return (
        <TodoContext.Provider value={contextValues}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
