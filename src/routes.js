import Home from './routes/Home.svelte'
import Videos from './routes/Videos.svelte'
import NotFound from './routes/NotFound.svelte'
import Projects from './routes/Projects.svelte'
import About from './routes/About.svelte'
export default {
    '/': Home,
    '/videos': Videos,
    '/about': About,
    '/projects': Projects,
    '*': NotFound
}
