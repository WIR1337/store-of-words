import { json } from '@sveltejs/kit';
import * as database from '$lib/DB/database';

export async function POST({ request, cookies }) {
	database.pool.query('SELECT * FROM qwe', (err, result) => {
		if (err) {
		  return console.error('Error executing query', err.stack)
		}
		console.log(result) // brianc
	  })
	  
	  database.pool.end(() => {
		console.log('pool has ended')
	  })

	return json({ id: 12 }, { status: 201 });
}
