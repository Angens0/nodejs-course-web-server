console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', event => {
    event.preventDefault()

    const location = encodeURIComponent(search.value)
    const url = `http://localhost:3333/weather?address=${location}`

    fetch(url).then(response => {
        response.json().then(data => {
            if(data.error) return console.log(data.error)

            console.log(data.location)
            console.log(data.forecast)
        })
    })
})