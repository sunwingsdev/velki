import { useDispatch } from "react-redux";
import { useLazyGetUserByIdQuery } from "../redux/features/allApis/usersApi/usersApi";
import { setSingleUser } from "../redux/slices/authSlice";
import { useEffect, useState } from "react";

export const useFetchUser = (userId) => {
  const dispatch = useDispatch();
  const [getSingleUser] = useLazyGetUserByIdQuery();
  const [loading, setLoading] = useState(false);
  const fetchUser = async () => {
    if (!userId) return;
    setLoading(true);
    const { data } = await getSingleUser(userId);
    dispatch(setSingleUser(data));
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return { fetchUser, loading };
};
