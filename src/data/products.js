import plainLight from "../assets/product/plain-light.jpg";
import plainDark from "../assets/product/plain-dark.jpg";
import printedLight from "../assets/product/printed-light.jpg";
import printedDark from "../assets/product/printed-dark.jpg";

const products = [
  {
    id: 1,
    name: "Plain Light Bedsheet",
    price: 550,
    category: "Plain",
    type: "Light",
    rating: 4.8,
    reviews: 124,
    stock: "In Stock",
    oldPrice: 799,
    discount: 31,
    badge: "Best Seller",
    image: plainLight,
    description:
    "Premium quality plain light bedsheet made with soft cotton fabric. Comfortable, durable and perfect for daily use.",
  },
  {
    id: 2,
    name: "Plain Dark Bedsheet",
    price: 600,
    category: "Plain",
    type: "Dark",
    rating: 4.9,
    reviews: 194,
    stock: "In Stock",
    oldPrice: 850,
    discount: 29,
    badge: "New Arrival",
    image: plainDark,
    description:
    "Premium quality plain light bedsheet made with soft cotton fabric. Comfortable, durable and perfect for daily use.",    
  },
  {
    id: 3,
    name: "Printed Light Bedsheet",
    price: 700,
    category: "Printed",
    type: "Light",
    rating: 4.6,
    reviews: 84,
    stock: "In Stock",
    oldPrice: 950,
    discount: 26,
    badge: "Trending",
    image: printedLight,
    description:
    "Premium quality plain light bedsheet made with soft cotton fabric. Comfortable, durable and perfect for daily use.",
  },
  {
    id: 4,
    name: "Printed Dark Bedsheet",
    price: 750,
    category: "Printed",
    type: "Dark",
    rating: 4.8,
    reviews: 104,
    stock: "In Stock",
    oldPrice: 999,
    discount: 25,
    badge: "Premium",
    image: printedDark,
    description:
    "Premium quality plain light bedsheet made with soft cotton fabric. Comfortable, durable and perfect for daily use.",
  },
];

export default products;