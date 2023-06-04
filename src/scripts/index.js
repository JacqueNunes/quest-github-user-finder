import { getUser } from '/src/scripts/services/user.js'
import { getRepositories } from '/src/scripts/services/repositories.js'

import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'
import { events } from '/src/scripts/services/event.js'


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    if (validateEmpTyInput(userName)) return
    getUserData(userName)
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
        events(userName)
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await events(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)
      screen.renderUser(user)

}