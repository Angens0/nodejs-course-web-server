console.log('Client side javascript file is loaded!')

fetch('http://localhost:3333/weather?address=boston').then(response => {
    response.json().then(data => {
        if(data.error) return console.log(data.error)

        console.log(data.location)
        console.log(data.forecast)
    })
})