import { MainRouter } from './router/MainRouter'
import { TodoContextProvider, MessageContextProvider } from '@shared/context'

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
