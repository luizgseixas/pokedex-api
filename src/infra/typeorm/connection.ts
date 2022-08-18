import { createConnection } from 'typeorm';

export const connection = async () => {
  await createConnection().then(() => console.log('Running database!'));
};
