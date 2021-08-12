import { useEffect, useState } from "react";
export default function useFetchData(performFetch, url, data) {
  let [response, setResponse] = useState();
  let [error, setError] = useState();
  useEffect(() => {
    let options = {
      mode: "cors",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      method: "POST",
      processData: false,
      body: JSON.stringify(data),
    };
    async function getData() {
      try {
        const resp = await fetch(url, options);
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
