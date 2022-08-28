import { Navigate } from "react-router-dom";
import AdminDashboard from "../containers/AdminDashboard";
const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to='/' replace />;
    }
    return children;
};
export default Protected;
