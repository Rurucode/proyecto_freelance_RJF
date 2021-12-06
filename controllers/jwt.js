const jwt = require("jsonwebtoken");




const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const data = jwt.verify(token, process.env.jwt_secret);
        req.userEmail = data.user.email;
        req.userRole = data.user.role;
        return next();
    } catch {
        return res.sendStatus(403);
    }
};

const logout = (req, res) => {
    return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out 😏 🍀" });
};

const protected = (req, res) => {
    return res.json({ user: { email: req.userEmail, administrador: req.userRole } });
};
  


const jsonwebtoken = {
    authorization,
    logout,
    protected
}


module.exports = jsonwebtoken;

