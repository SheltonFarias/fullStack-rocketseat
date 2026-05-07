import { Router } from "express";
import multer from "multer";

import uploadConfig from "@/configs/upload"
import { UploadsContraller } from "@/controllers/uploads-controller";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const uploadsRoutes = Router()
const uploadsController = new UploadsContraller()

const upload = multer(uploadConfig.MULTER)

uploadsRoutes.use(verifyUserAuthorization(["employee"]))
uploadsRoutes.post("/", upload.single("file"), uploadsController.create)


export { uploadsRoutes }