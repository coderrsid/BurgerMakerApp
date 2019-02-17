import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burgerorderapp.firebaseio.com/"
});

export default instance;
