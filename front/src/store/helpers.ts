import { Category, Product } from "./types";

const laptopImageUrls = [""];
const desktopImageUrls = [""];
const smartphoneImageUrls = [""];
const tabletImageUrls = [""];

export function generateProductList(category: Category, size: number = 10) {
  const products: Product[] = [];
  for (let i = 0; i < size; i++) {
    products.push({
      name: `${category} ${i}`,
      description: `${category} ${i} description`,
      imageUrl: "",
      price: 400_000,
      oldPrice: 500_000,
      category,
    });
  }

  return products;
}
