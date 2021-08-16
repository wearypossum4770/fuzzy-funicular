import { useState, useEffect } from "react";
/**
 *
 * @param {string} url
 * @returns
 */
export default function useFetchServer(url = "", handler = null) {
  let [response, setResponse] = useState();
  let [error, setError] = useState();
  useEffect(() => {
    let options = {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    };
    async function fetchData() {
      try {
        const resp = await fetch(`http://localhost:3004/${url}`, options);
        if (resp.ok && handler) {
          setResponse(handler(await resp.json()));
        }
      } catch (err) {
        setError(err);
      }
    }
  }, [setResponse, setError, url]);
  return { response, error };
}
