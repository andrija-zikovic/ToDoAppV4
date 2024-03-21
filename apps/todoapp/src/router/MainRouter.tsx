import { Routes, Route } from 'react-router-dom'
import { HeaderComponent, InfoMessagesBox } from '@shared/ui'
import ListScreen from '../screens/ListScreen'
import CreateScreen from '../screens/CreateScreen'
import EditScreen from '../screens/EditScreen'

export const MainRouter = () => {
    return (
        <div className="min-h-dvh overflow-hidden">
            <HeaderComponent />
            <Routes>
                <Route path="/*" element={<ListScreen />} />
                <Route path="/todo/create" element={<CreateScreen />} />
                <Route path="/todo/edit/:id" element={<EditScreen />} />
            </Routes>
            <InfoMessagesBox />
        </div>
    )
}
