const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const search_text = process.argv[2];
if (!search_text)
    console.log('Enter a location')
else
    geocode(search_text, (error, data = {}) => {
        if (error)
            return console.log(error)
        const { lattitude, longitude, location } = data
        return forecast(lattitude, longitude, (error, forecastData) => {
            if (error)
                return console.log(error)
            console.log(location, `lattitude: ${lattitude}, longitude: ${longitude}`)
            console.log(forecastData.weatherDescription, `It is currently ${forecastData.actualTemperature} degrees out. It feels like ${forecastData.feelsLikeTemperature} degrees out. There is a ${forecastData.precip} chance of rain `)
        })
    })



// IMP Sample Demo Callback 

// const add = (a, b, callback) => {
//     setTimeout(() => {
//         const sum = a + b
//         // return sum  // this wont work try uncommenting this and run
//         callback(sum)
//     }, 5000)
// }

// add(1, 4, (data) => {
//     console.log(data)
// }
// )