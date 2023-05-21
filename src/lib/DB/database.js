// @ts-nocheck
import { Client, Pool } from 'pg';
import { PGPASSWORD, PGHOST, PGPORT, PGDATABASE, PGUSER } from '$env/static/private';

const pool = new Pool({
	host: PGHOST,
	user: PGUSER,
	database: PGDATABASE,
	password: PGPASSWORD,
	port: PGPORT
});

export default {
	query: async (text, params, callback) => {
		return pool.query(text, params, callback);
	}
};
