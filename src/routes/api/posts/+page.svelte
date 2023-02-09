<script lang="ts">
	import type { Post } from "@prisma/client";


    async function getPosts() {
        const response = await fetch("/api/posts");
        const posts: Post[] = await response.json();
        return posts;
    }
</script>

<h1>All Posts</h1>

{#await getPosts()}
        <p>Loading...</p>
    {:then posts}
      {#each posts as {slug, title, content, createdAt}, index}
        <div style:display="flex" style:flex-direction="column">
            <strong>{index + 1}. Title: <a href="/api/posts/{slug}">{title}</a></strong>
            <strong>Date Created: {createdAt}</strong>
            <p><strong>Content:</strong> {content}</p>
        </div>
      {/each}
    {:catch error}
        <p>{error.message}</p>
{/await}