import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true },
  hashPass: { type: String },
  verificationCode: { type: String },
  expiresAt: { type: Date, index: { expires: 0 } },
  verified: { type: Boolean, required: true },
  refreshTokens: [ { token: String, createAt: { type: Date, default: Date.now } } ]

}, { timestamps: true })

export default mongoose.model("users", userSchema)
