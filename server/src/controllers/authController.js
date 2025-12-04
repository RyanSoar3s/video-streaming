import userService from "../services/userService.js";

const authController = {
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
     await userService.register(email, password)

      res.json({ message: "Código enviado com sucesso" })

    } catch (error) {
      res.status(400).json({ message: error.message })

    }

  },
  verify: async (req, res) => {
    const { email, code } = req.body
    let isValidToken = true

    try {
      const isError = await userService.verify(email, String(code))

      if (typeof isError === "function") {
        isValidToken = false
        throw isError()

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
  refresh: async (res, req) => {
    const token = req.cookies.refresh_token

    try {
      const newAccessToken = await userService.refresh(token)

      return res.json({ message: "Access token renovado", token: newAccessToken })


    } catch (error) {
      res.status(401).json({ message: error.message })

    }

  },
  logout: (req, res) => {
    try {
      const token = req.cookies.refresh_token
      userService.logout(token)
      res.clearCookie("refresh_token"),
      res.json({ message: "Logout concluído" })

    } catch (error) {
      res.status(400).json({ message: error.message })

    }

  }

}

export default authController
