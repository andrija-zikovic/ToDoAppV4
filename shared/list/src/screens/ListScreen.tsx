import SortByDateButton from '../components/Buttons/SortByDateButton'
import SearchBox from '../components/SearchBox/SearchBox'
import SortByStageBox from '../components/SortByStageBox/SortByStageBox'
import ToDoList from '../components/ToDoList/ToDoList'

function ListScreen() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-orange-200 border-b-2 border-gray-700 text-gray-700 md:flex-row-reverse md:py-2 md:justify-between">
                <div className="flex flex-row items-center gap-2 px-3 md:justify-end">
                    <SortByDateButton />
                    <SearchBox />
                </div>
                <SortByStageBox />
            </div>
            <ToDoList />
        </div>
    )
}

export { ListScreen }
