function UserHandler () {
  this.users = {};
}

UserHandler.prototype.addUser = function (nickname) {
  var userId   = this.generateUserId(),
      userKeys = Object.keys(this.users),
      self     = this,
      notTaken;

  notTaken = userKeys.every(function (key) {
    return nickname !== self.users[key].nickname
  });

  if (notTaken) {
    this.users[userId] = {
      nickname: nickname,
      color: this.generateUserColor()
    }

    return userId;
  } else {
    return false;
  }
};

UserHandler.prototype.getUserById = function (userId) {
  return this.users[userId] || null;
};

UserHandler.prototype.generateUserId = function () {
  var id;
  do {
    id = "";
    for (var i = 0; i < 10; i++) {
      id += Math.floor(Math.random() * 16).toString(16);
    }
  } while (id in this.users);

  return id;
};

UserHandler.prototype.generateUserColor = function () {
  var allowedColors = ["#c0392b", "#16a085", "#27ae60", "#2980b9", "#2c3e50", "#8e44ad", "#d35400"];

  return allowedColors[Math.floor(Math.random() * allowedColors.length)];
}


exports.UserHandler = UserHandler;
