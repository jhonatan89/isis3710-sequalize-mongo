//const User = require('../models/user');
const {getDbRef} = require('../lib/mongo');
let jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const jwtKey = process.env.JSON_TOKEN;
const COLLECTION_NAME = 'users';

const getAllUsers = async () => {
    const products = await getDbRef().collection(COLLECTION_NAME).find({}).toArray();
    return products;
}

async function getUserByUserName(username) {
    const user = await getDbRef().collection(COLLECTION_NAME).findOne({ username });
    return user;
}

async function createUser(user) {
    try{
        const { username, password, roles, email } = user;
        if(checkIfUsernameExist(username)){
            return {
                success: false, msg: "User is already registered"
            }    
        }

        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        await getDbRef().collection(COLLECTION_NAME).insertOne(user);
        const token = jwt.sign({username, email}, jwtKey);
        return {
            success: true,
            data: {
            username,
            email,
            },
            token
        }
    }catch(error){
        console.log(error)
        return {
            success: false, msg: "Internal error"
        }    
    }
    
}

const checkIfUsernameExist = async (username) => {
    const existUser = await getUserByUserName(username);
    return existUser;
}


module.exports = {getAllUsers, getUserByUserName, createUser};