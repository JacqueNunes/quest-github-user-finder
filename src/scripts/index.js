import { getUser } from '/src/scripts/services/user.js'
import { getRepositories } from '/src/scripts/services/repositories.js'
import { followers } from '/src/scripts/services/followers.js'

import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    if (validateEmpTyInput(userName)) return
    getUserData(userName)
    // getUserRepositories(userName)
})

function validateEmpTyInput(userName) {
    if (userName.lenght === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        validateEmpTyInput(userName)
        getUserData(userName)
        getFollowers(userName)
        // getUserRepositories(userName)
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(user)
    console.log(user)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)

}

//Resoluções da Quest JS Avançado//


function getFollowers(userName) {
    followers(userName).then((followersData) => {
        
    })
}


