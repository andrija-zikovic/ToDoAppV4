import { MainRouter } from './router/MainRouter'
import { TodoContextProvider } from '@shared/ui'
import { MessageContextProvider } from '@shared/ui'

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
