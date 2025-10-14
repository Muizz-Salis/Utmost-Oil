export interface Product {
  id: string
  name: string
  size: string
  price: number
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: "palm-oil-1l",
    name: "Premium Palm Oil",
    size: "1 Liter",
    price: 2500,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/w_500,h_500,c_fill/v1760364758/Utmost_1_e7mjxf.png",
    description: "Pure organic palm oil, perfect for cooking and frying",
  },
  {
    id: "palm-oil-2l",
    name: "Premium Palm Oil",
    size: "2 Liters",
    price: 4800,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/w_500,h_500,c_fill/v1760364757/Utmost_2_szfrqh.png",
    description: "Family size organic palm oil for everyday cooking",
  },
  {
    id: "palm-oil-5l",
    name: "Premium Palm Oil",
    size: "5 Liters",
    price: 11500,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1760368996/Utmost_3_-_resized_m3qpff.png",
    description: "Large container for commercial or bulk home use",
  },
  {
    id: "palm-oil-10l",
    name: "Premium Palm Oil",
    size: "10 Liters",
    price: 22000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/w_500,h_500,c_fill/v1760364757/Utmost_-_10L_b2bulf.png",
    description: "Commercial size for restaurants and bulk buyers",
  },
  {
    id: "palm-oil-20l",
    name: "Premium Palm Oil",
    size: "20 Liters",
    price: 42000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1760434555/Utmost_-_25L_resized_yuk8va.png",
    description: "Extra large container for commercial operations",
  },
  {
    id: "palm-oil-25l",
    name: "Premium Palm Oil",
    size: "25 Liters",
    price: 52000,
    image: "",
    description: "Bulk size for large-scale commercial use",
  },
]