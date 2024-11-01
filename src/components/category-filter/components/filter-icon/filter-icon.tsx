import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { CategoryType } from "../../../../api-service/useSearchBusinesses";
import { Icon, IconName } from "../../../icon";
import { useSearchParams } from "react-router-dom";

interface Props {
  categoryType: CategoryType;
}

const categoryToIconMap: Record<CategoryType, IconName> = {
  auto: "Car",
  homeservices: "Home",
  education: "GraduationCap",
  restaurants: "Hamburger",
  active: "Rugby",
  beautysvc: "Scissors",
  health: "Ambulance",
  pets: "Paw",
};

export const FilterIcon = ({ categoryType }: Props) => {
  const { t } = useTranslation("filter-names");
  const [_, setSearchParams] = useSearchParams();

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSearchParams({ category: categoryType });
  };

  return (
    <button
      onClick={handleOnClick}
      className="flex flex-col justify-center items-center hover:text-gray-500"
    >
      <Icon icon={categoryToIconMap[categoryType]} className="w-10 h-10" />
      <span className="text-sm">{t(categoryType)}</span>
    </button>
  );
};
