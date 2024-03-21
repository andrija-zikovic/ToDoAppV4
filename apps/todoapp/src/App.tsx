import { MainRouter } from './router/MainRouter'
import { TodoContextProvider } from '@shared/ui/src/context/todoContext'
import { MessageContextProvider } from '@shared/ui/src/context/messageContext'

function App() {
    return (
        <MessageContextProvider>
            <TodoContextProvider>
                <MainRouter />
            </TodoContextProvider>
        </MessageContextProvider>
    )
}

export default App
