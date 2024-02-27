import axios from "axios";
import WordPress from "wpapi";

export const wordPressInstance = new WordPress({ endpoint: "https://techpression.com/wp-json" });
export const baseUrl = "https://techpression.com/wp-json/wp/v2";
const API_URL = "https://api.timbu.com/";

const $http = axios.create({
   headers: {
      "Access-Control-Allow-Origin": "*",
   },
   baseURL: API_URL,
   withCredentials: true,
});

export default $http;
