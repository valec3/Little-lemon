import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Reserve from './pages/Reserve/Reserve'
import Login from './components/Login'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reserve" element={<Reserve />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
