export let formatDate = (dateVal) => {
    let date = new Date(dateVal)
    if (date) {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
    } else {
        return ''
    }
}
