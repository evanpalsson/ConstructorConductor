/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw) {
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here

var users = [this.name, this.email, this.pw];

//Now create and push into your users array 3 seperate instances of User using the data from above in 
  //that exact order

  //code here

var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');


console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here

User.prototype.tylersInfo = function() {
  console.log(this.tyler);
};


console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here

User.prototype.lennysInfo = function() {
  console.log(this.lenny);
};


//Now create another instance of User using your own information and then add that to your users array.

  //code here

var evan = new User('Evan', 'evanpalsson@gmail.com', 'ilovefootball');

users.push(User.evan);


console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here

for (this.name = 0; this.name < users.length; this.name++) {
  console.log(this.name);
};















