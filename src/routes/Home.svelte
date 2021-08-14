<script>
    import { labels } from '../stores'
    import Button from 'smelte/src/components/Button'
    import { ProgressCircular } from 'smelte'
    export let imgLoading = true
    const onload = (el) => {
        el.addEventListener('load', () => {
            imgLoading = false
        })
    }
</script>

<div class="flex sm:justify-center lg:justify-start">
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
            <ProgressCircular class="text-xl" />
        </div>

        <h3>DropMania</h3>
        <div class="body-1 text-gray-400">{$labels['about-me']}</div>
    </div>
</div>
