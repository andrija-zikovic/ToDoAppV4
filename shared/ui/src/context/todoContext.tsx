import { createContext, useState } from 'react'
import { localStorageWrapper } from '../storage/storage'

type TTodo = {
    id: string
    description: string
    stage: string
    created_at: number
}

type IProps = {
    children: React.ReactNode
}

interface ContextValues {
    toDoList: TTodo[]
    setToDoList: React.Dispatch<React.SetStateAction<TTodo[]>>
    refetchToDoList: () => void
}

export const TodoContext = createContext<null | ContextValues>(null)

export const TodoContextProvider = ({ children }: IProps) => {
    const [toDoList, setToDoList] = useState(
        localStorageWrapper.getItem('toDos') as TTodo[]
    )

    const refetchToDoList = () => {
        const localTable = localStorageWrapper.getItem<TTodo[]>('toDos') || []
        setToDoList(localTable)
    }

    const contextValues = {
        toDoList,
        setToDoList,
        refetchToDoList,
    }

    return (
        <TodoContext.Provider value={contextValues}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
