import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user) {
      toast.error("Unauthorized access");
      navigate("/");
    }
  }, [token, user, navigate]);

  return token ? children : null;
};

export default PrivateRoute;
