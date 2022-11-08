import React, { useState, useEffect} from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setData(res.data);
    }
    fetchData();
  }, [url]);

  return { data };
}