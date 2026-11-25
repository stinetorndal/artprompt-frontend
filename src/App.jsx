import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import WordPromptsPage from './pages/WordPromptsPage'
import ColorPromptsPage from './pages/ColorPromptsPage'
import LoginPage from './pages/LoginPage'
import PainterPromptPage from './pages/PainterPromptsPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'

// App bestemmer hvilken side der skal vises ud fra adressen
// Layout (med Header) ligger rundt om alle siderne

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='color' element={<ColorPromptsPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='painters' element={<PainterPromptPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='wordprompts' element={<WordPromptsPage />} />
      </Route>
    </Routes>
  )
}


export default App
