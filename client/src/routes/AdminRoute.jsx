import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user || user?.role !== "admin") {
      navigate("/admin");
    }
  }, [token, user, navigate]);

  return token && user?.role === "admin" ? children : null;
};

export default AdminRoute;
