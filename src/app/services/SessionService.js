import User from '../models/User';

class SessionService {
  async signin({ email, password }) {
    verifyFields({ email, password });

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    if (!(await user.checkPassword(password))) {
      throw new Error("Password doesn't match");
    }

    const dto = {
      user: {
        name: user.name,
        email: user.email,
      },
      token: user.generateToken(user),
    };

    return dto;
  }

  verifyFields({ email, password }) {
    if (!email || !password) {
      throw new Error('You need fill all fields');
    }
  }
}

export default new SessionService();
