import './App.css'

import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/testPage';
import MainPage from './pages/mainPage';

function App() {
  return (
    <>
      <Routes>
          <Route index element={<MainPage />}></Route>
          <Route path="test" element={<TestPage />}></Route>
      </Routes>
      <a href='test'>bub</a>
      d
    </>
  )
}

export default App
