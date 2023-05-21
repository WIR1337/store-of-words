import { json } from '@sveltejs/kit';
import db from '$lib/DB/database';
export async function POST({ request, cookies }) {
	const { sentences, id } = await request.json();
	db.query('UPDATE week SET sentences=$1 WHERE day=$2',[sentences,id],(err, result) => {
		if (err) {
		console.error('Error executing query', err.stack)
		}
	  })
	  
	return json({res:'ok'});
}
