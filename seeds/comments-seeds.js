

const { Comment } =require ('../models');
const commentData = [
    {
        user_id: 3,
        post_id: 3,
        comment_text: "Super Useful and helped me survive it"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Yeah I think you need to add more points"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Sounds like you didnt survive"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I like the work you've done"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Wow this guy knows what hes talking about"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments