import { Route, Routes } from 'react-router-dom'
import PortfolioSections from './components/PortfolioSections'
import LegalNoticePage from './components/LegalNoticePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioSections />} />
      <Route path="/aviso-legal" element={<LegalNoticePage />} />
    </Routes>
  )
}

export default App
