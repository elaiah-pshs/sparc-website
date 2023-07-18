import { error } from '@sveltejs/kit';
import { pages, findPage } from '../../../scripts/pages.js';

export function load({ params }) {
	const path = params.file.split('/');
    const material = findPage(path, pages.materials.children);

	if (!material) throw error(404);

	return {
		material
	};
}
