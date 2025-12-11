import nodemailer from "nodemailer"

const createTransporter = async () => {

  return nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS

    }

  })

}

export default createTransporter
