import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "a5759837-6d0e-4fa1-bc54-f6107032494a";

interface Category {
  id: number;
  name: string;
}

interface CatDto {
  breeds: any[];
  categories: Category[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export const useCats = () => {
  const [catData, setCatData] = useState<string>();
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchCat = () =>
    axios.get<CatDto[]>("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key": API_KEY,
      },
    });

  useEffect(() => {
    setIsFetching(true);
    (async () => {
      try {
        const cat = await fetchCat();
        setCatData(cat.data[0].url);
      } catch {
      } finally {
        setIsFetching(false);
      }
    })();
  }, []);
  
  return { catData, isFetching };
};
