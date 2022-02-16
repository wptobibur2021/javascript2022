/* Api Call For All Posts with function */
loadPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(Posts => uiUsers(Posts))
}
/* All Posts Display With function */

uiUsers = (data) => {
    const allPosts  = document.getElementById('allPosts')
    for(const post of data){
        const classes  = ['col-md-4', 'card', 'text-white', 'bg-secondary', 'mb-3']
        const div = document.createElement('div')
        div.classList.add(...classes)
        div.innerHTML = `<h5 class="card-header card-title">${post.title}</h5>
                         <p class="card-body card-text">${post.body}</p>
                        `
        allPosts.appendChild(div)
        console.log('All Posts', post)
    }
}
