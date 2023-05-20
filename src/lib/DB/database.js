// @ts-nocheck
import { Client, Pool } from 'pg';
import { PGPASSWORD, PGHOST, PGPORT, PGDATABASE, PGUSER } from '$env/static/private';


export const pool = new Pool({
	host: PGHOST,
	user: PGUSER,
	database: PGDATABASE,
	password: PGPASSWORD,
	port: PGPORT
})