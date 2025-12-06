import { Router } from "express"
import auth from "../controllers/authController.js"

const router = Router()

router.get("/profile", auth.profile)
router.post("/google", auth.accessGoogle)
router.post("/register", auth.register)
router.post("/login", auth.login)
router.post("/verify", auth.verify)
router.post("/refresh", auth.refresh)
router.post("/logout", auth.logout)
router.put("/change-username", auth.changeUsername)
router.put("/change-password", auth.changePassword)
router.delete("/delete", auth.delete)

export default router
