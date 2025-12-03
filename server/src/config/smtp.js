import nodemailer from "nodemailer"
import getOAuth2Client from "./oauth.js"

const createTransporter = async () => {
  const oAuth2Client = getOAuth2Client()
  const accessToken = await oAuth2Client.getAccessToken()

  return nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken.token

    }

  })

}

export default createTransporter
