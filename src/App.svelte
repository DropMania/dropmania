<script>
    import 'smelte/src/tailwind.css'
    import Router from 'svelte-spa-router'
    import routes from './routes'
    import Nav from '../src/components/Nav.svelte'
    import { ProgressLinear } from 'smelte'
    import { loadLabels, loading } from './stores'

    loadLabels()
</script>

<div class="flex flex-col items-center justify-center">
    <Nav />
    {#if !$loading}
        <main class="container">
            <Router {routes} />
        </main>
    {:else}
        <ProgressLinear />
    {/if}
</div>
