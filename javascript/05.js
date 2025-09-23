import axios from "axios";
// const terminalWidth = process.stdout.columns;
// const border = "=".repeat(terminalWidth);
const BASE_URL = "https://dummyjson.com";

// TODO: 모든 댓글 목록 조회

/* 출력 결과
{
  "comments": [
    {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 242,
      "likes": 3,
      "user": {
        "id": 105,
        "username": "emmac",
        "fullName": "Emma Wilson"
      }
    },
    ...
  ]
}
*/
const getAllComments = async () => {
  const res = await axios.get(`${BASE_URL}/comments`);
  const data = res["data"];
  console.log(data);
};
// getAllComments();
//===================================================================================================

// TODO: ID가 6인 게시글의 댓글 조회

/* 출력 결과
{
  "comments": [
    {
      "id": 15,
      "body": "You've shown so much growth!",
      "postId": 6, // post id is 6
      "likes": 2,
      "user": {
        "id": 17,
        "username": "evelyns",
        "fullName": "Evelyn Sanchez"
      }
    }
  ],
  "total": 1,
  "skip": 0,
  "limit": 1
}
*/

const getCommentById = async (n) => {
  const res = await axios.get(`${BASE_URL}/comments/post/${n}`);
  const data = res["data"];
  console.log(data);
};
// getCommentById(6);

//===================================================================================================

// TODO: 랜덤 할일 조회

/* 출력 결과
{
  // random result, will be changed on every call to /random
  "id": 127,
  "todo": "Prepare a dish from a foreign culture",
  "completed": false,
  "userId": 7
}
*/

const getTodoByRandom = async () => {
  const res = await axios.get(`${BASE_URL}/todos/random`);
  const data = res["data"];
  console.log(data);
};
// getTodoByRandom();
//===================================================================================================

// TODO: 상품 종류 목록 조회

/* 출력 결과
[
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  ...
]
*/
const getProductCategoryList = async () => {
  const res = await axios.get(`${BASE_URL}/products/category-list`);
  const data = res["data"];
  console.log(data);
};
// getProductCategoryList();
//===================================================================================================

// TODO: 랜덤 인용문(quote) 조회

/* 출력 결과
{
  // random result, will change on every call to /random
  "id": 62,
  "quote": "If you want to lift yourself up, lift up someone else.",
  "author": "Booker T. Washington"
}
*/
const getQuoteByRandom = async () => {
  const res = await axios.get(`${BASE_URL}/quotes/random`);
  const data = res["data"];
  console.log(data);
};
// getQuoteByRandom();
//===================================================================================================
// TODO: Beef 태그 요리법(recipes) 조회

/* 출력 결과 (8번부터 나와야 함)
{
  recipes: [
    {
      id: 11,
      name: 'Chicken Biryani',
      ingredients: [Array],
      instructions: [Array],
      prepTimeMinutes: 30,
      cookTimeMinutes: 45,
      servings: 6,
      difficulty: 'Medium',
      cuisine: 'Pakistani',
      caloriesPerServing: 550,
      tags: [Array],
      userId: 133,
      image: '<https://cdn.dummyjson.com/recipe-images/11.webp>',
      rating: 5,
      reviewCount: 32,
      mealType: [Array]
    },
    ...
  ],
  total: 7,
  skip: 0,
  limit: 7
}
*/

const getRecipeByTag = async (n) => {
  const res = await axios.get(`${BASE_URL}/recipes/tag/${n}`);
  const data = res["data"];
  // console.log(data);
  console.log(JSON.stringify(data, null, 2));
};
// getRecipeByTag("beef");
//===================================================================================================

// TODO: 가격(price) 내림차순(desc) 상품 목록 조회
/* 출력 결과
{
  products: [
    {
      id: 170,
      title: 'Durango SXT RWD',
      description: 'The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.',
      category: 'vehicle',
      price: 36999.99,
      discountPercentage: 16.44,
      rating: 4.07,
      stock: 95,
      tags: [Array],
      brand: 'Dodge',
      sku: 'VEH-DOD-DUR-170',
      weight: 1,
      dimensions: [Object],
      warrantyInformation: '2 year warranty',
      shippingInformation: 'Ships in 1 month',
      availabilityStatus: 'In Stock',
      reviews: [Array],
      returnPolicy: '30 days return policy',
      minimumOrderQuantity: 1,
      meta: [Object],
      images: [Array],
      thumbnail: '<https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp>'
    },
    {
      id: 168,
      title: 'Charger SXT RWD',
      description: 'The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.',
      category: 'vehicle',
      price: 32999.99,
      discountPercentage: 8.23,
      rating: 2.58,
      stock: 57,
      tags: [Array],
      brand: 'Dodge',
      sku: 'VEH-DOD-CHA-168',
      weight: 6,
      dimensions: [Object],
      warrantyInformation: '1 month warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [Array],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 1,
      meta: [Object],
      images: [Array],
      thumbnail: '<https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp>'
    },
    ...
  ],
  total: 194,
  skip: 0,
  limit: 30
}
*/

const getPriceByDesc = async () => {
  const res = await axios.get(`${BASE_URL}/products?sortBy=price&order=desc`);
  const data = res["data"];
  console.log(data);
};
// getPriceByDesc();
//===================================================================================================

// TODO: id가 6인 유저의 장바구니(cart) 조회

/* 출력 결과
{
  carts: [
    {
      id: 24,
      products: [Array],
      total: 1749.9,
      discountedTotal: 1594.33,
      userId: 6,
      totalProducts: 3,
      totalQuantity: 10
    }
  ],
  total: 1,
  skip: 0,
  limit: 1
}
*/

const getCartByUserId = async (n) => {
  const res = await axios.get(`${BASE_URL}/carts/user/${n}`);
  const data = res["data"];
  console.log(data);
};
getCartByUserId(6);
