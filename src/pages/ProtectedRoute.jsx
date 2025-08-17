import { useContext } from "react";
import { AdminContext } from "../utils/context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    const {isAdmin} = useContext(AdminContext);
    // const navigate = useNavigate();
    console.log(isAdmin)
    return (isAdmin ? <Outlet /> : <Navigate to={'/admin'} />);
}