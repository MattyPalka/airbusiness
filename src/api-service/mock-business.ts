export interface BusinessDetails {
  id: number;
  name: string;
  imageSrc: string;
  info: [string, string];
  rating: string;
  price: {
    value: number;
    currency: string;
  };
}

export const mockApiResponse: BusinessDetails[] = [
  {
    id: 1,
    rating: "5.4",
    imageSrc: "https://placeimg.com/640/480/any",
    name: "Super biznes",
    price: { value: 25.45, currency: "PLN" },
    info: ["kup tu", "nie tam"],
  },
  {
    id: 2,
    rating: "5.4",
    imageSrc: "https://placeimg.com/640/480/architecture",
    name: "biznes",
    price: { value: 25.45, currency: "EUR" },
    info: ["kup tu", "nie tam"],
  },
  {
    id: 3,
    rating: "5.4",
    imageSrc: "https://placeimg.com/640/480/any",
    name: "Żabka",
    price: { value: 25.45, currency: "PLN" },
    info: ["kup tu", "nie tam"],
  },
  {
    id: 4,
    rating: "5.4",
    imageSrc: "https://placeimg.com/640/480/nature",
    name: "Biedronka",
    price: { value: 24.45, currency: "PLN" },
    info: ["kup tu", "nie tam"],
  },
  {
    id: 5,
    rating: "5.4",
    imageSrc: "https://placeimg.com/640/480/any",
    name: "Super biznes",
    price: { value: 15, currency: "PLN" },
    info: ["kup tu", "nie tam"],
  },
  {
    id: 5,
    rating: "5.4",
    imageSrc: "https://placeimg.com/640/480/any",
    name: "Lidl",
    price: { value: 111, currency: "PLN" },
    info: ["kup tu", "nie tam"],
  },
];
