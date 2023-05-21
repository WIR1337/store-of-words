import * as database from '$lib/DB/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
     database.pool.query('SELECT * FROM public.week',(err, result) => {
		if (err) {
		console.error('Error executing query', err.stack)
		}
        console.log(result.rows);
	  })


    return {
        // post: await db.getPost(params.slug)
        qwe: 'qwe'
    };
}