import { useState } from 'react'
import { DateDown, DateUp } from '@shared/ui'
import { useTodoList } from '../../hooks/useTodoList'
import { TSortStage } from '@shared/utils'

const SortStage = {
    NEWEST: 'newest',
    OLDEST: 'oldest',
} as const

export const SortByDateButton = () => {
    const [sort, setSort] = useState<TSortStage>(SortStage.OLDEST)
    const { handleSort } = useTodoList()

    const handleClick = () => {
        handleSort(sort)
        setSort((prev) =>
            prev === SortStage.OLDEST ? SortStage.NEWEST : SortStage.OLDEST
        )
    }
    return (
        <button
            id="sortDateMobile"
            className="h-9 w-10 bg-gray-700 p-0 flex justify-center items-center rounded-md cursor-pointer transition-all duration-300 ease-in-out fill-orange-200 hover:fill-slate-950 focus:fill-slate-950 active:fill-slate-950 md:static"
            onClick={handleClick}
        >
            {sort === SortStage.NEWEST ? <DateDown /> : <DateUp />}
        </button>
    )
}

export default SortByDateButton
