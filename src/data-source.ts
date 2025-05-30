import { DataSource } from 'typeorm';
import { config } from 'dotenv';
config();

import { User } from './user/user.entity';
import { Listing } from './listing/listing.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User, Listing],  // добавяне на User и Listing
  migrations: ['src/migrations/*.ts'],  // миграциите на TS
  synchronize: false,
});
