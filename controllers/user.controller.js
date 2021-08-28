//const User = require('../models/user');
const {getDbRef} = require('../lib/mongo');
const COLLECTION_NAME = 'users'

const getAllUsers = async () => {
    const products = await getDbRef().collection(COLLECTION_NAME).find({}).toArray();
    return products;
}

 /* const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error(`Error -> ${error}`)
    }
};

const addUser = async (user) => {
    try {
        const userSaved = await User.create(user);
        return userSaved;
    } catch (error) {
        throw new Error(`Error -> ${error}`)
    }
}  */


module.exports = {getAllUsers};