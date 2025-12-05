import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

if (!ACCESS_SECRET || !REFRESH_SECRET) throw new Error("ACCESS_SECRET or REFRESH_SECRET not found in environment.")

const ACCESS_TIME = "15m";
const REFRESH_TIME = "7d";

const generateAccessToken = (id) => jwt.sign({ id }, ACCESS_SECRET, { expiresIn: ACCESS_TIME })

const generateRefreshToken = (id) => jwt.sign({ id }, REFRESH_SECRET, { expiresIn: REFRESH_TIME })

export {
  generateAccessToken,
  generateRefreshToken

}
