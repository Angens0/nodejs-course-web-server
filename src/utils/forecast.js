const request = require('request')

const forecast = ({longitude, latitude}, callback) => {
    const token = '084faa9609f60350e65abf5ad4d4dd02'
    const url = `http://api.weatherstack.com/current?access_key=${token}&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
            return
        } else if(body.error) {
            callback('Unable to find location', undefined)
            return
        }
    
        const {weather_descriptions, temperature, feelslike, humidity} = body.current
        const result = `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees. The humidity is ${humidity}%.`
        callback(undefined, result)
    })
}

module.exports = forecast