import User from '../models/User';

class UserService {
  async signup({ name, email, password }) {
    this.verifyFields(name, email, password);
    const user = await User.create({ name, email, password });

    const dto = {
      user: {
        name: user.name,
        email: user.email,
      },
      token: user.generateToken(user),
    };

    return dto;
  }

  verifyFields(name, email, password) {
    if (!name || !email || !password) {
      throw new Error('You need fill all fields');
    }
  }
}

export default new UserService();
