var collections = ['users'];
var dburl = 'localhost/puppetHeroes';

var db = require('mongojs').connect(dburl, collections);

function user(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
}

var user1 = new user("saras", "saras++", "sarunas79@gmail.com");
