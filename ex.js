var levels = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}

class User {
    constructor(userName, xp, arr) {
        this.userName = userName;
        this.xp = xp;
        this.log = arr;
    }
    newSolvedChallengel(Challenge) {
        this.xp = this.xp + levels[Challenge.level];
        this.log.push(Challenge.id);
    }
}

class Challenge {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
}
var user1 = new User("JAD", 0, []);
console.log(user1);
user1.newSolvedChallengel(new Challenge(1, "ME"));
user1.newSolvedChallengel(new Challenge(2, "ME"));
user1.newSolvedChallengel(new Challenge(3, "EA"));

console.log("XP:",user1.xp);
console.log("Log:",user1.log);