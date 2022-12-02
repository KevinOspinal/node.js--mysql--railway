import { createPool } from 'mysql2/promise'
import {
    DB_HOST,
    DB_PORT,
    DB_name,
    DB_password,
    DB_user
} from './configuracion.js'

export const sql = createPool({
    user: DB_user,
    password: DB_password,
    host: DB_HOST,
    port : DB_PORT,
    database: DB_name
})

