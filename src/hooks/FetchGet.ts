import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  url: string;
  enabled?: boolean;
}

export const useFetchHandle = ({ url, enabled }: Props) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (enabled) fetchData();
  }, [url, enabled]);

  return { data, loading, error };
};
