-- Criar a tabela via codigo
create table products (
    id integer NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NULL DEFAULT 'general'
)

-- adicionar uma coluna
ALTER TABLE products ADD quantity INTEGER NOT NULL

-- Remover uma coluna
ALTER TABLE products DROP COLUMN quantity

-- Renomear um campo
ALTER TABLE products RENAME COLUMN name TO description

-- Renomar a tabela
ALTER TABLE products RENAME TO items

-- Excluir uma tabela
DROP TABLE products

--Seleciona os registros
SELECT * FROM products

-- Inserir dados
INSERT INTO products (name, price) VALUES ('Mouse', 50)

-- Seleciona colunas e a ordem especifica
SELECT price, name FROM products

-- executando o update informando a coluna que vai ser alterado
UPDATE products SET price = 65, category = 'acessory' where id = 1

-- Buscar por partes que contenham o nome informado, usando % no começo ou no final
SELECT * FROM products WHERE name LIKE '%mo%'

-- Seleciona valores diferentes 
SELECT * FROM products WHERE price <> 800

SELECT * FROM products WHERE price > 800

-- Between vai filtrar a faixa de valores
SELECT * FROM products WHERE price BETWEEN 600 AND 1200

-- IN traz os valores selecionados
SELECT * FROM products WHERE price IN (800, 550)

-- Order by vai basear a ordem da tabela da coluna informada, podendo ser ASC ou DESC
SELECT * FROM products ORDER BY price

-- Limit vai informar o limite de registros retornados
SELECT * FROM products ORDER BY price DESC LIMIT 3 -- Vai retornar apenas 3 registros

-- COUNT vai trazer o soma dos registro solicitados
SELECT COUNT(*) FROM products

-- Vai fazer a soma dos valores presentes na colunas
SELECT SUM(price) FROM products

-- AVG vai trazer a media dos resultados de da coluna selecionada
SELECT AVG(price) FROM products WHERE category = 'general'

-- GROUP BY  vai separar por grupos nesse exemplo lista quanto produtos tem em cada categoria
SELECT category COUNT(*) FROM products GROUP BY category



CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
)

INSERT INTO students (name) VALUES ('teste1');
INSERT INTO students (name) VALUES ('teste2');
INSERT INTO students (name) VALUES ('teste3');
INSERT INTO students (name) VALUES ('teste4');
INSERT INTO students (name) VALUES ('teste5');
INSERT INTO students (name) VALUES ('teste6');
INSERT INTO students (name) VALUES ('teste7');
INSERT INTO students (name) VALUES ('teste8');
INSERT INTO students (name) VALUES ('teste9');
INSERT INTO students (name) VALUES ('teste10');
INSERT INTO students (name) VALUES ('teste11');

select * from students

create table courses (
  id integer primary key autoincrement,
  name text not null
)


insert into courses (name) values ('HTML');
insert into courses (name) values ('CSS');
insert into courses (name) values ('JavaScript');
insert into courses (name) values ('TypeScript');
insert into courses (name) values ('Node.js');
insert into courses (name) values ('Git');
insert into courses (name) values ('GitHub');
insert into courses (name) values ('Express.js');
insert into courses (name) values ('Banco de dados');

select * from courses