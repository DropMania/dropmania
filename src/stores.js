import { writable } from 'svelte/store'
import supabase from './supabase'
export let loading = writable(true)
export let labels = writable({})
export let loadLabels = async () => {
    const { data, error } = await supabase.from('label').select('*')
    if (!error) {
        let labelData = data.reduce((acc, label) => {
            acc[label.key] = label.text
            return acc
        }, {})
        labels.set(labelData)
        loading.set(false)
    } else {
        console.log(error)
        loading.set(false)
    }
}
