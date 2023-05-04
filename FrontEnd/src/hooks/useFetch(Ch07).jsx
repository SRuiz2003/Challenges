import { useEffect,useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const api = await fetch(url);
          console.log("api:",api);
          const data = await api.json();
          console.log("Data:",data);
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setHasError(true);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { data, isLoading, hasError };
  };
    