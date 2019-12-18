import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      res.status(401).json({ message: "Password doesn't match" });
    }

    res.json({ user, token: user.generateToken(user) });
  }
}

export default new SessionController();
