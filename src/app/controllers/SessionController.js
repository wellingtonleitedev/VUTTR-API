import SessionService from '../services/SessionService';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await SessionService.store({ email, password });
    res.json(user);
  }
}

export default new SessionController();
