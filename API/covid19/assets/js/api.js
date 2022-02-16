console.log('ok')
loadCovidData = async () =>{
    const ApiUrl = `https://api.covid19api.com/summary`
    try {
        const res = await fetch(ApiUrl)
        const data = await res.json()
        displayGlobalData(data.Global)
        disPlayCountry(data.Countries)
    }
    catch (e) {
        console.log('Something is Wrong: ', e)
    }

}
loadCovidData()
displayGlobalData = globalInfo =>{
    console.log('Global Data: ', globalInfo)
    document.getElementById('totalConfirmed').innerText = globalInfo.TotalConfirmed
    document.getElementById('totalDeaths').innerText = globalInfo.TotalDeaths
    document.getElementById('newConfirmed').innerText = globalInfo.NewConfirmed
    document.getElementById('lastUpdate').innerText = globalInfo.Date.slice(0, 10)
}

disPlayCountry = countries =>{
    console.log('All Country: ', countries)
    const rootDiv = document.getElementById('allCountryData')
    countries.forEach( country =>{
        const createDiv = document.createElement('div')
        createDiv.classList.add('col-sm-10', 'col-md-8', 'col-lg-4')
        createDiv.innerHTML = `<div class="box2">
            <div class="box2-content">
                <h5 class="title-country">${country.Country}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-info">Date: ${country.Date.slice(0,10)}</li>
                    <li class="list-group-item">New Confirmed: ${country.NewConfirmed}</li>
                    <li class="list-group-item">New Deaths: ${country.NewDeaths}</li>
                    <li class="list-group-item text-danger">Total Deaths: ${country.TotalDeaths}</li>
                    <li class="list-group-item text-warning">Total Confirmed: ${country.TotalConfirmed}</li>
                </ul>
            </div>
        </div>`
        rootDiv.appendChild(createDiv)
    })
}


/* Bangladesh Hospital */
hospitalBD = async () =>{
    const apiUrlBD = `https://api2.covidhospitalsbd.com/api/available-hospitals`
    try{
        const res = await fetch(apiUrlBD)
        const data = await res.json()
        displayBDHospitalInfo(data.hospitals.data)
        console.log('Hospital BD: ', data.hospitals)
    }catch (e) {
        console.log('Hospital Something Error: ', e)
    }
}
/* Hospital Function Call */
hospitalBD()

displayBDHospitalInfo = hospitals =>{
    const rootDiv = document.getElementById('bdHospitalList')
    hospitals.forEach( hospital => {
        const createDiv = document.createElement('div')
        createDiv.classList.add('col-sm-10', 'col-md-8', 'col-lg-4')
        console.log('Single Hospital: ', hospital)
        createDiv.innerHTML = `
        <div class="box">
            <div class="box-gfx"> <img src="images/hospital-01.png" alt=""></div>
            <div class="box-content">
                <h4 class="title">${hospital.name}</h4>
               <ul class="list-group list-group-flush">
                    <li class="list-group-item text-danger">Available Beds: ${hospital.total_available_beds}</li>
                    <li class="list-group-item">Total Beds: ${hospital.total_beds}</li>
                    <li class="list-group-item text-warning">Oxygen Cylinder: ${hospital.oxygen_total_cylinder}</li>
                    <li class="list-group-item">Last Update: ${hospital.dghs_update.slice(0, 10)}</li>
                    <li class="list-group-item text-danger">Address: ${hospital.phone_number ? hospital.phone_number : 'No Phone Number'}</li>
                    <li class="list-group-item ">Address: ${hospital.address}</li>
                </ul>
            </div>
         </div>`
        rootDiv.appendChild(createDiv)
    })
}