const Profile = require('../models/profile.model');
const User = require('../models/user.model');


const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error('something bad happends');
    }
}
const addUser = async (user) => {
    try {
        const userSaved = await User.create(user);
        return userSaved;
    } catch (error) {
        throw new Error('something bad happends');
    }
}

module.exports = {getAllUsers, addUser}


