import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	console.log('Diock asd asdas');
    

	return json({ id:12 }, { status: 201 });
}