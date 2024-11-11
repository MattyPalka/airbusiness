import { useQuery } from "@tanstack/react-query";
import { getData } from "./get-data";
import { ReviewPayload } from "./interfaces";

export const useBusinessReviews = (id?: string) => {
  return useQuery<ReviewPayload, Error>({
    queryKey: ["businessesReviews", id],
    retry: 1,
    enabled: !!id,
    queryFn: () => getData<ReviewPayload>(`/businesses/${id}/reviews`),
  });
};
