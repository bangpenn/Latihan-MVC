const User = require('../models/User');

class UserController {
  static async register(req, res) {
    const { username, password } = req.body;
    await User.create(username, password);
    res.redirect('/');
  }

  static async login(req, res) {
    const { username, password } = req.body;
    const user = await User.findByUsername(username);

    if (user && user.password === password) {
      res.send('Login successful!');
    } else {
      res.send('Invalid username or password');
    }
  }
}

module.exports = UserController;
