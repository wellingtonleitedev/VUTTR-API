import UserService from '../services/UserService';

class UserController {
  async store(req, res) {
    console.log({ res });
    const user = await UserService.signup({ ...req.body });
    res.json(user);
  }
}

export default new UserController();
