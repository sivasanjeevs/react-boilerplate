import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import { ReactRoutes } from './constants/constants'
function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path={ReactRoutes.LOGIN} element={<Login/>} />
    </Routes>
</BrowserRouter>
  )
}

export default App
