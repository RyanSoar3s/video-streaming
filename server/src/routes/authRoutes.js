import { Router } from "express"
import auth from "../controllers/authController.js"

const router = Router()

router.post("/google", auth.accessGoogle)
router.post("/register", auth.register)
router.post("/login", auth.login)
router.post("/verify", auth.verify)
router.post("/refresh", auth.refresh)
router.post("/logout", auth.logout)

export default router
