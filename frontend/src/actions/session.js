import axios from "axios";
import { push } from "connected-react-router";
// import { routes } from "../routes/constants";
import { setMessage, setOpen } from "./messages";
import { setLoading } from "./loading";

const baseUrl = "https://adaworks.herokuapp.com";

const getToken = () => localStorage.getItem("token");

export const login = (loginData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.post(`${baseUrl}/session`, loginData);
    const token = response?.data?.token;
    const isFactory = response?.data?.isFactory;
    localStorage.setItem("token", token);
    localStorage.setItem("isFactory", isFactory);

    dispatch(setLoading(false));

    if (isFactory) {
      dispatch(push(`/empresa/${response?.data?.nickname}`));
    } else {
      dispatch(push(`/perfil/${response?.data?.nickname}`));
    }
  } catch (err) {
    dispatch(setLoading(false));

    console.error(err?.response?.data?.error);
    dispatch(
      setMessage(
        "Erro",
        "Não foi possivel fazer o login, tente novamente mais tarde!"
      )
    );
    dispatch(setOpen(true));
  }
};

export const setProfile = (user) => ({
  type: "SET_PROFILE",
  payload: {
    user,
  },
});

export const getProfile = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get(`${baseUrl}/profile`, {
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    });

    dispatch(setLoading(false));

    dispatch(setProfile(response?.data));
  } catch (err) {
    dispatch(setLoading(false));

    console.error(err.response);
    dispatch(
      setMessage(
        err?.response?.data?.error ||
          "Não foi possivel acessar os dados do usuário logado!",
        "red"
      )
    );
    // dispatch(setOpen(true))
  }
};
