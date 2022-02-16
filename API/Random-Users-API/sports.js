sportsInfo = (loadData) =>{
    if(loadData === 'allSport'){
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
            .then(res => res.json())
            .then(data => displaySports(data.sports, 'allSports'))
    }else if(loadData === 'allLeagues'){
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => displaySports(data.leagues, 'allLeagues'))
    }else if(loadData === 'allCountries'){
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_countries.php')
            .then(res => res.json())
            .then(data => displaySports(data.countries, 'allCountries'))
    }
}

sportsInfo()

displaySports = (sports, checkLayout) => {
    console.log('Sport: ', sports)
    if(checkLayout === 'allSports'){
        const rootDiv = document.getElementById('allSports')
        rootDiv.innerText = ''
        sports.forEach(sport => {
            console.log('Single Sport: ', sport)
            const createDiv = document.createElement('div')
            createDiv.classList.add('col-md-4', 'p-2')
            createDiv.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${sport.strSportThumb}" class="img-fluid rounded-start" alt="${sport.strSport}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${sport.strSport}</h5>
                <p class="card-text">${sport.strSportDescription.slice(0,50)}...</p>
                <p class="card-text"><small class="text-muted">${sport.strFormat}</small></p>
              </div>
            </div>
          </div>
        </div>`
            rootDiv.appendChild(createDiv)
        })
    }else if(checkLayout === 'allLeagues'){
        const rootDiv = document.getElementById('allSports')
        rootDiv.innerText = ''
        sports.forEach(sport => {
            console.log('Single Sport: ', sport)
            const createDiv = document.createElement('div')
            createDiv.classList.add('col-md-3', 'p-2')
            createDiv.innerHTML = `<div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${sport.strLeague}</h5>
                <p class="card-text">${sport.strLeagueAlternate}</p>
              </div>
        </div>`
            rootDiv.appendChild(createDiv)
        })
    }else if(checkLayout === 'allCountries'){
        const rootDiv = document.getElementById('allSports')
        rootDiv.innerText = ''
        sports.forEach(sport => {
            console.log('Single Sport: ', sport)
            const createDiv = document.createElement('div')
            createDiv.classList.add('col-md-3', 'p-2')
            createDiv.innerHTML = `<div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${sport.name_en}</h5>
              </div>
        </div>`
            rootDiv.appendChild(createDiv)
        })
    }

}
