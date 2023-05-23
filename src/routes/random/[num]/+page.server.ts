import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const numAsNumber = Number(params.num);

	if (isNaN(numAsNumber)) throw error(500, "You can't multiply a string with a number.");

	const response = await fetch('http://localhost:5173/api/random-number/', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			num: numAsNumber
		})
	});	

	const data = await response.json();

	const randomNumber = data['randomNumber'];
	const result = data['result'];

	// console.log(`The setted number is ${numAsNumber}`);
	// console.log(`The random number is ${randomNumber}`);
	// console.log(`The result is ${result}`);

	if (result) {
		return {
			randomNumber: randomNumber,
			result: result
		};
	}

	throw error(404, 'Not Found');
}) satisfies PageServerLoad;