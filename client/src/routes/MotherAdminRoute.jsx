import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MotherAdminRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user || !user?.role || user?.role !== "mother-admin") {
      navigate("/admin");
    }
  }, [token, user, navigate]);

  return token && user?.role === "mother-admin" ? children : null;
};

export default MotherAdminRoute;
