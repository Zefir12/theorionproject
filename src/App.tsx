import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/testPage';
import MainPage from './pages/mainPage';
import '@mantine/core/styles.css';

function App() {
  return (
    <>
      <Routes>
          <Route index element={<MainPage />}></Route>
          <Route path="test" element={<TestPage />}></Route>
      </Routes>
    </>
  )
}

export default App
