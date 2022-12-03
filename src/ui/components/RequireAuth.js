import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
                                            
    const auth = {
        id:1,
        name:"samir",
        role:"admin",
    }
    const location = useLocation(); 

    return (
                
          
        auth?.role?.find(role => allowedRoles?.includes(role)) 
                                                              
            ? <Outlet /> 
            : auth?.role
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;