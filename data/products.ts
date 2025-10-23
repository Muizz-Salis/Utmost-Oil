export interface Product {
  id: string
  name: string
  size: string
  price: number
  image: string
  description: string
  category: string
}

export const products: Product[] = [
  {
    id: "palm-oil-1l",
    name: "Premium Palm Oil",
    size: "5 Liters",
    price: 13000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/w_500,h_500,c_fill/v1760364758/Utmost_1_e7mjxf.png",
    description: "Pure organic palm oil, perfect for cooking and frying",
    category: "palm-oil",
  },

  {
    id: "palm-oil-2l",
    name: "Premium Palm Oil",
    size: "2 Litres",
    price: 2000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/w_500,h_500,c_fill/v1760364757/Utmost_2_szfrqh.png",
    description: "Family size organic palm oil for everyday cooking",
    category: "palm-oil",
  },

  {
    id: "palm-oil-5l",
    name: "Premium Palm Oil",
    size: "5 Litres",
    price: 13000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1760368996/Utmost_3_-_resized_m3qpff.png",
    description: "Large container for commercial or bulk home use",
    category: "palm-oil",
  },
  {
    id: "palm-oil-10l",
    name: "Premium Palm Oil",
    size: "5 Litres",
    price: 13000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/w_500,h_500,c_fill/v1760364757/Utmost_-_10L_b2bulf.png",
    description: "Commercial size for restaurants and bulk buyers",
    category: "palm-oil",
  },

  {
    id: "palm-oil-25l-blue",
    name: "Premium Palm Oil",
    size: "25 Litres",
    price: 63000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1760454479/Utmost_25L_Blue_r0dxj0.png",
    description: "Commercial size for restaurants and bulk buyers",
    category: "palm-oil",
  },

  {
    id: "palm-oil-ragolis",
    name: "Premium Palm Oil",
    size: "Ragolis 1 Litre",
    price: 1800,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1760453490/Utmost_-_Ragolis_hfe8ig.png",
    description: "Commercial size for restaurants and bulk buyers",
    category: "palm-oil",
  },

  // Groundnut Oil Products
  {
    id: "groundnut-oil-1l",
    name: "Premium Cooking Oil",
    size: "2.5 Litres",
    price: 6000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1761048545/Vegetable_Oil_2.5_Litres_kuic5u.png",
    description: "Pure groundnut oil, ideal for cooking and frying",
    category: "groundnut-oil",
  },
  {
    id: "groundnut-oil-2l",
    name: "Premium Cooking Oil",
    size: "5 Litres",
    price: 12000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1761048538/Vegetabable_Oil_5kg_sxlfuf.png",
    description: "Family size groundnut oil for everyday cooking",
    category: "groundnut-oil",
  },
  {
    id: "groundnut-oil-5l",
    name: "Premium Golden Penny Oil",
    size: "5 Litres",
    price: 17000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1761053033/Golden_Penny_Soya_Oil_4L_ttk3bs.png",
    description: "Large container for commercial or bulk home use",
    category: "groundnut-oil",
  },
  {
    id: "groundnut-oil-10l",
    name: "Premium MOMOS Oil",
    size: "10 Litres",
    price: 64000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1761048540/Momos_Vegetabable_Oil_Keg_l9uasu.png",
    description: "Commercial size for restaurants and bulk buyers",
    category: "groundnut-oil",
  },

  // Others - Rice Products
  {
    id: "rice-50kg",
    name: "Premium Rice",
    size: "50 kg",
    price: 64000,
    image: "https://res.cloudinary.com/dmahzfixo/image/upload/v1761048540/Rice_50kg_exkygd.png",
    description: "High quality rice, perfect for families and events",
    category: "others",
  },
  
]