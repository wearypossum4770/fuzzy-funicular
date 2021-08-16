import { useState, useEffect } from "react";
export default function usePostServer(url = "", data = {}) {
  let [response, setResponse] = useState();
  let [error, setError] = useState();
  useEffect(() => {
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    async function postData() {
      try {
        const resp = await fetch(`http://localhost:3004/${url}`, options);
        if (resp.ok) {
          setResponse(await resp.json());
        }
      } catch (err) {
        setError(err);
      }
    }
  }, [setResponse, setError, url, data]);
  return { response, error };
}
