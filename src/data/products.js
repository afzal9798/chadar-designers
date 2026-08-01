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
    rating: 5,
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
    rating: 5,
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
    rating: 5,
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
    rating: 5,
    image: printedDark,
    description:
    "Premium quality plain light bedsheet made with soft cotton fabric. Comfortable, durable and perfect for daily use.",
  },
];

export default products;