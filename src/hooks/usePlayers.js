import httpClient from "../utils/httpClient";
import { useQuery } from "react-query";

export function usePlayers(search) {
  return useQuery(["players", search], async () => {
    const { data } = await httpClient.get("/players/?search=" + search[0]);
    return data;
  });
}
