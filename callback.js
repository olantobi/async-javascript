
function getUser(id, callback) {
    setTimeout(() => {
        console.log("reading user from db");
        callback({id: id, gitUsername: 'olantobi'});
    }, 2000);
}

function getRepos(username, callback) {
    setTimeout(() => {
        console.log("reading repos...");
        callback(['farma', 'utilpay', 'boardman']);
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log("reading commits from repo...");
        callback(['scaffolding', 'setting up database migrations', 'setting up authentication system']);
    }, 2000);
}

const userId = 2;

getUser(userId, (user) => {
    getRepos(user.gitUsername, (repos) => {
        getCommits(repos[0], (commits) => {
            commits.forEach((commit, index) => {
                console.log((index+1) + '. '+ commit);
            });            
        });
    });
});