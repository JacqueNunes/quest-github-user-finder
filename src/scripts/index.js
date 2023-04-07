import { getUser } from '/src/scripts/services/user.js'
import { getRepositories } from '/src/scripts/services/repositories.js'

import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'
import { baseUrl } from '/src/scripts/variables.js'

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

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)

}

//Resoluções da Quest JS Avançado//

async function followers() {
    const response = await fetch('https://api.github.com/users/cadudias/followers')
    return await response.json()

}

function getFollowers() {
    followers().then((followersData) => {
        let followersInfo = `<div class="data">
                                <h1>${followersData.lenght ?? 'Não possui seguidores'}</h1>
                            </div>`

        document.querySelector('.profile-data').innerHTML = followersData
    })
}


getFollowers('cadudias')