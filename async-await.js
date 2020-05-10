
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

async function getUserCommits(userId) {
    const user = await getUser(userId);
    const repos = await getRepos(user.gitUsername);
    const commits = await getCommits(repos[0]);
    commits.forEach((commit, index) => {
        console.log((index+1) + '. '+ commit);
    });
}

const userId = 2;

getUserCommits(userId);