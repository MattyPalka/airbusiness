import { BusinessDetails } from "../../api-service/mock-business";
import { InfoText } from "../info-text";

interface Props {
  businessDetails: BusinessDetails;
}

export const Tile = ({ businessDetails }: Props) => {
  const { imageSrc, name, rating, info, price } = businessDetails;
  return (
    <div className="grid grid-rows-[repeat(2,_auto)] gap-2 col-span-3 cursor-pointer">
      <div className="aspect-square">
        {/* heart icon */}
        <img
          src={imageSrc}
          alt={`${name} image`}
          className="w-full h-full object-center object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <header className="flex justify-between">
          <h6 className="font-semibold">{name}</h6>
          <div>
            {/* star icon */}
            <span className="text-sm">{rating}</span>
          </div>
        </header>
        {info.map((item, i) => (
          <InfoText key={i}>{item}</InfoText>
        ))}
        <InfoText>
          {price.value} {price.currency}
        </InfoText>
      </div>
    </div>
  );
};
