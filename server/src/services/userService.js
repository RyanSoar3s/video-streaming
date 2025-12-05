import { hashPassword, comparePassword } from "../utils/hashPassword.js"
import generateCode from "../utils/generateCode.js"
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.js"
import sendVerificationEmail from "./emailService.js"
import user from "../db/user.js"
import createUser from "../db/createUser.js"
import { OAuth2Client } from "google-auth-library"
import jwt from "jsonwebtoken"

const userService = {
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

    const userBD = await user.findOne({ email })

    const accessToken = generateAccessToken(email)
    const refreshToken = generateRefreshToken(email)

    if (!userBD) {
      createUser({
        email,
        hashPass: null,
        verificationCode: null,
        expiresAt: null,
        verified: true,
        refreshTokens: [ { token: refreshToken } ]

      })

    }

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

      createUser({
        email,
        hashPass: hash,
        verificationCode: code.code,
        expiresAt: code.expires,
        verified: false

      })
      return true

  },
  verify: async (email, code) => {
    const userBD = await user.findOne({ email })

    if (!userBD) return () => new Error("Usuário não encontrado")

    if (userBD.expiresAt < Date.now()) return () => new Error("Código expirado")

    if (userBD.verificationCode !== code) throw new Error("Código está incorreto")

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
    const userBD = await user.findOne({ email })

    if (!userBD) throw new Error("Usuário não existe")

    if (!userBD.verified) throw new Error("Usuário não verificado")

    const hash = userBD.hashPass

    const passIsValid = await comparePassword(pass, hash)

    if (!passIsValid) throw new Error("Senha inválida")

    const accessToken = generateAccessToken(email)
    const refreshToken = generateRefreshToken(email)

    userBD.refreshTokens.push({ token: refreshToken })
    await userBD.save()

    return {
      accessToken,
      refreshToken

    }

  },
  refresh: async (token) => {
    if (!token) throw new Error("Refresh token está ausente")

    const newAccessToken = jwt.verify(token, process.env.REFRESH_SECRET, async (error, payload) => {
      if (error) throw new Error("Refresh token inválido")

      const userBD = await user.findById(payload.id)

      if (!userBD) throw new Error("Usuário não encontrado")

      const found = userBD.refreshTokens.find((t) => t.token === token)

      if (!found) throw new Error("Refresh token revogado")

      const newAccessToken = generateAccessToken(userBD.email)
      const newRefreshToken = generateRefreshToken(userBD.email)

      userBD.refreshTokens = userBD.refreshTokens.filter((t) => t.token !== token)
      userBD.refreshTokens.push(newRefreshToken)
      await user.save()

      return newAccessToken

    })

    return newAccessToken

  },

  logout: (token) => {
    if (!token) throw new Error("Refresh token está ausente")

    jwt.verify(token, process.env.REFRESH_SECRET, async (error, payload) => {
      if (error) throw new Error("Refresh token inválido")

      const userBD = await user.findById(payload.id)

      if (!userBD) throw new Error("Usuário não encontrado")

      const found = userBD.refreshTokens.find((t) => t.token === token)

      if (!found) throw new Error("Refresh token revogado")

      userBD.refreshTokens = userBD.refreshTokens.filter((t) => t.token !== token)

      await user.save()

    })

  }

}

export default userService
