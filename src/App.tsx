import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import '@mantine/core/styles.css';
import DashboardPage from './pages/dashboardPage';
import { ProtectedRoute } from './components/utilities/protectedRoute';


function App() {
  return (
    <>
      <Routes>
          <Route index element={<LoginPage />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
