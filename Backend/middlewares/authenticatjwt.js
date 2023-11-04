import jwt from "jsonwebtoken"

const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, id) => {
        if (err) {
          return res.sendStatus(403);
        }
        req._id = id.userId;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  };


export default authenticateJwt;