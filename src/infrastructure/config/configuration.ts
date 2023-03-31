import { getOsPath, getOsEnvVar } from '../utils/env.util';

export const configuration = () => ({
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  database: {
    ssl: false,
    host: getOsEnvVar('TYPEORM_DATABASE_HOST'),
    port: getOsEnvVar('TYPEORM_DATABASE_PORT'),
    username: getOsEnvVar('TYPEORM_DATABASE_USERNAME'),
    database: getOsEnvVar('TYPEORM_DATABASE_NAME'),
    password: getOsEnvVar('TYPEORM_DATABASE_PASSWORD'),
    entities: getOsPath(getOsEnvVar('TYPEORM_ENTITIES')),
    migrations: getOsPath(getOsEnvVar('TYPEORM_MIGRATIONS')),
    migrationsDir: getOsPath(getOsEnvVar('TYPEORM_MIGRATIONS_DIR')),
    logging: ['error'],
  },
});
