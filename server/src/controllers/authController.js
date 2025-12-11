import userService from "../services/userService.js";

const authController = {
  profile: async (req, res) => {
    const token = req.cookies.refresh_token

    try {
      const data = await userService.profile(token)

      return res.json({ message: "Dados acessados com sucesso", data })

    } catch (error) {
      res.status(404).json({ message: error.message })

    }

  },
  accessGoogle: async (req, res) => {
    const { token } = req.body

    try {
      const { accessToken, refreshToken } = await userService.accessGoogle(token)

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000

      })

      res.json({ message: "Conta Google acessada com sucesso", token: accessToken })

    } catch (error) {
      res.status(400).json({ message: error.message })

    }

  },
  register: async (req, res) => {
    const { email, password } = req.body

    try {
      const expiresAt = await userService.register(email, password)

      res.json({ message: "Código enviado com sucesso", expiresAt: String(expiresAt) })

    } catch (error) {
      res.status(400).json({ message: error.message })

    }

  },
  verify: async (req, res) => {
    const { email, code } = req.body
    let isValidToken = true

    try {
      const error = await userService.verify(email, String(code))

      if (typeof error === "function") {
        isValidToken = false
        throw error()

      }

      res.json({ message: "Email verificado com sucesso" })

    }
    catch (error) {
      res.status(400).json({ message: error.message, isValidToken })

    }

  },
  login: async (req, res) => {
    const { email, password } = req.body

    try {
      const { accessToken, refreshToken } = await userService.login(email, password)

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000

      })

      res.json({ message: "Conta acessada com sucesso", token: accessToken })

    } catch (error) {
      res.status(400).json({ message: error.message })

    }

  },
  refresh: async (req, res) => {
    const token = req.cookies.refresh_token

    try {
      const { accessToken, refreshToken } = await userService.refresh(token)

      if (!!refreshToken) {
        res.cookie("refresh_token", refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000

        })

      }

      return res.json({ message: "Access token renovado", token: accessToken })


    } catch (error) {
      res.status(401).json({ message: error.message })

    }

  },
  logout: async (req, res) => {
    const token = req.cookies.refresh_token

    try {
      await userService.logout(token)
      res.clearCookie("refresh_token"),
      res.json({ message: "Logout concluído" })

    } catch (error) {
      res.status(400).json({ message: error.message })

    }

  },
  changeUsername: async (req, res) => {
    const token = req.cookies.refresh_token
    const { newUsername } = req.body

    try {
      const data = { username: await userService.changeUsername(token, newUsername) }

      res.json({ message: "Usuário alterada com sucesso", data })

    } catch (error) {
      res.status(400).json({ message: error.message })

    }

  },
  changePassword: async (req, res) => {
    const token = req.cookies.refresh_token
    const { password, newPassword } = req.body

    try {
      await userService.changePassword(token, password, newPassword)

      res.json({ message: "Senha alterada com sucesso" })

    } catch (error) {
      res.status(400).json({ message: error.message })

    }

  },
  delete: async (req, res) => {
    const token = req.cookies.refresh_token

    try {
      await userService.delete(token)

      res.clearCookie("refresh_token", { httpOnly: true, sameSite: "strict", secure: true })

      res.json({ message: "Conta deletada com sucesso" })

    } catch (error) {
      res.status(400).json({ message: error.message })

    }

  }

}

export default authController
