/*Create a Class User with properties as name, age & email.
He can login and logout
Create another class Moderator which has all the features of User, plus additional functionality to Add coins and remove coins.
Create one more class Admin which has all the features of Moderator plus additional features like add a Course and delete a particular course for a user.*/

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.coins = 0;
    this.course = [];
  }

  login() {
    console.log(`${this.name} has logged in`);
    return this;
  }

  logout() {
    console.log(`${this.name} has logged out`);
    return this;
  }
}

class Moderator extends User {
  addCoins() {
    this.coins++;
    console.log(`${this.name} has ${this.coins} coins`);
    return this;
  }

  deleteCoins() {
    this.coins--;
    console.log(`${this.name} has ${this.coins} coins`);
    return this;
  }
}
let courses = ["Javascript", "Python", "C"];
class Admin extends Moderator {
  addCourse(user, course) {
    user.course.push(course);
    console.log(user);
    return this;
  }

  deleteCourse(user, course) {
    course -= user.course;
    return this;
  }
}

let user1 = new User("Kee", 22, "kee@gmail.com");
let user2 = new User("San", 24, "san@gmail.com");
user1.login();
user2.login();
let mod1 = new Moderator("Kee", 22, "kee@gmail.com");
let mod2 = new Moderator("San", 24, "san@gmail.com");
mod1.addCoins();
mod2.addCoins();
mod1.addCoins();
mod1.deleteCoins();
mod2.deleteCoins();
let admin1 = new Admin("Cue", 22, "kee@gmail.com");
let users = [user1, user2, mod1, mod2, admin1];

users.forEach((element) => {
  console.log(element);
});
admin1.addCourse(user1, "Javascript");
admin1.addCourse(user1, "Python");
admin1.addCourse(user1, "C");
admin1.deleteCourse(user1, "Javascript");
