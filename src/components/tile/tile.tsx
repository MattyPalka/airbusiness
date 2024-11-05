import { useState } from "react";
import { Business } from "../../api-service/mock-business";
import { Icon } from "../icon";
import { InfoText } from "../info-text";
import { generatePath, Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

interface Props {
  businessDetails: Business;
}

export const Tile = ({ businessDetails }: Props) => {
  const { image_url, name, rating, categories, price, location, id } =
    businessDetails;
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageUrl, setImageUrl] = useState(image_url);
  return (
    <Link
      to={generatePath(ROUTES.BUSINESS.href, {
        id,
      })}
      className="grid grid-rows-[4fr,_1fr] gap-2 cursor-pointer"
    >
      <div className="relative w-full max-h-96">
        <button
          className="absolute z-10 top-3 right-3"
          onClick={(event) => {
            event.preventDefault();
            setIsFavorite((prevState) => !prevState);
          }}
        >
          <Icon
            icon={isFavorite ? "HeartSolid" : "Heart"}
            className="w-6 h-6 text-white hover:text-gray-500"
          />
        </button>
        <img
          src={imageUrl}
          onError={() => {
            setImageUrl("/images/no-image.png");
          }}
          alt={`${name} image`}
          className="w-full h-full object-center object-cover rounded-md hover:opacity-80 ease-in-out transition duration-300"
        />
      </div>
      <div className="flex flex-col">
        <header className="flex justify-between items-baseline">
          <div className="flex gap-2 items-center">
            <h6 className="font-semibold">{name}</h6>
            <InfoText>{price}</InfoText>
          </div>
          <div className="flex gap-1 items-center">
            <Icon icon="StarSolid" className="w-3" />
            <span className="text-sm">{rating}</span>
          </div>
        </header>
        <InfoText>
          {categories.map((category, i) => (
            <span key={category.alias}>
              {category.title}
              {i + 1 < categories.length && ", "}
            </span>
          ))}
        </InfoText>
        <InfoText>
          {location.address1}, <strong>{location.city}</strong>
        </InfoText>
      </div>
    </Link>
  );
};
