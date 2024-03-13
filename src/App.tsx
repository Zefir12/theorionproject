import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/testPage';
import MainPage from './pages/mainPage';
import '@mantine/core/styles.css';

function App() {
  return (
    <>
      <Routes>
          <Route index element={<TestPage />}></Route>
          <Route path="test" element={<MainPage />}></Route>
      </Routes>
    </>
  )
}

export default App
