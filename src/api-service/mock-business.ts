export interface BusinessDetails {
  rating: number;
  price: string;
  phone: string;
  id: string;
  alias: string;
  is_closed: boolean;
  categories: Category[];
  review_count: number;
  name: string;
  url: string;
  coordinates: Coordinates;
  image_url: string;
  location: Location;
  distance: number;
  transactions: string[];
}

export interface Category {
  alias: string;
  title: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  city: string;
  country: string;
  address2: string;
  address3: string;
  state: string;
  address1: string;
  zip_code: string;
}

export const mockApiResponse: BusinessDetails[] = [
  {
    rating: 4,
    price: "$",
    phone: "+14152520800",
    id: "E8RJkjfdcwgtyoPMjQ_Olg",
    alias: "four-barrel-coffee-san-francisco",
    is_closed: false,
    categories: [
      {
        alias: "coffee",
        title: "Coffee & Tea",
      },
    ],
    review_count: 1738,
    name: "Four Barrel Coffee",
    url: "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
    coordinates: {
      latitude: 37.7670169511878,
      longitude: -122.42184275,
    },
    image_url:
      "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
    location: {
      city: "San Francisco",
      country: "US",
      address2: "",
      address3: "",
      state: "CA",
      address1: "375 Valencia St",
      zip_code: "94103",
    },
    distance: 1604.23,
    transactions: ["pickup", "delivery"],
  },
];
