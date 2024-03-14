import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/testPage';
import MainPage from './pages/mainPage';
import '@mantine/core/styles.css';
import DashboardPage from './pages/dashboardPage';
import { ProtectedRoute } from './components/utilities/protectedRoute';


function App() {
  return (
    <>
      <Routes>
          <Route index element={<TestPage />}></Route>
          <Route path="test" element={<MainPage />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
