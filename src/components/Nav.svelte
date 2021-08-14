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
    $: current = $location
    export let showDrawer = false
    export let routes = [
        { route: '#/', icon: 'home', title: 'Home' },
        { route: '#/videos', icon: 'video_library', title: 'Videos' },
        { route: '#/projects', icon: 'code', title: 'Projects' }
    ]
</script>

{#if show}
    <div class="flex gap-x-10">
        {#each routes as route}
            <Button href={route.route} text icon={route.icon} iconClass="mx-2"
                >{route.title}</Button
            >
        {/each}
    </div>
{:else}
    <Button
        icon="menu"
        on:click={() => {
            showDrawer = true
        }}
        class="mt-5"
    />
    <NavigationDrawer bind:show={showDrawer}>
        <List items={routes}>
            <span slot="item" let:item class="cursor-pointer">
                <a href={item.route}>
                    <ListItem
                        selected={`#${current}` === item.route}
                        text={item.title}
                        icon={item.icon}
                        dense
                        navigation
                    />
                </a></span
            >
        </List>
    </NavigationDrawer>
{/if}
