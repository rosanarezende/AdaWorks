import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../actions/session";

export const useProfile = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.session);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return profile;
};
