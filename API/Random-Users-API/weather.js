weatherBtn = searchText =>{
    const searchInput = document.getElementById('searchText');
    const searchValue = searchInput.value
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=9d17ab3231ce2d397a7375c1b2dfe5c7`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
