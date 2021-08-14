<script>
    import { location } from 'svelte-spa-router'
    import Button from 'smelte/src/components/Button'
</script>

<div class="flex gap-x-10">
    <Button href="/#/" text icon="home" iconClass="mx-2 color-primary"
        >Home</Button
    >
    <Button href="/#/videos" text icon="video_library" iconClass="mx-2"
        >Videos</Button
    >
</div>
