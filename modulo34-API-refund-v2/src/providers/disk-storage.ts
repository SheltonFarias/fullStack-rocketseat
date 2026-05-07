import fs from "node:fs"
import path from "node:path"

import uploadconfig from "@/configs/upload"

class DiskStorage {
  async saveFile(file: string) {
    const tmpPath = path.resolve(uploadconfig.TMP_FOLDER, file)
    const destPath = path.resolve(uploadconfig.UPLOADS_FOLDER, file)

    try {
      await fs.promises.access(tmpPath)
    } catch (error) {
      console.log(error)
      throw new Error("Arquivo não encotrado")
    }

    await fs.promises.mkdir(uploadconfig.UPLOADS_FOLDER, { recursive: true })
    await fs.promises.rename(tmpPath, destPath)
  }

  async deleteFile(file:string, type: "tmp" | "upload") {
    const pathFile = type === "tmp" ? uploadconfig.TMP_FOLDER: uploadconfig.UPLOADS_FOLDER

    const filePath = path.resolve(pathFile, file)


    try {
      await fs.promises.stat(filePath)
    } catch {
      return 
    }

    await fs.promises.unlink(filePath)
  }
}

export { DiskStorage }