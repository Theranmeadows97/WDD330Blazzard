const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = (data) =>{

    // const cityDets = data.cityDets
    // const weather = data.weather
    const {cityDets, weather} = data

    //update detail template
    details.innerHTML = ` <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;</span>
        </div>`
//remove the d-none class if present

const iconSrc = `weatherAppJs/icons/${weather.WeatherIcon}.svg`
icon.setAttribute('src', iconSrc)


let timeSrc = weather.IsDayTime  ? 'weatherAppJs/day.svg' : 'weatherAppJs/night.svg'
// if(weather.IsDayTime){
//     timeSrc = 'weatherAppJs/day.svg'
// } else {
//     timeSrc = 'weatherAppJs/night.svg'
// }
time.setAttribute('src', timeSrc)

if(card.classList.contains('d-none')){
    card.classList.remove('d-none')

}

}

const updateCity = async(city) => {

    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.Key)

    return {cityDets,weather}

}

cityForm.addEventListener('submit', e => {
    e.preventDefault()

    // get city value
    const city = cityForm.city.value.trim()
    cityForm.reset()

    //update the ui with a new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
})