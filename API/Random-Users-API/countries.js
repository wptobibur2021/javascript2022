loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(res => displayCountries(res) )
}
loadCountries()

displayCountries = countries =>{
    // for (const country of countries ){
    //     console.log('All Country: ', country)
    // }
    console.log('All Country: ', countries)
    /* For Each */
    const countryListDiv = document.getElementById('countryList')
    countries.forEach( country => {
        // const divRow = document.createElement('div')
        // divRow.classList.add('col-md-4', 'p-3')
        // divRow.innerHTML = `<ul class="list-group list-group-flush">
        //         <li class="list-group-item bg-success text-white">Country Name: ${country.name}</li>
        //       </ul>`
        // countryListDiv.appendChild(divRow)
        // console.log('All Country: ', country)

        const colDiv = document.createElement('div')
        colDiv.classList.add('col-md-3', 'mb-3')
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'bg-dark', 'text-white')
        const cardBodyDiv = document.createElement('div')
        cardBodyDiv.classList.add('card-body')
        cardBodyDiv.innerHTML = `
            <img src="${country.flag}" class="rounded mx-auto d-block mb-3" style="width: 100px; height: 75px" alt="${country.name}">
            <h5 class="card-title text-center text-light">${country.name}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark text-white">Region: ${country.region}</li>
                <li class="list-group-item bg-dark text-white">Sub Region: ${country.subregion}</li>
                <li class="list-group-item bg-dark text-white">Timezones: ${country.timezones}</li>
                <li class="list-group-item bg-dark text-white">Capital: ${country.capital}</li>
                <li class="list-group-item bg-dark text-white">Population: ${country.population}</li>
                <li class="list-group-item bg-dark text-white">Languages: ${country.languages[0].name}</li>
                <li class="list-group-item bg-dark text-white">Calling Codes: ${country.callingCodes}</li>
                <li class="list-group-item bg-dark text-white">AltSpellings: ${country.altSpellings}</li>
                <li class="list-group-item bg-dark text-white">Currencies: ${country.currencies[0].name}</li>
                <li class="list-group-item bg-dark text-white">Currencies Symbol: ${country.currencies[0].symbol}</li>
                <li class="list-group-item bg-dark text-white">Demonym: ${country.demonym}</li>
            </ul>
            `
        cardDiv.appendChild(cardBodyDiv)
        colDiv.appendChild(cardDiv)
        countryListDiv.appendChild(colDiv)
    })
}