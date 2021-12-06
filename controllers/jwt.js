const jwt = require("jsonwebtoken"); //Cargo Jwt

// Middelware que comprueba si existe token.
const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, process.env.jwt_secret); //Lee el token.
        req.userEmail = data.user.email;
        req.userRole = data.user.role;
        return next();
    } catch {
        return res.sendStatus(403);
    }
};

// Borra las cookies
const logout = (req, res) => {
    return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out 😏 🍀" });
};

// Lee la informacion almacenada en la cookie
const protected = (req, res) => {
    return res.json({ user: { email: req.userEmail, administrador: req.userRole } });
};
  


const jsonwebtoken = {
    authorization,
    logout,
    protected
}


module.exports = jsonwebtoken;

