import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

export const POST = (async ({ request }) => {
	const { num } = await request.json();

	if (isNaN(num)) {
		throw error(500, {
			message: 'num must be a number'
		});
	}
	const randomNumber = Math.ceil(Math.random() * 100);
	const result = randomNumber * Number(num);

	return json({ result: result, randomNumber: randomNumber });

}) satisfies RequestHandler;
