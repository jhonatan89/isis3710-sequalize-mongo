let jwt = require("jsonwebtoken");
const jwtKey = process.env.JSON_TOKEN;

// Función encargada de realizar la validación del token y que es directamente consumida por server.js
const checkToken = (req, res, next) => {
  // Extrae el token de la solicitud enviado a través de cualquiera de los dos headers especificados
  // Los headers son automáticamente convertidos a lowercase
  //let token = req.headers["x-access-token"] || req.headers["authorization"];
  let token = req.cookies.token;
  console.log("token", token);

  // Si existe algún valor para el token, se analiza
  // de lo contrario, un mensaje de error es retornado
  if (token) {
    // Si el token incluye el prefijo 'Bearer ', este debe ser removido
    /* if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length); */
    // Llama la función verify del paquete jsonwebtoken que se encarga de realizar la validación del token con el secret proporcionado
    jwt.verify(token, jwtKey, (err, decoded) => {
      // Si no pasa la validación, un mensaje de error es retornado
      // de lo contrario, permite a la solicitud continuar
      if (err) {
        return res.json({
          success: false,
          message: "Token is not valid",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
    //}
  } else {
    return res.status(401).json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

module.exports = {
  checkToken,
};
