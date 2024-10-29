const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const CORS_PROXY_URL = "http://localhost:4000/yelp";

export const getData = <T>(
  path: string,
  params?: Record<string, string>
): Promise<T> => {
  const searchParams = new URLSearchParams(params);
  const url = `${CORS_PROXY_URL}${path}?${searchParams.toString()}`;
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
};
