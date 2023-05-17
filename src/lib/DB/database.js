// @ts-nocheck
import { Client } from 'pg';
import {PGPASSWORD,PGHOST,PGPORT,PGDATABASE,PGUSER} from '$env/static/private'


export const client = new Client({
	host: PGHOST,
	port: PGPORT,
	database: PGDATABASE,
	user: PGUSER,
	password:PGPASSWORD
});