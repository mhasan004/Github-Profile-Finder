// NEED TO HIDE GH IS AND SECRET!
class Github
{
    constructor(repo_count = 5){
        this.client_id     = '33cf60a8781315f4d8ae'                                             
        this.client_secret = 'd78941acfdfe7024fd7fa5335984406d23888c19' 
        this.repo_count = repo_count                                            // REPO: setting repo to load 
        this.repos_sort  = 'created: asc'                                       // REPO: sort the query

    }
    async get_profile(username)
    {
        const URL_API_KEYS   = `client_id=${this.client_id}&client_secret=${this.client_secret}`
        const URL_REPO_QUERY = `per_page=${this.repo_count}&sort=${this.repos_sort}`

        const profile_response = await fetch(`https://api.github.com/users/${username}?${URL_API_KEYS}`)                        // get gh profile that contains all the users info including repos
        const repos_response   = await fetch(`https://api.github.com/users/${username}/repos?${URL_REPO_QUERY}&${URL_API_KEYS}`)  // get gh profile that contains all the users info including repos
        const profile   = await profile_response.json()
        const repo_list = await repos_response.json()

        return {                                                                // ** wrap the promise in an object to return 
            profile,
            repo_list
        }                                               
    }   
}
























//__________________________________________ NOTES ____________________________________________________________________//

/* WHY Promises & async & await are better than callbacks: 
    * in callbacks, will need to make one callback, get res, than do another callback, get res
    * but here, can do it asynchronously
    * returning two Promise objs: 
        return { profile: profileUser; profileRepo = profileRepo}
*/


/*  
    GH RETURN DATA:
        .avatar_url     - gh profile image
        .html_url       - gh link         

        .public_repos
        .public_gists
        .followers
        .following

        .company
        .blog
        .location
        .created_at
*/