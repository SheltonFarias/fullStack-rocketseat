import multer from "multer";
import path from "node:path"
import crypto from "node:crypto"

//  ./../../tmp => 
const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
const UPLOADS_FOLDER = path.relative(TMP_FOLDER, "uploads")

// 1KB = 1024 bytes
// 1MB = 1024 * 1024 * 3 bytes elevado a 2 vezes o numero de MB

const MAX_SIZE = 3 // 3MB
const MAX_FILE_SIZE = 1024 * 1024 * MAX_SIZE // 3MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"]

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(resquest, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex")
      const filename = `${fileHash}-${file.originalname}`

      return callback(null, filename)
    },
  }),
}

export default {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
  MAX_SIZE
}