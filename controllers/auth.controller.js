const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtKey = process.env.JSON_TOKEN;
const {getUserByUserName} = require('../controllers/user.controller');


async function login(user) {
    const { username, password } = user;
  
    if (username && password) {
      try {
        const currentUser = await getUserByUserName(username);
        console.log("currentUser", currentUser);
        if (!currentUser) {
          return {
            success: false,
            msg: "Incorrect username and/or password",
          };
        }
        const validation = bcryptjs.compareSync(password, currentUser.password);
        if (validation) {
          let token = jwt.sign({ username, email: currentUser.email }, jwtKey, {
            expiresIn: "2h",
          });
  
          return {
            success: true,
            msg: "Logged successfully",
            token,
            data: {
              username: currentUser.username,
              email: currentUser.email,
              roles: currentUser.roles,
            },
          };
        } else {
          return {
            success: false,
            msg: "Incorrect username and/or password",
          };
        }
      } catch (error) {
        return {
          success: false,
          msg: "Internal error",
        };
      }
    } else {
      return {
        success: false,
        msg: "Incorrect username and/or password",
      };
    }
}

module.exports = {login}