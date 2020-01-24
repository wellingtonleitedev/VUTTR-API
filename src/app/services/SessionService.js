import User from '../models/User';

class SessionService {
  async store({ email, password }) {
    let user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    if (!(await user.checkPassword(password))) {
      throw new Error("Password doesn't match");
    }

    user = {
      name: user.name,
      email: user.email,
      token: user.generateToken(user),
    };

    return user;
  }
}

export default new SessionService();
