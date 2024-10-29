import { useQuery } from "@tanstack/react-query";
import { getData } from "./get-data";
import { BusinessDetail } from "./interfaces";

export const useBusinessDetails = (id?: string) => {
  return useQuery({
    queryKey: ["businessesDetails", id],
    enabled: !!id,
    queryFn: () => getData<BusinessDetail>(`/businesses/${id}`),
  });
};
