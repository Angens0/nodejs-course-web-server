const request = require('request')

const geocode = (adress, callback) => {
    const token = 'pk.eyJ1IjoiYW5nZW5zMCIsImEiOiJjazhxbHJmcHUwNDlqM3BubGkyb203cmUxIn0.MPiPGwPNCL09ufaLIEllrg'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=${token}&limit=1`

    request({ url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
            return
        }

        const {error:responseError, message, features} = response.body
        if(responseError || message === 'Not Found' || !features.length) {
            callback('Unable to find location', undefined)
            return
        }

        const [longitude, latitude] = features[0].center
        const {place_name:location} = features[0]
        callback(undefined, {longitude, latitude, location})
    })
}

module.exports = geocode