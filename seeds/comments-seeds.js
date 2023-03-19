

const { Comment } =require ('../models');
const commentData = [
    {
        user_id: 3,
        post_id: 1,
        comment_content: "It's a great choice!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_content: "Would definitely recommend it, steamlined the process for me."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_content: "Look at my post on the subject."
    },
    {
        user_id: 3,
        post_id: 3,
        comment_content: "Determination and a positive attitude will get you through it."
    },
    {
        user_id: 3,
        post_id: 3,
        comment_content: "Use the resources available to you, the TAs and instructors are there to help you."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments