import { useEffect } from "react";
import { useState } from "react";

const useFetchData = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  return { data, loading, error };
};

export default useFetchData;
