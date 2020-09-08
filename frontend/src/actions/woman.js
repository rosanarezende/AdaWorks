import axios from "axios";
import { push } from "connected-react-router";
// import { routes } from "../routes/constants";
import { setMessage, setOpen } from "./messages";
import { setLoading } from "./loading";

const baseUrl = "https://adaworks.herokuapp.com";

// const getToken = () => localStorage.getItem("token");

export const signupWoman = (signupData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.post(`${baseUrl}/women-register`, signupData);
    const token = response?.data?.token;
    const isFactory = response?.data?.isFactory;
    localStorage.setItem("token", token);
    localStorage.setItem("isFactory", isFactory);

    dispatch(setLoading(false));

    dispatch(push(`/perfil/${signupData.nickname}`));
  } catch (err) {
    dispatch(setLoading(false));
    console.error(err.response);
    dispatch(
      setMessage(
        err?.response?.data?.error ||
          "Não foi possivel criar cadastrar o usuário, tente novamente mais tarde !",
        "red"
      )
    );
    dispatch(setOpen(true));
  }
};
