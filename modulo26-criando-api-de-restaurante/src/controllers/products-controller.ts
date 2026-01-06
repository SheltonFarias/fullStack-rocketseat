import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex"
import { z } from "zod"

class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "Ok" });
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0, { message: "value must be greater than 0" }),
      })

      await knex("products").insert()

      return response.status(201).json({ message: "Created", name, price });
    } catch (error) {
      next(error);
    }
  }
}

export { ProductController };
