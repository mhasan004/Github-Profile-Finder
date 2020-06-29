class UI
{
    constructor(){
        this.profile = document.querySelector("#profile")
        this.repos = document.querySelector("#repos")
        this.make_error_box()                                                                   // Will setr up the error box set up 
    }
    show_profile(user)
    {
        this.profile.innerHTML = `                                                               // HTML for the profile info section of the page
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>

                    <div class="col-md-9">
                        <span class="badge badge-primary btn-primary">Public Repos: ${user.public_repos}</span>                 
                        <span class="badge badge-secondary btn-primary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success btn-primary">Followers: ${user.followers}</span>
                        <span class="badge badge-info btn-primary">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                            <li class="list-group-item">Bio: ${user.bio}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `                                        
    }

    clear_profile(){ this.profile.innerHTML = "" }

    /*  REPO SHOW: each repo will be shown as a div 
            make a div of class: "card card-body mb-2"
            make a div of class: 'row' 
                make two rows div columns of class: 'col-md-6'    
                    On left: a tag link that href=repos.html_url and target='_blank" so that it opens in new tab
                    On right: thre spans with inputs: 
                        repo.stargazers_count,
                        repo.watchers_count,
                        repo.forms_count
    */

    show_repos(repo_list, repo_count){
        this.repos.innerHTML =  `<h3 class="repo_div page-heading mb-3">Latest ${repo_count} Repositories</h3>`     // HTML for the repositories section of the page

        repo_list.forEach(repo =>
        {
            console.log(repo)
            this.repos.innerHTML += `
                <div class = "card card-body mb-2">
                    <div class = "row">
                        <div class = "col-md-6">
                            <a href = ${repo.html_url}> ${repo.name} </a>
                        </div>
                        <div class = "col-md-6">
        
                        </div>
                    </div>
                </div>
            `
        })

        /* REPO ITEM PROPERTIES
                .name            -> link 
                .html_url

                .forks_count
                .stargazers_count,
                .watchers_count,
        */

    }

    clear_repos(){ this.repos.innerHTML = "" }

    // ERROR MESAGE FUNCTIONS:
    make_error_box(){                                                                               // Will put the error_box on top and style it
        const parent_card = document.querySelector(".searchContainer")                              // Find Parent Element we want to append error box to
        const error_container = document.createElement("div");                                      // Make Container: will color the error red so need to put it inside a span
            error_container.className = "error_container"
        parent_card.insertBefore(error_container, parent_card.children[0]);                         // Append Container to Parent Element
    }
    show_error(error_message, class_name){                                                          // class name is 'alert alert-dnager', which is a bootstraps alert theme
        const error_container = document.querySelector(".error_container")
            error_container.textContent = error_message
        const add_class_list = class_name.split(' ')                                                // STYLING: GET THE bootstrap classes      
        add_class_list.forEach((i) => error_container.classList.add(i) )                            // STYLING: Add the bootstrap classes to error alert box 
        error_container.style.display = "block"                                                     // SHOW the error box                                                                  
    }
    clear_error(){
        const error_container = document.querySelector(".error_container")           
        error_container.textContent = ""             
        error_container.style.display = "none"                                                       // HIDE the error box    
    }

}








//__________________________________________ NOTES ON CODE (Bootstraps) _______________________________________________________________//
    /* Bootstraps:
        <div class = "card card-body mb-3"                  // card-body: bootstrap css to give it a shadow. mb-3: margin at bottom of 3
            <div class="row">                               // has 12 columns total
                <div class="col-md-3"> ... </div>
                <div class="col-md-9"> ... </div>
            </div>
        </div>
    */

    /*Bootstrap CSS Def:
        * <div class = "row"> ...see below... </div>
        * <div class = "col-md-3">                      -   3 column row
        * card-body                                     -   gives div a shadow around it
        * mb-3                                          -   margin at bottom of 3px?
    */

    /* Bootstrap Columns
        * Inside 'col-md-3':
            - <img class="" src="url_of_img">                                         // class: img-fluid mb-2
            - <a class="" href="url_to_go-to" target="_blank" >View Profile</a>       // class: btn btn-primary btn-block mb-4     
        * Inside 'col-md-9':
            - <span class="badge badge-primary"> userData </span>
            - <ul class="list-group">
                <li class="list-group-item">  info   </li>
                ...
              </ul>
    */
//__________________________________________ Eleemnts And Data used _______________________________________________________________//

/*  GH user data:
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
/* ELEMENTS: 
    <span class="badge badge-primary"> userData </span>
    <ul class="list-group">
        <li class="list-group-item">  info   </li>
    </ul>
*/

/*  REPO SHOW: 
    < div <a repo_name>                 <star_count> <watcher_count> <fork_count> <description>  
    each repo will be shown as a div 
    make a div of class: "card card-body mb-2"
        make a div of class: 'row' 
            make two rows div columns of col-md-6    
                On left: link that goes to repos.html_url
                On right: three spans with inputs: 
                    repo.stargazers_count,
                    repo.watchers_count,
                    repo.fork_count
*/
/* REPO ITEM PROPERTIES
    .name            -> link 
    .html_url

    .forks_count
    .stargazers_count,
    .watchers_count,
*/


/*
UPDATES: sort by start count, most code, etc
*/
