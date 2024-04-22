const users = [
    {
        name: "John Doe",
        email: "jdoe@mail.com",
    },
];

module.exports = {
    getUsers: async () => {
        return users;
    },

    createUser: async (name, email) => {
        users.push({ name,email });
        return { name, email };
    },
};