import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export const ProtectedRoute = ({ redirectPath = '/' }) => {
    const user = useAppSelector((state) => state.user);
    if (user.login) {
        return <Outlet />;
    }
    return <Navigate to={redirectPath} replace />;
};

