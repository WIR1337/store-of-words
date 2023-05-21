import db from '$lib/DB/database';
/** @type {import('./$types').PageServerLoad} */

async function selectFrom() {
	try {
		const res = await db.query(`SELECT * FROM public.week`);
		return res.rows;
	} catch (err) {
		return err.stack;
	}
}

export async function load({ params }) {
	const res = await selectFrom();
	return {
		// post: await db.getPost(params.slug)
		qwe: res
	};
}
