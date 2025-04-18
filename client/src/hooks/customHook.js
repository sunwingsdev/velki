import { useDispatch } from "react-redux";
import { useLazyGetUserByIdQuery } from "../redux/features/allApis/usersApi/usersApi";
import { setSingleUser } from "../redux/slices/authSlice";
import { useEffect } from "react";

export const useFetchUser = (userId) => {
  const dispatch = useDispatch();
  const [getSingleUser] = useLazyGetUserByIdQuery();

  const fetchUser = async () => {
    if (!userId) return;
    const { data } = await getSingleUser(userId);
    dispatch(setSingleUser(data));
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return { fetchUser };
};
