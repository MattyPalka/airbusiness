import { useQuery } from "@tanstack/react-query";
import { parseMinMax } from "../helpers/parse-min-max";
import { removeEmptyFromObject } from "../helpers/remove-empty-from-object";
import { getData } from "./get-data";
import { Business } from "./mock-business";

export const categories = [
  "auto",
  "homeservices",
  "education",
  "restaurants",
  "active",
  "beautysvc",
  "health",
  "pets",
] as const;

export const isCategory = (value: string | null): value is CategoryType =>
  !!(value && categories.includes(value as CategoryType));

export type CategoryType = (typeof categories)[number];

interface SearchParams {
  location?: string;
  latitude?: number;
  longitude?: number;
  term?: string;
  price?: 1 | 2 | 3;
  open_now?: boolean;
  sort_by?: "best_match" | "rating" | "review_count" | "distance";
  limit?: number;
  offset?: number;
  categories?: CategoryType | undefined;
}

export const useSearchBusinesses = (searchParams?: SearchParams) => {
  const {
    location = "Poland",
    latitude,
    longitude,
    term,
    price,
    open_now,
    sort_by = "best_match",
    limit = 20,
    offset,
    categories,
  } = searchParams || {};

  const normalizedSearchParams: Record<
    keyof SearchParams,
    string | undefined | false
  > = {
    location,
    latitude: latitude?.toString(),
    longitude: longitude?.toString(),
    term,
    price: price?.toString(),
    open_now: open_now && `${open_now}`,
    sort_by,
    limit: parseMinMax(limit, 0, 50),
    offset: typeof offset === "number" && parseMinMax(offset, 0, 1000),
    categories: categories,
  };

  return useQuery({
    queryKey: ["businessesData", ...Object.values(normalizedSearchParams)],
    queryFn: () =>
      getData<{
        businesses: Business[];
        region: { center: { latitude: number; longitude: number } };
        total: number;
      }>("/businesses/search", removeEmptyFromObject(normalizedSearchParams)),
  });
};
