import httpClient from "../utils/httpClient";
import { useQuery } from "react-query";

export function useTeam(id) {
  return useQuery(["team", id], async () => {
    const { data } = await httpClient.get("/teams/" + id);
    return data;
  });
}
