import axios from "axios";

let baseURL;
if (import.meta.env.DEV) {
  console.log("axiosInstance", import.meta.env);
  baseURL = import.meta.env.VITE_BASE_URL_DEV;
} else {
  baseURL = import.meta.env.VITE_BASE_URL_PROD;
}
const axiosInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: { "X-Custom-Header": "Hamada" },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    console.log("🚀 ~ config:", config);
    // Do something before request is sent
    // get token from cookie
    const token = "Bearer  jmngjg_sdfsdf325455_ikukujajkghasdf_542654asdfg";
    config.headers.Authorization = token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
  { synchronous: true, runWhen: () => {} /* This function returns true */ }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return { ...response, customResponse: "Hello from axios interceptor" };
  },
  function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
