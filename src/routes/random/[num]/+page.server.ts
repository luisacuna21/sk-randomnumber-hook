import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	// console.log(locals);
	let randomNumber = getRandomNumber();
	const result = randomNumber * Number(params.num);

	if (result) {
		return {
			randomNumber: randomNumber,
			numTimeRandom: result
		};
	}

	throw error(500, "You can't multiply a string with a number.");
}) satisfies PageServerLoad;

const getRandomNumber = () => {
	return Math.ceil(Math.random() * 100);
};

const isNumber = (num: any) => {
	if (typeof num === "number") return true;
	return false;
};
