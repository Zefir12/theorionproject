import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import TestPage from './pages/testPage';
import MainPage from './pages/mainPage';
import '@mantine/core/styles.css';
import DashboardPage from './pages/dashboardPage';


function App() {


  const ProtectedRoute = ({ redirectPath = '/' }) => {
    if (true == null) {
      return <Navigate to={redirectPath} replace />;
    }
    
    return <Outlet />;
  };
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
