import { error } from '@sveltejs/kit';
import { contents } from '$lib/data/contents.js';

export function load({ params }) {
    const material = contents.find((content) => content.link === "/materials/" + params.file);

	if (!material) throw error(404);

	return {
		material
	};
}
