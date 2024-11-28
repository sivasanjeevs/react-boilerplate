import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Dash from './pages/dash'
import { ReactRoutes } from './constants/constants'
function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path={ReactRoutes.LOGIN} element={<Login/>} />
      <Route path={ReactRoutes.DASH} element={<Dash/> } />
    </Routes>
</BrowserRouter>
  )
}

export default App
