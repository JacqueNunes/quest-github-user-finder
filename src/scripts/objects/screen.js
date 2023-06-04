const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {

        this.userProfile.innerHTML = `<div class="info">
                                     <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                              <div class="data">
                                                 <h1>${user.name ?? `Não possui nome cadastrado 🥲`}</h1>
                                                  <p>${user.bio ?? `Não possui bio cadastrada 🥲`}</p>
                                                  <p><img class="followers" src="src/img/followers.png">Seguidores: ${user.followers}</p>
                                                  <p><img class="following" src="src/img/following.png">Seguindo: ${user.following}</p>
                                             </div>
                                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                    <div class="requisicao">
                                                                        <span><img src="src/img/git-fork-bold.svg">${repo.forks_count}</span>
                                                                        <span><img src="src/img/star-bold.svg">${repo.stargazers_count ?? `Não possui estrelas`}</span>
                                                                        <span><img src="src/img/file-code-bold.svg">${repo.language ?? `🤷🏻`}</span>
                                                                        <span><img src="src/img/swatches-bold.svg">${repo.watchers_count}</span>
                                                                    </div>
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`

        }
        let eventItens = ''
        user.events.forEach(event => {
            if (event.type === "CreateEvent" || event.type === "PushEvent") {
                const repoName = event.repo.name;
                
                if (event.payload.commits) {
                    eventItens += `<li>${event.repo.name} - ${event.payload.commits[0].message}</li>`

                }
            }
        })
        this.userProfile.innerHTML += `<div class="events">
                                            <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                        </div>`
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    }
}

export { screen } 