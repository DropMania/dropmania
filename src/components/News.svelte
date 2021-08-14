<script>
    import supabase from '../supabase'
    import { ProgressCircular } from 'smelte'
    import { Card } from 'smelte'
    import { formatDate } from '../utils'
    export let news = []
    export let loading = true
    supabase
        .from('news')
        .select('*')
        .then(({ data, error }) => {
            if (error) {
                console.log(error)
            } else {
                news = data
                loading = false
            }
        })
</script>

<div class="flex flex-1 items-center flex-col mt-10 w-full lg:w-32">
    <h3 class="mb-10">News:</h3>
    {#if loading}
        <ProgressCircular />
    {:else}
        {#each news as entry}
            <Card.Card class="bg-gray-800 max-w-full lg:max-w-3xl p-4">
                <div slot="title" class="flex">
                    <Card.Title
                        classes="text-8xl flex-1"
                        title={entry.title}
                        subheader={entry.creator}
                    />
                    <div class="text-gray-600 mt-3">
                        {formatDate(entry.created_on)}
                    </div>
                </div>
                <div slot="media" class="flex justify-center items-center">
                    <img
                        class="border-4 rounded max-w-sm"
                        src={entry.imgUrl}
                        alt="entry-img"
                    />
                </div>
                <div slot="text" class="text-gray-300 body-1 mt-5 mx-4">
                    {entry.content}
                </div>
            </Card.Card>
        {/each}
    {/if}
</div>
