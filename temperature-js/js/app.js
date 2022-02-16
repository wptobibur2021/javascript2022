console.log('OK')

searchCity = async () =>{
    const searchInputCity = document.getElementById('cityNameInput')
    const searchCityName = searchInputCity.value
    const apiKey = `9d17ab3231ce2d397a7375c1b2dfe5c7`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityName}&units=metric&appid=${apiKey}`
    console.log('URL : ', url)
    searchInputCity.value = ''
    try{
        const res = await fetch(url)
        const data = await res.json();
        disPlayTemp(data)
        console.log('All temperature: ', data)
    }
    catch (e) {
        console.log('Something Wrong: ', e)
    }
}
idInnerText = (id, innerText) =>{
    document.getElementById(id).innerText = innerText
}

disPlayTemp = temp =>{

    idInnerText('cityName', temp.name)
    idInnerText('temperatureShow', temp.main.temp)
    idInnerText('weatherName', temp.weather[0].main)
    idInnerText('weatherDesc', temp.weather[0].description)

    /* Change Weather Icon */
    const iconSrc = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weatherIcon')
    weatherIcon.setAttribute('src', iconSrc)
}
