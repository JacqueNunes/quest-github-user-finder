const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    followers: '',
    userName: '',
    repositories: [],
    setInfo (gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.userName = gitHubUser.login
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export{ user}