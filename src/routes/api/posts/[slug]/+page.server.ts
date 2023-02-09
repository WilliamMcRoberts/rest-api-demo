import type { PageServerLoad } from "./$types";
import db from "$lib/db";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({params}) => {
    console.log(params);

    const post = await db.post.findUnique({
        where: {
            slug: params.slug
        }
    })

    if(!post) {
        throw error(404, "Post not found");
    }

    return { post }
}