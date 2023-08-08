import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(url).then((res) => {
      setData(res.data);
      // Loading logic below
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, [url]);

  return { data, loading };
};

export default useFetch;
