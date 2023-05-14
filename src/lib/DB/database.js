// @ts-nocheck
import { Client } from 'pg';

export const client = new Client({
	host: 'localhost',
	port: 5432,
	database: 'myDb',
	user: 'user',
	password:'myPass'
});