import { google } from "googleapis"

const getOAuth2Client = () => {
  const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI

  )
  oAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN

  })

  return oAuth2Client

}

export default getOAuth2Client
