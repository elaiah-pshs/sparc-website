import { error } from '@sveltejs/kit';
import materials from '$lib/data/materials.json' assert { type: 'json' };

export function load({ params }) {
	const path = params.file.split('/');
    const material = findMaterial(path, materials);

	if (!material) throw error(404);

	return {
		material
	};
}

function findMaterial(target_path, json) {
	if (target_path.length == 1) return json[target_path[0]];
	else return findMaterial(target_path.slice(1), json[target_path[0]]["children"]);
}
