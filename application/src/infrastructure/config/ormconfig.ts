import { config } from 'dotenv';
import { get } from 'env-var';

config();

export const typeormConfig = {
  type: 'postgres',
  host: get('DB_HOST').required().asString(),
  port: get('DB_PORT').required().asIntPositive(),
  username: get('DB_USERNAME').required().asString(),
  password: get('DB_PASSWORD').required().asString(),
  database: get('DB_NAME').required().asString(),
  entities: [],
  autoLoadEntities: true,
  connectTimeoutMS: 2000,
  logging: ['error', 'migration', 'schema'],
};
