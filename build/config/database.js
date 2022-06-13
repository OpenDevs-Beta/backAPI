"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Url = require('url-parse');
const DATABASE_URL = new Url(Env_1.default.get('DATABASE_URL'));
const databaseConfig = {
    connection: Env_1.default.get('DB_CONNECTION'),
    connections: {
        pg: {
            client: 'pg',
            connection: {
                host: Env_1.default.get('PG_HOST'),
                port: Env_1.default.get('PG_PORT'),
                user: Env_1.default.get('PG_USER'),
                password: Env_1.default.get('PG_PASSWORD', ''),
                database: Env_1.default.get('PG_DB_NAME'),
            },
            migrations: {
                naturalSort: true,
            },
            healthCheck: false,
            debug: false,
        },
        pg_heroku: {
            client: 'pg',
            connection: {
                host: Env_1.default.get('PG_HOST', DATABASE_URL.hostname),
                port: Env_1.default.get('PG_PORT', DATABASE_URL.port),
                user: Env_1.default.get('PG_USER', DATABASE_URL.username),
                password: Env_1.default.get('PG_PASSWORD', DATABASE_URL.password),
                database: Env_1.default.get('PG_DB_NAME', DATABASE_URL.pathname.substr(1)),
                ssl: {
                    rejectUnauthorized: false,
                },
            },
            migrations: {
                naturalSort: true,
                disableRollbacksInProduction: true,
            },
            healthCheck: false,
            debug: false,
        },
    },
};
exports.default = databaseConfig;
//# sourceMappingURL=database.js.map