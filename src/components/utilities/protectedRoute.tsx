import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { getUserLogged } from "../../store/localStorage/settings";

export const ProtectedRoute = ({ redirectPath = '/' }) => {
    const user = useAppSelector((state) => state.user);
    if (!getUserLogged()) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
};

