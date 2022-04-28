import httpClient from "../utils/httpClient";
import { useQuery } from "react-query";

export function useMap(name) {
  return useQuery(["map", name], async () => {
    const { data } = await httpClient.get(`maps?mapName=${name}`);
    return data[0];
  });
}