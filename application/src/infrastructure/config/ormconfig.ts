import { config } from 'dotenv';
import { get } from 'env-var';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

config();

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: get('DB_HOST').required().asString(),
  port: get('DB_PORT').required().asIntPositive(),
  username: get('DB_USERNAME').required().asString(),
  password: get('DB_PASSWORD').required().asString(),
  database: get('DB_DATABASE').required().asString(),
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  connectTimeoutMS: 2000,
  logging: ['error', 'migration', 'schema'],
};
