import { Navigate, Outlet } from "react-router-dom";
import { getUserLogged } from "../../store/localStorage/settings";
import { useState } from "react";

export const ProtectedRoute = ({ redirectPath = '//' }) => {
    const [logged] = useState(getUserLogged())
    if (logged) {
        return <Outlet />;
    }
    return <Navigate to={redirectPath} replace />;
};

