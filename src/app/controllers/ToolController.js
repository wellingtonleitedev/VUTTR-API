import ToolService from '../services/ToolService';

class ToolController {
  async index(req, res) {
    const tools = await ToolService.find({ ...req.query });
    return res.json(tools);
  }

  async store(req, res) {
    const tools = await ToolService.create({ ...req.body });
    return res.json(tools);
  }

  async update(req, res) {
    const tools = await ToolService.update({
      id: req.params.id,
      ...req.body,
    });

    return res.json(tools);
  }

  async destroy(req, res) {
    const tools = await ToolService.delete({ ...req.params });
    return res.json(tools);
  }
}

export default new ToolController();
