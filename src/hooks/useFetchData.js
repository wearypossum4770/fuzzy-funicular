import { useEffect, useState } from "react";
export default function useFetchData(performFetch, url) {
  let [response, setResponse] = useState();
  let [error, setError] = useState();
  useEffect(() => {
    let options = {
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      // 'Content-Type': 'application/x-www-form-urlencoded',
    };
    async function getData() {
      try {
        const resp = await fetch(`http://localhost:3003/${url}`, options);
        if (resp.ok) {
          let data = await resp.json();
          setResponse(data);
        }
      } catch (err) {
        setError(err);
      }
    }
    if (performFetch) {
      getData();
    }
  }, [performFetch, url]);
  return { response: response, error: error };
}
