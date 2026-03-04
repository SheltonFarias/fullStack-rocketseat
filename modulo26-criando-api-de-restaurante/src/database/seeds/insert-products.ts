import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { name: "teste", price: 10},
        { name: "teste1", price: 100},
        { name: "teste2", price: 1000},
        { name: "teste3", price: 15},
        { name: "teste4", price: 25},
    ]);
};


/* npm run knex -- seed:run  => vair criar o registro acima*/

/* npm run knex -- migrate:make create-tables => criar migrate de criação de tabela */

/* npm run knex -- migrate:latest vai criar a ultima migrate(no caso tables) */
