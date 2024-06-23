import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdb = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});


tmdb.interceptors.response.use(
  response => response,
  error => {
    console.error("API call error:", error);
    let errorMessage = "An error occurred";
    if (error.response) {
      switch (error.response.status) {
        case 400:
          errorMessage = "Bad Request";
          break;
        case 401:
          errorMessage = "Unauthorized. Please check your API key.";
          break;
        case 404:
          errorMessage = "Not Found. The requested resource could not be found.";
          break;
        case 500:
          errorMessage = "Internal Server Error. Please try again later.";
          break;
        default:
          errorMessage = `Unexpected error: ${error.response.status}`;
      }
    } else if (error.request) {
      errorMessage = "No response received from the server.";
    } else {
      errorMessage = `Error in request setup: ${error.message}`;
    }

    toast.error(errorMessage);

    return Promise.reject(new Error(errorMessage));
  }
);
