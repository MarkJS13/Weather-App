const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');



//display UI

const displayUI = (data) => {

    const { cityDets: city, weather } = data;
    

    const display = `
    <h5 class="my-3">${city.EnglishName}</h5>
    <h5 class="my-3">${weather.WeatherText}</h5>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    details.innerHTML = display;

    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    };

    // icons
    let iconImg = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconImg);

    //time image --> ternary operator;
    let timeSrc = null;
    if(weather.IsDayTime) {
        timeSrc = 'img/day.svg'
    } else {
        timeSrc = 'img/night.svg'
    }

    time.setAttribute('src', timeSrc);
    
}

//forecast 

const cityLoc = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key); 

    return { cityDets, weather }

}



cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();    
    cityForm.reset();


    cityLoc(city)
    .then(data => displayUI(data))
    .catch(error => console.log(error));

    // set local storage
    localStorage.setItem('city', city);

});

if(localStorage.getItem('city')) {
    cityLoc(localStorage.getItem('city'))
    .then(data => displayUI(data))
    .catch(error => console.log(error))
}
