export type Category = "laptops" | "tablets" | "smartphones" | "desktops";

export type Product = {
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
  category: Category;
};
