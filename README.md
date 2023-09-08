## Description

Este projeto foi desenvolvido com foco voltado para o E-commerce onde o intuito é receber um arquivo CSV, fazer as devidas verificações e tratativas de dados, para que assim possa fazer a atualização nas tabelas de do banco de dados.

## Environment variables

Configure as variáveis de ambiente como demonstradas no arquivo "env.example".

```bash
DATABASE_URL="protocol//[hosts][/database]"
DATABASE_PASSWORD="yourdbpassword"
```

## Installation

```bash
$ npm install
```

## Create Tables

Execute o seguinte comando para que as tabelas sejam criadas no banco de dados:

```bash
$ npx prisma migrate dev
```

## Insert data in Data Base

Como o projeto foi desenvolvido na premissa que já existe um banco de dados, para popular as tabelas será nescessário inserir os dados de forma manual em um script SQL. Exemplo:

```bash
INSERT INTO products VALUES (16,'AZEITE  PORTUGU�S  EXTRA VIRGEM GALLO 500ML',18.44,20.49);
INSERT INTO products VALUES (18,'BEBIDA ENERG�TICA VIBE 2L',8.09,8.99);
INSERT INTO products VALUES (19,'ENERG�TICO  RED BULL ENERGY DRINK 250ML',6.56,7.29);
INSERT INTO products VALUES (20,'ENERG�TICO RED BULL ENERGY DRINK 355ML',9.71,10.79);
INSERT INTO products VALUES (21,'BEBIDA ENERG�TICA RED BULL RED EDITION 250ML',10.71,11.71);
INSERT INTO products VALUES (22,'ENERG�TICO  RED BULL ENERGY DRINK SEM A��CAR 250ML',6.74,7.49);
INSERT INTO products VALUES (23,'�GUA MINERAL BONAFONT SEM G�S 1,5L',2.15,2.39);
INSERT INTO products VALUES (24,'FILME DE PVC WYDA 28CMX15M',3.59,3.99);
INSERT INTO products VALUES (26,'ROLO DE PAPEL ALUM�NIO WYDA 30CMX7,5M',5.21,5.79);
INSERT INTO products VALUES (1000,'BEBIDA ENERG�TICA VIBE 2L - 6 UNIDADES',48.54,53.94);
INSERT INTO products VALUES (1010,'KIT ROLO DE ALUMINIO + FILME PVC WYDA',8.80,9.78);
INSERT INTO products VALUES (1020,'SUPER PACK RED BULL VARIADOS - 6 UNIDADES',51.81,57.00);
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - [Pedro Alcântara](https://github.com/PedroAlcantaraM)

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
