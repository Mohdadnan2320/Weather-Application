const container = document.querySelector('.container')
const search = document.querySelector('.search')
const weatherBox = document.querySelector('.weather-deatil')
const weatherInfo = document.querySelector('.weather-info')

search.addEventListener('click', () => {
    const APIKEY = '3ca65aba78d2fcd793327158f46d62f4';
    const city = document.querySelector('.city').value;

    const not_found = document.querySelector('.not-found')
    const data= document.querySelector('.weather-deatil')

    if (city == '')
        return;


     container.style.height = '85vh'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
        .then(response => response.json().then(json => {

            if(json.cod == '404'){

                not_found.style.display = 'initial'
                data.style.display = 'none'
                
            }
            else{
                not_found.style.display = 'none'
               data.style.display = 'initial'

               const image = document.querySelector('.weather-image img')
               const temperature = document.querySelector('.weather-deatil .temperature')
               const description = document.querySelector('.description')
               const humidity = document.querySelector('.hudidity-detail .humidity')
               const wind = document.querySelector('.wind-detail .wind')
   
               switch (json.weather[0].main) {
                   case 'Clear':
                       image.src = 'assets/clear.png';
                       break;
   
                   case 'Rain':
                       image.src = 'assets/rain.png';
                       break;
   
                   case 'Snow':
                       image.src = 'assets/snow.png';
                       break;
                   case 'Clouds':
                       image.src = 'assets/cloud.png';
                       break;
                   case 'Mist':
                       image.src = 'assets/mist.png';
                       break;
   
                   case 'Haze':
                       image.src = 'assets/mist.png';
                       break;
   
                   default:
                       image.src = 'assets/cloud.png';
               }
   
               temperature.innerHTML = `${parseInt(json.main.temp)}<i class="ri-celsius-line"></i>`
               description.innerHTML = `${json.weather[0].description}`
               humidity.innerHTML = `${json.main.humidity}%`
               wind.innerHTML = `${parseInt(json.wind.speed)}KM/h`
   
            }


        }))

})
