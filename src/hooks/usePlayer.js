import httpClient from "../utils/httpClient";
import { useQuery } from "react-query";

export function usePlayer(id) {
  return useQuery(["player", id], async () => {
    const { data } = await httpClient.get(`/players/${id}`);
    return data;
  });
}
