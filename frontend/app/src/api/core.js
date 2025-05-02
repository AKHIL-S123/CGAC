import ENV from "../environment";

// const API_BASE_URL = ENV.API_BASE_URL;


const API_BASE_URL = "https://cgac-backend.onrender.com";

const getToken = () => localStorage.getItem("access_token");

const defaultHeaders = (auth = true) => {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    headers["Authorization"] = `Bearer ${getToken()}`;
  }
  return headers;
};

// Helper to format query params
const buildQueryString = (params = {}) => {
  const query = new URLSearchParams(params);
  return query.toString() ? `?${query.toString()}` : "";
};

export const core = {
  get: async (url, params = {}, auth = true) => {
    const fullUrl = `${API_BASE_URL}${url}${buildQueryString(params)}`;
    const res = await fetch(fullUrl, {
      method: "GET",
      headers: defaultHeaders(auth),
    });
    return res.json();
  },

  post: async (url, data, auth = true) => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: "POST",
      headers: defaultHeaders(auth),
      body: JSON.stringify(data),
    });
    return res.json();
  },

  put: async (url, data, auth = true) => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: "PUT",
      headers: defaultHeaders(auth),
      body: JSON.stringify(data),
    });
    return res.json();
  },

  del: async (url, auth = true) => {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: "DELETE",
      headers: defaultHeaders(auth),
    });
    return res.json();
  },
};
