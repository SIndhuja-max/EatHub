// src/data.js
export const CUISINES = [
  { id: 1, name: 'Lunch', icon: '🍲' },
  { id: 2, name: 'Breakfast', icon: '🥞' },
  { id: 3, name: 'Snacks', icon: '🍟' },
  { id: 4, name: 'Dinner', icon: '🍽' },
  { id: 5, name: 'Healthy Bowls', icon: '🥗' },
  { id: 6, name: 'Desserts', icon: '🍰' },
];

export const DISHES = [
  { id: 101, name: 'Paneer Bowl', brand: 'SpiceBox', price: 8.99, isVeg: true, cuisine: 'Dinner', rating: 4.5, ingredients: 'Paneer, Rice, Gravy', image: 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/mumbai-style-paneer-garlic-rice-bowl-6c7347b3.jpg' },
  { id: 102, name: 'Chicken Combo', brand: 'NoodleHub', price: 9.49, isVeg: false, cuisine: 'Lunch', rating: 4.7, ingredients: 'Chicken, Rice, Salad', image: 'https://th.bing.com/th/id/R.537359eb5ded830b45d75b7c459e9326?rik=m5B4tUVKnDPfYA&riu=http%3a%2f%2fboontongkee.com.sg%2fwp-content%2fuploads%2f2015%2f06%2fCombo-7-1024x768.jpg&ehk=qp5UZD%2bIKQa9SSmaooQoLNp2UZv5yJY3%2bJliUrE%2bCPU%3d&risl=&pid=ImgRaw&r=0' },
  { id: 103, name: 'Veg Thali', brand: 'SpiceBox', price: 8.49, isVeg: true, cuisine: 'Lunch', rating: 4.2, ingredients: 'Roti, Dal, Sabzi, Rice', image: 'https://imgmedia.lbb.in/media/2022/05/628d02abb244e5600088c718_1653408427183.jpg' },
  { id: 104, name: 'Aloo Paratha', brand: 'SpiceBox', price: 5.99, isVeg: true, cuisine: 'Breakfast', rating: 4.0, ingredients: 'Potato-stuffed bread', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/03/AlooParatha.webp' },
  { id: 105, name: 'Grilled Chicken Salad', brand: 'FitFuel', price: 10.99, isVeg: false, cuisine: 'Healthy Bowls', rating: 4.9, ingredients: 'Chicken breast, Lettuce, Vinaigrette', image: 'https://tse3.mm.bing.net/th/id/OIP.a1BumSOW1pFhokz3gkMaiAHaLH?w=820&h=1230&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 106, name: 'Chicken Biryani', brand: 'SpiceBox', price: 11.99, isVeg: false, cuisine: 'Dinner', rating: 4.6, ingredients: 'Basmati rice, Chicken, Spices', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg' },
  { id: 107, name: 'Tofu Stir Fry', brand: 'NoodleHub', price: 7.99, isVeg: true, cuisine: 'Lunch', rating: 4.3, ingredients: 'Tofu, Noodles, Veggies', image: 'https://tse2.mm.bing.net/th/id/OIP.qo76wZhc4hscG91m9zbcowHaLG?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 108, name: 'Idly', brand: 'SpiceBox', price: 7.99, isVeg: true, cuisine: 'Breakfast', rating: 4.5, ingredients: 'Idly, chutney, Sambar', image: 'https://tse3.mm.bing.net/th/id/OIP.YSXQKUObtizLIxKiwRovMwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 109, name: 'Noodels', brand: 'SpiceBox', price: 5.99, isVeg: true, cuisine: 'Snacks', rating: 4.4, ingredients: 'Noodels', image: 'https://www.tasteofhome.com/wp-content/uploads/2018/08/Edamame-and-Soba-Noodle-Bowl_EXPS_SDON18_195068_B06_15_5b.jpg' },
  { id: 110, name: 'Dosa', brand: 'SpiceBox', price: 6.99, isVeg: true, cuisine: 'Breakfast', rating: 4.2, ingredients: 'Dosa, chutney, Sambar', image: 'https://tse2.mm.bing.net/th/id/OIP.AAEh5BmBs2IZ7HQRNVG2pwHaFo?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 111, name: 'Cookies combo', brand: 'SpiceBox', price: 4.99, isVeg: true, cuisine: 'Snacks', rating: 4.4, ingredients: 'Cookies', image: 'https://tse4.mm.bing.net/th/id/OIP.HehTWM9EwHdQou5GvzH48AHaDt?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 112, name: 'Creme Burlee', brand: 'SpiceBox', price: 3.99, isVeg: true, cuisine: 'Desserts', rating: 4.7, ingredients: 'Creme Burlee', image: 'https://simplyhomecooked.com/wp-content/uploads/2023/01/creme-brulee-recipe-6.jpg' },
  { id: 113, name: 'Tiramisu', brand: 'SpiceBox', price: 4.99, isVeg: true, cuisine: 'Desserts', rating: 4.4, ingredients: 'Tiramisu', image: 'https://www.alsothecrumbsplease.com/wp-content/uploads/2020/09/Authentic-Tiramisu-Recipe-17-1.jpg' },
];