import { MouseEvent } from "react";
import { Icon, IconName } from "../icon";

type CategoryType =
  | "auto"
  | "homeservices"
  | "education"
  | "restaurants"
  | "active"
  | "beautysvc"
  | "health"
  | "pets";

interface Props {
  icon: IconName;
  displayName: string;
  categoryType: CategoryType;
}

export const FilterIcon = ({ icon, displayName, categoryType }: Props) => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(categoryType);
  };

  return (
    <button
      onClick={handleOnClick}
      className="flex flex-col justify-center items-center hover:text-gray-500"
    >
      <Icon icon={icon} className="w-10 h-10" />
      <span className="text-sm">{displayName}</span>
    </button>
  );
};
