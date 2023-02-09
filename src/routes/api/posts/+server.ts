import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";
import  db  from '$lib/db';


// api/posts GET
export const GET: RequestHandler = async ({url}) => {

    const limit = Number(url.searchParams.get('limit') ?? 30);

    const order = url.searchParams.get("order") ?? 'asc';

    const allPosts = await db.post.findMany({
        orderBy: {id: order},
        take: limit
    });

    return json(allPosts);
}

// api/posts POST

