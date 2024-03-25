import { createContext, useState } from 'react'
import { TTodo } from '@shared/utils'
import { localStorageWrapper } from '@shared/storage'

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

export const TodoContext = createContext<null | ContextValues>(null)

export const TodoContextProvider = ({ children }: IProps) => {
    const [toDoList, setToDoList] = useState(
        (localStorageWrapper.getItem('toDos') as TTodo[]) || []
    )

    const [toDoListForSearching, setToDoListForSearching] =
        useState<TTodo[]>(toDoList)

    const refetchToDoList = () => {
        const localTable = localStorageWrapper.getItem<TTodo[]>('toDos') || []
        setToDoList(localTable)
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
