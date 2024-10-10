import axios from "axios";
import BACKEND_URL from "./config.ts";

axios.defaults.baseURL = BACKEND_URL;

export default axios;
