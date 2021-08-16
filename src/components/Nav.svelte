<script>
    import {
        Button,
        breakpoints,
        NavigationDrawer,
        List,
        ListItem
    } from 'smelte'
    import { location } from 'svelte-spa-router'
    const bp = breakpoints()
    $: show = $bp !== 'sm'
    console.log($location)
    export let routes = [
        { route: '#/', icon: 'home', title: 'Home' },
        { route: '#/videos', icon: 'video_library', title: 'Videos' },
        { route: '#/projects', icon: 'code', title: 'Projects' },
        { route: '#/about', icon: 'person', title: 'About' }
    ]
</script>

{#if show}
    <div class="flex gap-x-10">
        {#each routes as route}
            <Button
                href={route.route}
                class={`${'#' + $location == route.route ? 'bg-gray-800' : ''}`}
                text
                icon={route.icon}
                iconClass="mx-2">{route.title}</Button
            >
        {/each}
    </div>
{:else}
    <div class="flex gap-x-2">
        {#each routes as route}
            <Button
                href={route.route}
                text
                class={`${'#' + $location == route.route ? 'bg-gray-800' : ''}`}
                icon={route.icon}
                iconClass="mx-0"
            />
        {/each}
    </div>
{/if}
