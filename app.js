/* When i type something on search textbox, will search GH for that user's profile
    If GH user is not found -> show the alert and clear profile div
    If a GH user is found   -> clear the alert and show profile div
    If search box is empty  -> clear error and profile div 
    Error box is already made so all i need to do is put text in the textNode of the error_container or clear the text if no error
*/
function print(s){console.log(s)}
const gh = new GitHub
const ui = new UI

const user_searchbox = document.querySelector("#search_textbox")                                // The textbox where we search for gh users

user_searchbox.addEventListener("keyup", e => 
{
    const user_input = e.target.value
    if (user_input !== "")                                                                      // SEARCH GH / MARK ERROR ON INPUT: if user inputted somethign and textbox got something -> search gh for it
    { 
        gh.get_profile(user_input)
            .then(data =>   
            {
                if (data.profile.message !== "Not Found"){                                 // If we found a user do...
                    ui.clear_error()
                    ui.show_profile(data.profile)                                                  // show the profile info
                    ui.show_repos(data.repo_list, gh.repo_count)                                                      // show the repos of the user
                   
                    print("----------------")
                    console.log(data.repo_list)
                    
                    print("----------------")

                }
                else{                                                                            // No user found, do...    
                    ui.show_error(`User "${user_input}" doesn't exist`,  'alert alert-danger')          // show error with bootstrap theme classes
                    ui.clear_profile() 
                    ui.clear_repos()    
                }        
            })
            .catch(e => console.log("ERROR MESSAGE: "+e))
    }
    if (user_searchbox.value === ""){                                                           // CLEAR ERROR_BOX IF SEARCH EMPTY: this is so that when i delete everything, the error_box gets reset
        ui.clear_error()                
        ui.clear_profile()                                                                              // clear the profile div
        ui.clear_repos()                                                                                // clear the repo div
    }                                                  
})




/*
    UPDATES: 
        * button to sorty repos by: star count, most code, etc
        * clicking on followers or other shows them
        * input authentication so no sql injection
*/
