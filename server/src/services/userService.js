import { hashPassword, comparePassword } from "../utils/hashPassword.js"
import generateCode from "../utils/generateCode.js"
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.js"
import sendVerificationEmail from "./emailService.js"
import user from "../db/user.js"
import createUser from "../db/createUser.js"
import { OAuth2Client } from "google-auth-library"
import jwt from "jsonwebtoken"
import generateUsername from "../utils/generateUsername.js"

const userService = {
  profile: async (token) => {
    if (!token) throw new Error("Refresh token está ausente")

    let payload

    try {
      payload = jwt.verify(token, process.env.REFRESH_SECRET)

    } catch (_) {
      throw new Error("Refresh token inválido")

    }
    const userDB = await user.findById(payload.id)

    if (!userDB) throw new Error("Usuário não encontrado")

    const username = userDB.username
    const email = userDB.email

    return {
      username,
      email

    }

  },
  accessGoogle: async (token) => {
    if (!token) throw new Error("Token é obrigatório")

    const client = new OAuth2Client(process.env.CLIENT_ID_GOOGLE)

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID_GOOGLE

    })

    const payload = ticket.getPayload()
    const email = payload.email

    if (!email) throw new Error("Token inválido")

    let userDB = await user.findOne({ email })

    if (!userDB) {
      const username = generateUsername()

      userDB = await createUser({
        username,
        email,
        hashPass: null,
        verificationCode: null,
        expiresAt: null,
        verified: true,
        refreshTokens: []

      })

    }

    const userId = userDB._id.toString()

    const accessToken = generateAccessToken(userId)
    const refreshToken = generateRefreshToken(userId)

    userDB.refreshTokens.push({ token: refreshToken })
    await userDB.save();

    return {
      accessToken,
      refreshToken

    }

  },

  register: async (email, password) => {
      const exist = await user.findOne({ email })

      if (!!exist) throw new Error("O usuário já existe")

      const code = generateCode()
      const hash = await hashPassword(password)

      await sendVerificationEmail(email, code.code)

      const username = generateUsername()

      createUser({
        username,
        email,
        hashPass: hash,
        verificationCode: code.code,
        expiresAt: code.expires,
        verified: false

      })

      return true

  },
  verify: async (email, code) => {
    const userDB = await user.findOne({ email })

    if (!userDB) return () => new Error("Usuário não encontrado")

    if (userDB.expiresAt < Date.now()) return () => new Error("Código expirado")

    if (userDB.verificationCode !== code) throw new Error("Código está incorreto")

    await user.updateOne(
      { email },
      {
        $set: { verified: true, verificationCode: null },
        $unset: { expiresAt: "" }
      }
    )

    return true

  },
  login: async (email, pass) => {
    const userDB = await user.findOne({ email })

    if (!userDB) throw new Error("Usuário não existe")

    if (!userDB.verified) throw new Error("Usuário não verificado")

    const hash = userDB.hashPass

    const passIsValid = await comparePassword(pass, hash)

    if (!passIsValid) throw new Error("Senha inválida")

    const userId = userDB._id.toString()
    const accessToken = generateAccessToken(userId)
    const refreshToken = generateRefreshToken(userId)

    userDB.refreshTokens.push({ token: refreshToken })
    await userDB.save()

    return {
      accessToken,
      refreshToken

    }

  },
  refresh: async (token) => {
    if (!token) throw new Error("Refresh token está ausente")

    let payload

    try {
      payload = jwt.verify(token, process.env.REFRESH_SECRET)

    } catch (_) {
      throw new Error("Refresh token inválido")

    }

    const userDB = await user.findById(payload.id);

    if (!userDB) throw new Error("Usuário não encontrado");

    const found = userDB.refreshTokens.find((t) => t.token === token)
    if (!found) throw new Error("Refresh token revogado")

    const newAccessToken = generateAccessToken(userDB._id.toString())
    const newRefreshToken = generateRefreshToken(userDB._id.toString())

    userDB.refreshTokens = userDB.refreshTokens.filter((t) => t.token !== token)
    userDB.refreshTokens.push({ token: newRefreshToken })

    await userDB.save();

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken

    }

  },
  logout: async (token) => {
    if (!token) throw new Error("Refresh token está ausente")

    let payload

    try {
      payload = jwt.verify(token, process.env.REFRESH_SECRET)

    } catch (_) {
      throw new Error("Refresh token inválido")

    }

    const userDB = await user.findById(payload.id)

    if (!userDB) throw new Error("Usuário não encontrado")

    const found = userDB.refreshTokens.find((t) => t.token === token)
    if (!found) throw new Error("Refresh token revogado")

    userDB.refreshTokens = userDB.refreshTokens.filter((t) => t.token !== token)

    await userDB.save()

    return true

  },
  changePassword: async (token, password, newPassword) => {
    if (!token) throw new Error("Refresh token está ausente")

    let payload

    try {
      payload = jwt.verify(token, process.env.REFRESH_SECRET)

    } catch (_) {
      throw new Error("Refresh token inválido")

    }

    const userDB = await user.findById(payload.id)

    if (!userDB) throw new Error("Usuário não encontrado")

    const hash = userDB.hashPass

    const passIsValid = await comparePassword(password, hash)

    if (!passIsValid) throw new Error("Senha incorreta")

    const newPass = hashPassword(newPassword)

    userDB.hashPass = newPass
    await userDB.save()

    return true

  },
  delete: async (token) => {
    if (!token) throw new Error("Refresh token está ausente")

    let payload

    try {
      payload = jwt.verify(token, process.env.REFRESH_SECRET)

    } catch (_) {
      throw new Error("Refresh token inválido")

    }

    const result = await user.deleteOne({ _id: payload.id })

    if (result.deletedCount === 0) throw new Error("Usuário não encontrado")

    return true

  }

}

export default userService
