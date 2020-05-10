
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("reading user from db");
            resolve({id: id, gitUsername: 'olantobi'});
        }, 2000);
    });    
}

function getRepos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("reading repos...");
            resolve(['farma', 'utilpay', 'boardman']);
        }, 2000);
    });    
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("reading commits from repo...");
            resolve(['scaffolding', 'setting up database migrations', 'setting up authentication system']);
        }, 2000);
    });    
}

const userId = 2;

getUser(userId)
    .then((user) => getRepos(user.gitUsername))
    .then((repos) => getCommits(repos[0]))
    .then((commits) => commits.forEach((commit, index) => {
        console.log((index+1) + '. '+ commit);
    }));