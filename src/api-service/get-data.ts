import { YELP_API_KEY } from "../yelp-api-key";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
};

const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_API_URL = "https://api.yelp.com";

export const getData = (path: string, params?: Record<string, string>) => {
  const searchParams = new URLSearchParams(params);
  const url = new URL(`/v3${path}`, BASE_API_URL);
  return fetch(
    `${CORS_ANYWHERE_URL}${url.toString()}?${searchParams.toString()}`,
    options
  ).then((res) => res.json());
};
