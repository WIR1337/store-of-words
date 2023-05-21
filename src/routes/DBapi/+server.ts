import { json } from '@sveltejs/kit';
import * as database from '$lib/DB/database';

export async function POST({ request, cookies }) {
	const { sentences, id } = await request.json();
	database.pool.query('UPDATE week SET sentences=$1 WHERE day=$2',[sentences,id],(err, result) => {
		if (err) {
		console.error('Error executing query', err.stack)
		}
	  })
	  
	return json({res:'ok'});
}
