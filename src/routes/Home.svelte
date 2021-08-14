<script>
    import { labels } from '../stores'
    import Button from 'smelte/src/components/Button'
    import { ProgressCircular } from 'smelte'
    import News from '../components/News.svelte'
    export let imgLoading = true
    const onload = (el) => {
        el.addEventListener('load', () => {
            imgLoading = false
        })
    }
</script>

<div
    class="flex justify-center items-center lg:items-start lg:justify-start flex-col lg:flex-row"
>
    <div class="max-w-xs my-10">
        <img
            src="https://ipcvsdfreyisgwvswuvz.supabase.in/storage/v1/object/public/images/Avatar new.png"
            alt="me"
            class="rounded-full border-4 "
            use:onload
            hidden={imgLoading}
        />
        <div
            hidden={!imgLoading}
            class={`rounded-full border-4 h-80 w-80 flex items-center justify-center ${
                !imgLoading && 'hidden'
            }`}
        >
            <ProgressCircular />
        </div>

        <h3>DropMania</h3>
        <div class="body-1 text-gray-400">{$labels['about-me']}</div>
        <div class="flex gap-x-3 mt-4">
            <Button href="https://github.com/DropMania" target="_blank"
                ><i class="fab fa-github fa-lg mr-3" />Github</Button
            >
            <Button
                href="https://www.youtube.com/channel/UCHhjR4GYwEh_4sd8rBx6rmQ"
                target="_blank"
                ><i class="fab fa-youtube fa-lg mr-3" />Youtube</Button
            >
        </div>
    </div>
    <News />
</div>
