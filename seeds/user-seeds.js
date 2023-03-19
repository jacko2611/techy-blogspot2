const { User } =require ('../models');
const userData = [
    {
        id: 1,
        name: "Jackson",
        email: "jacksonkent70@gmail.com",
        password: "password1"
    },
    {
        id: 2,
        name: "Sal",
        email: "sal@hotmail.com",
        password: "password2"
    },
    {
        id: 3,
        name: "Lernantino",
        email: "lernantino@gmail.com",
        password: "password3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers