import Home from './routes/Home.svelte'
import Videos from './routes/Videos.svelte'
import NotFound from './routes/NotFound.svelte'
export default {
    '/': Home,
    '/videos': Videos,
    '*': NotFound
}
