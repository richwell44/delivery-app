export const categories = [
  {
    id: 1,
    name: "Other",
    image: require("../assets/images/categories/icons8-pizza-96.png"),
    products: [
      {
        id: 1,
        name: "A1 maize meal",
        description: "5kg super maize meal",
        price: 25,
        image: require("../assets/images/products/other/A1 maize meal.png"),
      },
      {
        id: 2,
        name: "Clover Milk",
        description: "Low fat milk 1L",
        price: 15,
        image: require("../assets/images/products/other/clover milk.png"),
      },
      {
        id: 3,
        name: "Fatti's & Moni's Macaroni",
        description: "3kg Macaronni",
        price: 35,
        image: require("../assets/images/products/other/fattis and monis macaroni.png"),
      },
      {
        id: 4,
        name: "Fatti's & Moni's Spaghetti",
        description: "500g spaghetti",
        price: 15,
        image: require("../assets/images/products/other/fattis and monis spaghetti.png"),
      },
      {
        id: 5,
        name: "Tastic Rice",
        description: "5kg rice",
        price: 40,
        image: require("../assets/images/products/other/tastic rice.png"),
      },
    ],
  },
  {
    id: 2,
    name: "Snacks",
    image: require("../assets/images/categories_new/snacks.webp"),
    products: [
      {
        id: 6,
        name: "Lays Chips",
        description: "Classic Lays chips",
        price: 15,
        image: require("../assets/images/products/snacks/lays chips.png"),
      },
      {
        id: 7,
        name: "Doritos chips",
        description: "Sweet chilli",
        price: 20,
        image: require("../assets/images/products/snacks/doritos chips.png"),
      },
    ],
  },
  {
    id: 3,
    name: "Dessert",
    image: require("../assets/images/categories_new/dessert.webp"),
    products: [
      {
        id: 8,
        name: "Cadburry Chocolate",
        description: "Milk chocolate",
        price: 15,
        image: require("../assets/images/products/dessert/dairy-milk chocoloate.png"),
      },
      {
        id: 9,
        name: "Farmhouse Ice Cream",
        description: "Vanilla Flavoured Ice Cream",
        price: 20,
        image: require("../assets/images/products/dessert/farmhouse icecream.png"),
      },
    ],
  },
  {
    id: 4,
    name: "Meat",
    image: require("../assets/images/categories_new/meat.png"),
    products: [
      {
        id: 10,
        name: "Richmark chicken",
        description: "2kg frozen mixed chicken portions",
        price: 15,
        image: require("../assets/images/products/meat/chicken mixed portions.png"),
      },
      {
        id: 11,
        name: "Richmark chicken",
        description: "2kg frozen chicken drumsticks",
        price: 20,
        image: require("../assets/images/products/meat/chicken drumsticks.png"),
      },
    ],
  },
  {
    id: 5,
    name: "Frozen",
    image: require("../assets/images/categories_new/frozen.png"),
    products: [
      {
        id: 12,
        name: "Sea Harvest fish fingers",
        description: "600g frozen fish fingers",
        price: 48,
        image: require("../assets/images/products/frozen/fish fingers.png"),
      },
      {
        id: 13,
        name: "McCain French Fries",
        description: "500g frozen french fries",
        price: 50,
        image: require("../assets/images/products/frozen/McCain French Fries.png"),
      },
      {
        id: 14,
        name: "McCain mixed vegetables",
        description: "500g frozen mixed vegetables",
        price: 35,
        image: require("../assets/images/products/frozen/McCain Frozen mixed vegies.png"),
      },
    ],
  },
  {
    id: 6,
    name: "Drinks",
    image: require("../assets/images/categories/icons8-tropical-drink-96.png"),
    products: [
      {
        id: 15,
        name: "Coca Cola",
        description: "300ml original coke",
        price: 15,
        image: require("../assets/images/products/drinks/coke 330ml.png"),
      },
      {
        id: 16,
        name: "O3 water",
        description: "500ml water",
        price: 20,
        image: require("../assets/images/products/drinks/O3 water.png"),
      },
    ],
  },
  {
    id: 7,
    name: "Canned",
    image: require("../assets/images/categories_new/canned.png"),
    products: [
      {
        id: 17,
        name: "Lucky Star pilchards",
        description: "Pilchards in tomatoe sauce",
        price: 15,
        image: require("../assets/images/products/canned/lucky star pilchards.png"),
      },
    ],
  },
  {
    id: 8,
    name: "Fruits",
    image: require("../assets/images/categories_new/fruits.png"),
    products: [
      {
        id: 18,
        name: "bananas",
        description: "4 bananas",
        price: 15,
        image: require("../assets/images/products/fruits/bananas.png"),
      },
      {
        id: 19,
        name: "Mandarine",
        description: "1kg mandarines",
        price: 20,
        image: require("../assets/images/products/fruits/madarin.png"),
      },
    ],
  },
  {
    id: 9,
    name: "Veggies",
    image: require("../assets/images/categories_new/veggies.png"),
    products: [
      {
        id: 20,
        name: "Potatoes",
        description: "5kg potatoes",
        price: 40,
        image: require("../assets/images/products/vegies/potatoes.png"),
      },
      {
        id: 21,
        name: "Tomatoes",
        description: "500g Grape tomatoes",
        price: 20,
        image: require("../assets/images/products/vegies/tomatoes.png"),
      },
    ],
  },
];

export const featured = {
  id: 1,
  title: "Today's specials",
  description: "Get these products at great prices!!! Avalable only today!!",
  featured_deals: [
    {
      id: 1,
      name: "Discount!",
      image: require("../assets/images/today'specials.webp"),
      description: "25% off all these products",
      products: [
        {
          //A1 maize meal
          id: 1,
          product: categories[0].products[0],
        },
        {
          //farmhouse ice creaam
          id: 2,
          product: categories[2].products[1],
        },
        {
          // McCain French Fries
          id: 3,
          product: categories[4].products[1],
        },
      ],
    },
    {
      id: 2,
      name: "Buy two get one FREE!",
      image: require("../assets/images/buy2 get1free.webp"),
      description: "Buy two of any of these products and get one free!",
      items: [
        {
          // lays chips
          id: 1,
          product: categories[1].products[1],
        },
        {
          //clover milk
          id: 2,
          product: categories[0].products[1],
        },
        {
          // lucky star
          id: 3,
          product: categories[6].products[0],
        },
      ],
    },
  ],
};
