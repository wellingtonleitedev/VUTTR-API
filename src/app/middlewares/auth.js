import jwt from 'jsonwebtoken'
import promisify from 'util'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provider" });
  }

  const [, token] = authHeader.split(' ');

  console.log(token);

  try {
    const decoded = await promisify(jwt.verify)(token, '869556ee5325c14844bff4c4f2b82ee1');
    console.log(decoded);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalid" });
  }
}
