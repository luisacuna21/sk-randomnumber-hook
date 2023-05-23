import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/banana')) {
		return new Response('🍌');
	}

    console.log(event.params.num);
    return resolve(event);
};
