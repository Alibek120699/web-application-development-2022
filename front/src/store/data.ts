import { Product } from "./types";

const desktops: Product[] = [
  {
    name: "Lenovo Legion 5",
    description: "Ryzen5 4600H",
    price: 500_000,
    oldPrice: 600_000,
    imageUrl:
      "https://pictures.r46.technodom.kz/resize-images/180/74fd3b613553b97107bc4502752749/2388434452487002997.jpg",
    category: "desktops",
  },
];

const laptops: Product[] = [
  {
    name: "Lenovo Legion 5",
    description: "Ryzen5 4600H",
    price: 500_000,
    oldPrice: 600_000,
    imageUrl:
      "https://pictures.r46.technodom.kz/resize-images/180/74fd3b613553b97107bc4502752749/2388434452487002997.jpg",
    category: "laptops",
  },
];

const smartphones: Product[] = [
  {
    name: "Samsung Galaxy A53",
    description: "Android Smartphone",
    price: 500_000,
    oldPrice: 600_000,
    imageUrl:
      "https://pictures.r46.technodom.kz/resize-images/180/74fd3b613553b97107bc4502752749/2388434452487002997.jpg",
    category: "smartphones",
  },
];

const tablets: Product[] = [
  {
    name: "Lenovo Legion 5",
    description: "Ryzen5 4600H",
    price: 500_000,
    oldPrice: 600_000,
    imageUrl:
      "https://pictures.r46.technodom.kz/resize-images/180/74fd3b613553b97107bc4502752749/2388434452487002997.jpg",
    category: "tablets",
  },
];

export const products: Product[] = [
  ...desktops,
  ...tablets,
  ...smartphones,
  ...laptops,
];
