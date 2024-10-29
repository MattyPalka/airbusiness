import { useQuery } from "@tanstack/react-query";
import { getData } from "./get-data";
import { BusinessDetail } from "./interfaces";

export const useBusinessDetails = (id?: string) => {
  return useQuery<BusinessDetail, Error>({
    queryKey: ["businessesDetails", id],
    retry: 1,
    enabled: !!id,
    queryFn: () => getData<BusinessDetail>(`/businesses/${id}`),
  });
};
