import httpClient from "../utils/httpClient";
import { useQuery } from "react-query";

export function useMaps() {
  return useQuery(["maps"], async () => {
    const { data } = await httpClient.get("/mapName?");
    return data;
  });
}