import { json } from '@sveltejs/kit';
import * as database from '$lib/DB/database';


export async function POST({ request, cookies }) {
	database.client.connect((err) => {
		if (err) {
		  console.error('connection error', err.stack)
		} else {
		  console.log('connected')
		}
	  })
    
	return json({ id:12 }, { status: 201 });
}