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
  cli: {
    migrationsDir: '/src/infrastructure/database/migrations',
  },
  entities: ['src/**/*.orm-entity.ts'],
  migrations: ['src/**/migrations/*.ts'],
  autoLoadEntities: true,
  migrationsTableName: 'migrations',
  connectTimeoutMS: 2000,
  logging: ['error', 'migration', 'schema'],
};
