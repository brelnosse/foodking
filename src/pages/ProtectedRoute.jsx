import { useContext } from "react";
import { AdminContext } from "../utils/context/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    const {isAdmin} = useContext(AdminContext);
    const location = useLocation();

    // const navigate = useNavigate();
    return ((isAdmin || location.state?.isAdmin) ? <Outlet /> : <Navigate to={'/admin'} />);
}