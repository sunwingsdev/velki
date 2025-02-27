import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user || !user?.role || user?.role === "user") {
      navigate("/admin");
    }
  }, [token, user, navigate]);

  return token && user?.role !== "user" ? children : null;
};

export default AdminRoute;
