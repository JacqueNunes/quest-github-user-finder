const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    followers: '',
    following: '',
    userName: '',
    repositories: [],
    events: [],
    forks_count: '',
    watchers_count: '',
    language: '',
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.userName = gitHubUser.login
    },
    setRepositories(repositories) {
        console.log(repositories)
        this.repositories = repositories
    },
    setEvents(events) {
        this.events = events
    },
}

export { user }