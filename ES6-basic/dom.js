friendControl = (inputID) => {
    /* Condition Apply For Button Base */
    if(inputID === 'addBorder'){
        console.log('Border Add Properly')
        document.getElementById('friend-list-container').style.border = '10px solid black'
        document.getElementById('friend-list-container').style.padding = '100px'
    }else if(inputID === 'addBackground'){
        console.log('Check the single friend')
        const friends = document.getElementsByClassName('single-friend');
        for(const friend of friends){
            friend.style.background = '#567';
            friend.style.padding = '30px';
            friend.style.margin = '30px'
        }
    }else if(inputID === 'addFriend'){
        const container =  document.getElementById('friend-list-container');
        const friendDiv = document.createElement('div')
        friendDiv.classList.add('single-friend')
        friendDiv.innerHTML = `<h4>New Friend</h4>
            <p>I am two friend</p>`;
        container.appendChild(friendDiv)
    }
}