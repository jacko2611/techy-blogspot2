const { Post } =require ('../models');
const postData = 
[
  {
    title: "Learn to use React",
    content: "A tutorial on how to use React.js and implement it into your apps. There 5 steps and videos to watch as you learn the technology that will make your dev skills sharper.",
    user_id: 3
  },
  {
    title: "ES6 VS ES7",
    content: "Whats the difference? If you ever thought the subtleties of updated and newer tech would make or break your app, then this post is for you",
    user_id: 1
  },
  {
    title: "Survive Bootcamp",
    content: "OK, you made into bootcamp now how to survive. I have listed 3 main category's that will help any new student get through the rigors of boot camp, 1. Time, 2. Curiosity, 3.Drive",
    user_id: 2
  },
]
 const seedPosts = () => Post.bulkCreate(postData);

 module.exports = seedPosts