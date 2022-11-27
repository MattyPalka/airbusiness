import { categories, FilterIcon } from "./components/filter-icon";

export const CategoryFilter = () => {
  return (
    <div className="flex gap-2 p-2 justify-center">
      {categories.map((category) => (
        <FilterIcon categoryType={category} key={category} />
      ))}
    </div>
  );
};
