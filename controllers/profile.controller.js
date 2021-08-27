const Profile = require('../models/profile.model');
const User = require('../models/user.model');


const addProfile = async (profile) => {
    try {
        const profileSaved = await Profile.create(profile);
        return profileSaved;
    } catch (error) {
        console.log('error->',error)
        throw new Error('something bad happends');
    }
}

const getProfileById = async (id) => {
    try {
        const profile = await Profile.findByPk(id, {
            include: User
        });
        return profile;
    } catch (error) {
        throw new Error('something bad happends');
    }
}

module.exports = { addProfile, getProfileById }


