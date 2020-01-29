import SessionService from '../services/SessionService';

class SessionController {
  async store(req, res) {
    const user = await SessionService.signin({ ...req.body });
    res.json(user);
  }
}

export default new SessionController();
