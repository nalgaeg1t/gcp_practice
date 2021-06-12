const jwt = require('../modules/jwt');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const authUtil = {
  checkToken: async (req, res, next) => {
    let token = req.headers.token;
    console.log(token);
    if (!token) return res.json({success: false, status: "no token"});

    const id = await jwt.verify(token);

    if (id === TOKEN_EXPIRED) return res.json(false);

    if (id === TOKEN_INVALID) return res.json(false);

    if (ud === undefined) return res.json(false);

    req.id = id;
    next();
  }
}

module.exports = authUtil;