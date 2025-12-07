import { Router } from "express"
import auth from "../controllers/authController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router = Router()

router.get("/profile", authMiddleware, auth.profile)
router.post("/google", auth.accessGoogle)
router.post("/register", auth.register)
router.post("/login", auth.login)
router.post("/verify", auth.verify)
router.post("/refresh", auth.refresh)
router.post("/logout", auth.logout)
router.put("/change-username", authMiddleware, auth.changeUsername)
router.put("/change-password", authMiddleware, auth.changePassword)
router.delete("/delete", auth.delete)

export default router
