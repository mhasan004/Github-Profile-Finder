class UI
{
    constructor(){
        this.profile = document.querySelector("#profile")
        this.repos = document.querySelector("#repos")
        this.make_error_box()                                                                       // Will setr up the error box set up 
    }
    show_profile(user)                                                                              // HTML for the profile info section of the page
    {
        this.profile.innerHTML = `                                                               
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <a href="${user.html_url}" target="_blank">
                            <img id="profile_image" class="img-fluid mb-2" src=${user.avatar_url} alt="Profile Image" >
                            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                        </a>
                    </div>

                    <div class="col-md-9">
                        <div class="profile_badges_div" >
                            <span class="badge badge-primary btn-primary">   Public Repos: ${user.public_repos}</span>                 
                            <span class="badge badge-secondary btn-primary"> Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-success btn-primary">   Followers: ${user.followers}</span>
                            <span class="badge badge-info btn-primary">      Following: ${user.following}</span>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item"> Company: ${user.company}</li>
                            <li class="list-group-item"> Website/Blog: ${user.blog}</li>
                            <li class="list-group-item"> Location: ${user.location}</li>
                            <li class="list-group-item"> Member Since: ${user.created_at.split("T")[0]}</li>
                            <li class="list-group-item"> Bio: ${user.bio}</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        `                                        
    }

    clear_profile(){ this.profile.innerHTML = "" }

    show_repos(repo_list, repo_count){                                                                                   // HTML for the repositories section of the page
        this.repos.innerHTML =  `<h3 class="repo_div page-heading mb-3">Latest ${repo_count} Repositories: </h3>`     
        

        repo_list.forEach(repo =>
        {
            console.log(repo)
            this.repos.innerHTML += `
                
                <div class = "card card-body mb-2">
                    <div class = "row">
                        <div class = "col-md-6">
                            <a href = ${repo.html_url} target="_blank"> ${repo.name} </a>
                        </div>
                        <div class = "col-md-6">
                            <span class="badge badge-primary btn-primary"> Watchers: ${repo.watchers} </span>
                            <span class="badge badge-primary btn-primary"> Stars: ${repo.stargazers_count} </span>
                            <span class="badge badge-primary btn-primary"> Forks: ${repo.forks_count} </span>
                        </div>
                    </div>
                </div>
            `
        })
        //makign it into two columns fail
        // nst add_repo_card = function(repo){
        //     if (repo===null || repo== undefined){
        //         return ''
        //     }
        //     return `<div class = "card card-body mb-2">
        //         <div class = "row">
        //             <div class = "col-md-6">
        //                 <a href = ${repo.html_url} target="_blank"> ${repo.name} </a>
        //             </div>
        //             <div class = "col-md-6">
        //                 <span class="badge badge-primary btn-primary"> Watchers: ${repo.watchers} </span>
        //                 <span class="badge badge-primary btn-primary"> Stars: ${repo.stargazers_count} </span>
        //                 <span class="badge badge-primary btn-primary"> Forks: ${repo.forks_count} </span>
        //             </div>
        //         </div>
        //     </div>`
        // }

        // // repo_list.forEach(repo =>
        // for (let i = 0; i<repo_list.length; i+2)
        // {
        //     this.repos.innerHTML += `
        //         <div class="row">
        //             <div class="col-md-6">
        //                 ${add_repo_card(this.repos[i])}
        //             </div>
        //             <div class="col-md-6">
        //                 ${add_repo_card(this.repos[i+1])}
        //             </div>
        //         </div>
        //     `
        // }
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
        error_container.style.animation = "shake 0.5s"                                              // SHAKE Error div
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
//__________________________________________ Elemnts And Data used _______________________________________________________________//


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

/*_________________________________________ FEATURES _____________________________
    * click on profile pic or button to get to user pagfe

*/