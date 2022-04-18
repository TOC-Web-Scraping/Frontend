import httpClient from "../utils/httpClient";
import { useQuery } from "react-query";

export function useTeams(search) {
  return useQuery(["teams", search], async () => {
    const { data } = await httpClient.get("/teams/?search=" + search[0]);
    return data;
  });
}
