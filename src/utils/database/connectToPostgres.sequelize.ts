const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'admin',
  database: 'cats-resort-db',
});

export const PostgreSQL = async () => {
  await client
    .connect()
    .then(() => console.log('Conectado'))
    .catch((err: any) => console.log(err));
};
