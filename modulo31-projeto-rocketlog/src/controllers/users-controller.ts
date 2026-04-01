import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma"
import { hash } from "bcrypt"
import { z } from "zod"

class UserController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(2),
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { name, email, password } = bodySchema.parse(request.body)

    const userWithSameEmail = await prisma.user.findFirst({ where: { email } })

    const hashedPassword = await hash(password, 8)

    if(userWithSameEmail) {
      throw new AppError("user with same email already exists")
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    const { password:_, ...userWithoutPassword} = user

    return response.status(201).json(userWithoutPassword)
  }
}

export { UserController }