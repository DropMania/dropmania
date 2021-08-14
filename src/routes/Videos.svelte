<script>
    import supabase from '../supabase'
    import { Card, TextField } from 'smelte'
    import { formatDate } from '../utils'
    export let loading = true
    let videos = []
    export let filterdVideos = []
    export let filterString = ''
    export let filterVideos = () => {
        filterdVideos = videos.filter((video) => {
            if (
                video.title
                    .toLowerCase()
                    .indexOf(filterString.toLowerCase()) !== -1
            ) {
                return true
            }
        })
    }
    supabase
        .from('video')
        .select('*')
        .then(({ data }) => {
            loading = false
            videos = data
            filterdVideos = videos
        })
</script>

<div class="my-10">
    <TextField
        label="Search"
        prepend="search"
        outlined
        bind:value={filterString}
        on:input={filterVideos}
    />
</div>
<div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
>
    {#each filterdVideos as video}
        <Card.Card class="bg-black">
            <div slot="title">
                <Card.Title
                    title={video.title}
                    subheader={formatDate(video.publishedAt)}
                />
            </div>
            <div slot="media">
                <a
                    href="https://www.youtube.com/watch?v={video.id}"
                    target="_blank"
                    class=""
                >
                    <img class="w-full" src={video.thumbnail} alt="video" />
                </a>
            </div>
        </Card.Card>
    {/each}
</div>
