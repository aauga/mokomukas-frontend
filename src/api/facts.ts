import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CatFactResponse from "../types/catFactsTypes";

const fetchCatFacts = async () =>
  (await axios.get("https://meowfacts.herokuapp.com/")).data;

export function useCatFacts() {
  return useQuery<CatFactResponse>({
    queryKey: ["catFacts"],
    queryFn: fetchCatFacts,
  });
}
