import db from '$lib/DB/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
     db.query('SELECT * FROM public.week',(err, result) => {
		if (err) {
		console.error('Error executing query', err.stack)
		}
        console.log(result.rows,'DICK');
	  })


    return {
        // post: await db.getPost(params.slug)
        qwe: 'qwe'
    };
}