const { User } =require ('../models');
const userData = [
    {
        id: 1,
        username: "compareNsave",
        email: "random@gmail.com",
        password: "password1"
    },
    {
        id: 2,
        username: "survival_tips",
        email: "testing@gmail.com",
        password: "password2"
    },
    {
        id: 3,
        username: "masta_coder",
        email: "coded@gmail.com",
        password: "password3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers