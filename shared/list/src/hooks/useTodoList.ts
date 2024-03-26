import { useContext } from 'react'
import { TodoContext, getToDos } from '@shared/context'
import { Stage, TSortStage, TTodo } from '@shared/utils'

export const useTodoList = () => {
    const {
        toDoList,
        setToDoList,
        toDoListForSearching,
        setToDoListForSearching,
    } = useContext(TodoContext)!

    const sortByStage = async (stage: string) => {
        const localTable = await getToDos()

        if (stage === Stage.ALL) {
            setToDoList(localTable)
            setToDoListForSearching(localTable)
            return
        }

        const filteredTable = localTable.filter(
            (todo: TTodo) => todo.stage === stage
        )

        setToDoList(filteredTable)
        setToDoListForSearching(filteredTable)
    }

    const handleSearch = (value: string) => {
        if (value === '') {
            setToDoList(toDoListForSearching)
            return
        }
        const filteredTable = toDoListForSearching.filter((todo: TTodo) =>
            todo.description.toLowerCase().includes(value.toLowerCase())
        )

        setToDoList(filteredTable)
    }

    const handleSort = (sort: TSortStage) => {
        if (sort === 'newest') {
            const newTable = [...toDoList].sort(
                (a, b) => b.created_at - a.created_at
            )
            setToDoList(newTable)
        } else {
            const newTable = [...toDoList].sort(
                (a, b) => a.created_at - b.created_at
            )
            setToDoList(newTable)
        }
    }

    return { sortByStage, handleSearch, handleSort }
}
