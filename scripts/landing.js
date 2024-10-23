
let acceptedUsers = [
    {
        username: 'james.nguyen@fiserv.com',
        password: 'test123'
    },
    {
        username: 'andrea.macias@fiserv.com',
        password: 'test456'
    }
];

function login(e){
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    const form = document.querySelector('form');
    for(let i = 0; i < acceptedUsers.length; i++){
        if(acceptedUsers[i].username == username){
            if(acceptedUsers[i].password == password){
                form.action = `/feed.html?user=${username}`;
                form.submit();
            }
        }
    }
}