import createTransporter from "../config/smtp.js"
import generateVerificationEmail from "../utils/generateVerificationEmail.js"

const sendVerificationEmail = async (email, code) => {
  const transporter = await createTransporter()
  const { html, text } = generateVerificationEmail(code)

  await transporter.sendMail({
    from: `[Video Streaming] <${process.env.EMAIL}>`,
    to: email,
    subject: "Código de verificação",
    text,
    html

  })
  return true

}

export default sendVerificationEmail
