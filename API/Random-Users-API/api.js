randomUsers = () => {
    fetch('https://randomuser.me/api/?results=48')
    .then(users => users.json())
    .then(users => displayUsers(users))
}

randomUsers()

displayUsers = data => {
    console.log('All Users: ', data)
    const users = data.results
    const rootDiv = document.getElementById('ranDomUsers');
    for(let user of users){
        console.log('Single User: ', user)
        const colDiv = document.createElement('div')
        colDiv.classList.add('col-md-3', 'mb-3')
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'bg-dark', 'text-white')
        const cardBodyDiv = document.createElement('div')
        cardBodyDiv.classList.add('card-body')
        cardBodyDiv.innerHTML = `
            <img src="${user.picture.large}" class="rounded mx-auto d-block mb-3" alt="${user.name.title} ${user.name.first} ${user.name.last}">
            <h5 class="card-title text-center text-light">${user.name.title} ${user.name.first} ${user.name.last}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-dark text-white">E-Mail: ${user.email}</li>
              <li class="list-group-item bg-dark text-white">Phone No: ${user.cell} </li>
              <li class="list-group-item bg-dark text-white">Age: ${user.dob.age}</li>
              <li class="list-group-item bg-dark text-white">Location: ${user.location.city}, ${user.location.state}, ${user.location.country}.</li>
            </ul>
            `
        cardDiv.appendChild(cardBodyDiv)
        colDiv.appendChild(cardDiv)
        rootDiv.appendChild(colDiv)
    }
}