<script lang="ts">
    import type {PageServerData} from "./$types";

    export let data: PageServerData;

    function formatData(date: Date) {
        return new Intl.DateTimeFormat("en", {dateStyle: 'long'}).format(date)
    }
</script>

<hgroup>
    <h1>{data.post.title}</h1>
    <h2>{data.post.createdAt}</h2>
</hgroup>

<div class="content">
    {@html data.post.content}
</div>

