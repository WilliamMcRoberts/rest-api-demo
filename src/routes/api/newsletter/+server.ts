import type { RequestHandler } from "@sveltejs/kit";
import  db  from '$lib/db';


// api/newsletter GET
export const GET: RequestHandler = async (event) => {
    const options: ResponseInit = {
        status: 220,
        headers: {
            x: "Header test"
        }
    }
    const allPosts = await db.post.findMany();

    return new Response(
        "Hello", options
    );
}

// api/newsletter POST

export const POST: RequestHandler = async (event) => {
    const data = await event.request.formData();
    const email = data.get('email');

    console.log(email);

    return new Response(JSON.stringify({success: true}), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}