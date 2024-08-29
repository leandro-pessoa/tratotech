// componentes
import AppRoutes from './routes'
import { Provider } from 'react-redux'

// store
import { store } from './features/store'

const App = () => {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    )
}

export default App
