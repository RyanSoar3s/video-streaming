import jwt from "jsonwebtoken"

const ACCESS_SECRET = process.env.ACCESS_SECRET;

const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization

  if (!auth) return res.status(401).json({ message: "Não autorizado" })

  const token = auth.split(" ")[1]

  try {
    const data = jwt.verify(token, ACCESS_SECRET)
    req.user = data
    next()

  } catch (error) {
    return res.status(401).json({ message: error.message })

  }

}

export default authMiddleware
