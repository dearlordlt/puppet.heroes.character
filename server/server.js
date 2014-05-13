var collections = ['users'];
var dburl = 'localhost/puppetHeroes';

var db = require('mongojs').connect(dburl, collections);

function user(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
}

var user1 = new user("saras", "saras++", "sarunas79@gmail.com");

/*
db.users.save(user1, function(err, savedUser) {
    if(err || !savedUser) {
        console.log("User " + user1.email + " not saved because of error " + err);
    } else {
        console.log("User " + savedUser.email + "saved");
    }
});
*/

db.users.find(user1, function(err, users) {
    if(err || !users.length) console.log("User " + user.email + " not found");
    // if some users are found
    else users.forEach(function (user) {
        console.log('User Found! - ' + user);
    });
})
