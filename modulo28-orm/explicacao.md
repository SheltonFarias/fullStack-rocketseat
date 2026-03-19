# ORM (Object Relation Mapper)

- Ferramenta que permite interação com banco sem SQL

- Manipula dados, tabelas e etc, atraves de linguagem de programação

- Diferença entre ORM X Query Builder => nivel de abstração
  * ORM => converte tabelas do DB em JS
  * Query Builder => Ajuda a criar consultas SQL usando JS

npm i express-async-error@3.1.1

npm i prisma@5.19.1

npx prisma init --datasource-provider postgresql

Incremental x uuid

incremental => id e 1 em 1 Ex: 1, 2, 3 ...

uuid => Baseado num padrão de hash

npx prisma migrate dev

npx prisma db seed // comando para criar seed(mapear o banco)